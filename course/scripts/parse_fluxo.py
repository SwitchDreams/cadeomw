from course.models import Course, Subject, PreRequisiteSet, PreRequisite


def format_datetime(datetime):
    """ Transforma uma string de texto do padrão br (DD/MM/YYYY) -> (YYYY-MM-DD)"""
    if datetime is None:
        return None
    date = datetime.split('/')
    if len(date) == 3:
        return date[2] + '-' + date[1] + '-' + date[0]
    else:
        return None


def remove_duplicates(list_of_list):
    """ Remove pré-requisitos duplicados """
    new_list = []
    for elem in list_of_list:
        if elem not in new_list:
            new_list.append(elem)
    return new_list


def save_prerequisites(prerequisite_dict):
    """ Salva os pré-requisitos """
    print("Salvando Pré-Requisitos...")
    for key, value in prerequisite_dict.items():
        for prerequisite_set_list in value:
            prerequisite_set = PreRequisiteSet.objects.create(subject_id=key)
            for prerequisite_code in remove_duplicates(prerequisite_set_list):
                try:
                    PreRequisite.objects.create(prerequisite_set=prerequisite_set, subject_id=prerequisite_code)
                except:
                    # Adiciona na lista de disciplinas que deram errado
                    print("Disciplina não existe:" + prerequisite_code)
                    if len(prerequisite_set_list) > 1:
                        prerequisite_set.delete()
                        break


def parse_geral(filepath):
    """
    Parse text at given file path

    :param filepath: str
        Filepath for file_object to be parsed

    :return: nothing
    """
    with open(filepath, 'r', encoding="ISO-8859-1") as file:
        prerequisite_dict = {}
        curso = None
        linhas = file.readlines()
        for idx, linha in enumerate(linhas):

            # Se a linha for branca não coleta informação
            if linha == '\n':
                continue

            # Separa a linha com espaços
            linha_split = linha.split()

            # Coletando data de emissão
            if linha_split[0] == "Secretaria":
                prox_linha = linhas[idx + 1]
                prox_linha = prox_linha.split()
                data_emissao = prox_linha[0]

            # Colentado  o nome e código do curso
            if linha_split[0] == "Opção:":
                nome_curso = ' '.join(linha_split[3:])
                codigo_curso = linha_split[1]

            # Coletando informação de período de referência
            if ' '.join(linha_split[0:3]) == "Período de Referência":
                prox_linha = linhas[idx + 1]
                prox_linha = prox_linha.split()
                periodo_init = prox_linha[0]
                if (len(prox_linha) > 2):
                    periodo_fim = prox_linha[2]
                else:
                    periodo_fim = None

                periodo = 0
                # Criando o curso
                curso = Course(code=codigo_curso, name=nome_curso,
                               issue_date=format_datetime(data_emissao), begin_date=format_datetime(periodo_init),
                               end_date=format_datetime(periodo_fim))
                curso.save()
            # Setando o Periodo das disciplinas seguintes
            if linha_split[0] == "Período:":
                periodo = linha_split[1]

            # Condição para começar informação do curso(formato: ex: 8 OBR F)
            if linha_split[0].isnumeric() and len(linha_split) == 3:

                # Coletando informações da disciplina
                modalidade = linha_split[1]
                departamento = linhas[idx + 1].split()[0]
                codigo_disciplina = linhas[idx + 1].split()[1]
                nome = ' '.join(linhas[idx + 1].split()[2:])
                creditos = int(linhas[idx + 2].split()[0]) + int(linhas[idx + 3].split()[0])

                # Criando disciplina
                disciplina = Subject(code=codigo_disciplina, department=departamento, name=nome, credit=creditos)
                disciplina.save()
                # Adicionando Disciplina no curso
                curso.adicionar_disciplina(periodo, codigo_disciplina, modalidade)

                listaPreRequisitos = []
                # (Adicionando Pre-requisitos) Enquanto não começar outro curso
                for i in range(idx + 6, len(linhas)):

                    # Se a linha for toda branca -> pula o loop
                    if linhas[i] == '\n':
                        continue

                    aux_split = linhas[i].split()

                    # Condição para começar outro curso ou outro periodo
                    if aux_split[0].isnumeric() and len(aux_split) == 3 or aux_split[0] == "Período:":
                        break

                    # Logica para adicionar os pre-requisitos na listaDepreRequisitos da disciplina
                    # Se a linha for do tipo: ex: MAT 113042
                    if len(aux_split) >= 2:
                        if len(aux_split[0]) == 3 and aux_split[1].isnumeric() and len(aux_split[1]) == 6:
                            codigo_pre_requisito = aux_split[1]

                            # Proxima linha tem um formato (NOME DA MATERIA E/OU/ )
                            prox_linha = linhas[i + 1].split()

                            # Se o ultimo termo da linha for OU, espera para adicionar futuramente no formato lista de lista
                            if prox_linha[-1] == "E":
                                listaPreRequisitos.append(codigo_pre_requisito)
                            elif prox_linha[-1] == "OU":
                                listaPreRequisitos.append(codigo_pre_requisito)
                                if disciplina.code in prerequisite_dict:
                                    prerequisite_dict[disciplina.code].append(listaPreRequisitos)
                                else:
                                    prerequisite_dict[disciplina.code] = [listaPreRequisitos]
                                listaPreRequisitos = []
                            # Se for E ou algum outro char adiciona na lista de preRequisitos
                            else:
                                listaPreRequisitos.append(codigo_pre_requisito)
                                if disciplina.code in prerequisite_dict:
                                    prerequisite_dict[disciplina.code].append(listaPreRequisitos)
                                else:
                                    prerequisite_dict[disciplina.code] = [listaPreRequisitos]
                                listaPreRequisitos = []
        save_prerequisites(prerequisite_dict)


def run():
    print("Iniciando parse do fluxo geral...")
    parse_geral("data/sigra/fluxos/fluxos_geral.txt")
    print("Término do parse do fluxo geral...")
