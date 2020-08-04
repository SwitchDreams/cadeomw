from course.models import Equivalence, Option, Subject

def parse_equivalencia(filepath):
    """
    Parse um arquivo de equivalências recebido pelo filepath

    :param filepath: str
        arquivo de equivalências

    :return: list: Equivalencia
        lista de Equivalências
    """
    with open(filepath, 'r', encoding="ISO-8859-1") as file:
        linhas = file.readlines()
        # listaEquivalencia = list()
        isInsideValidade = False
        isInsideOpcao = False
        for idx, linha in enumerate(linhas):

            # Se estiver dentro da parte de validade
            if isInsideValidade:
                # Se a linha for em branco cria a equivalencia e mostra que resetou a validade e a opcao
                if linha == '\n':
                    try:
                        eq = Equivalence(
                            coverage=abrangencia.split(',')[0],
                            destination_id=destino,
                            subject_id=disciplina,
                            direction=direcao
                        )

                        eq.save()

                        try:
                            for op in listOpcoes:
                                print('ALOHA OP: '+op)
                                o = Option(
                                    course=op,
                                    equivalence=eq
                                )
                                o.save()
                        except e:
                            print("Erro ao criar opção: {}".format(op))
                    except:
                        print("Disciplina não existe. Subject: {}, Destination {}".format(disciplina, destino))



                    isInsideValidade = False
                    isInsideOpcao = False
                    continue
                else:
                    # Se não for em branco da split na linha para utiliza-la posteriormente
                    linha_split = linha.split()

                # Se a linha for 'Disciplinas Destino:' procura o próximo código de disciplina que aparece
                if linha_split[0] == 'Disciplinas' and linha_split[1] == 'Destino:':
                    # Procura disciplina
                    for i in range(idx, len(linhas)):
                        # Se a linha for toda branca -> pula o loop
                        if linhas[i] == '\n':
                            continue
                        aux_split = linhas[i].split()
                        if aux_split[0].isnumeric() and len(aux_split[0]) == 6:
                            destino = aux_split[0]
                            break
                # Se linha for 'Válido para opção:'
                elif linha_split[0] == 'Válido' and linha_split[1] == 'para':
                    # Reseta a lista de opções e abre o escopo de opcoes
                    listOpcoes = []
                    isInsideOpcao = True
                # Se estiver dentro do escopo da opção
                elif isInsideOpcao:
                    # Adiciona a disiciplina(Talvez possa da errado caso termine a página do arquivo)
                    op = linha_split[0].split('-')[0]
                    if op.isnumeric():
                        listOpcoes.append(op)
            # Caso não esteja dentro do escopo da validade
            else:
                # Se a linha for branca não coleta informação
                if linha == '\n':
                    continue

            linha_split = linha.split()

            if linha_split[0] == 'Disciplina':
                disciplina = linha_split[1]

            if linha_split[0] == 'Validade:':
                abrangencia = linha_split[6]
                direcao = linha_split[-1]
                isInsideValidade = True


def run():
    print('Iniciando o parse do arquivo de equivalências')
    parse_equivalencia('data/sigra/equivalencias/equivalencias_cic.txt')
    print('Término do parse do arquivo de equivalências')
