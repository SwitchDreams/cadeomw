from course.models import SemesterGrade
import glob


def update_mencao_database():
    """ Método para coletar todos arquivos de mencao e executar o meptodo parse_mencao """
    for file in glob.glob('data/sigra/mencoes/*.txt'):
        parse_mencao(file)


def parse_mencao(filepath):
    """ Método para fazer o parse e salvar no banco dados de um único arquivo de mencoes da unb """
    with open(filepath, 'r', encoding="ISO-8859-1") as file:
        linhas = file.readlines()
        notCriado = True
        for idx, linha in enumerate(linhas):
            # Se a linha for branca não coleta informação
            if linha == '\n':
                continue

            linha_split = linha.split()

            # Se já não tiver sido criada
            if notCriado:
                # Periodo cria objeto mencoes no periodo
                if linha_split[0] == "Período:":
                    semester = linhas[idx + 1].split()[0]
                    notCriado = False

            if linha_split[0] == "Disciplina:":
                # 2 linha código da disciplina
                codigoDisciplina = linhas[idx + 2].split()[0]

                # 6 linha turma
                linha_turma = linhas[idx + 6].split()
                # Se tiver mais que 1 elemento na linha da turma
                if (len(linha_turma) >= 2):
                    # A disciplina possui turmas
                    turma = linha_turma[1]
                else:
                    # A disciplina não possui turmas
                    turma = None

                # Guarda as notas do semestre no sistema
                try:
                    SemesterGrade.objects.create(subject_id=codigoDisciplina, semester=semester, room=turma,
                                                 ss=linhas[idx + 8].split()[3],
                                                 ms=linhas[idx + 9].split()[4],
                                                 mm=linhas[idx + 10].split()[3],
                                                 mi=linhas[idx + 11].split()[4],
                                                 ii=linhas[idx + 12].split()[3],
                                                 sr=linhas[idx + 13].split()[4],
                                                 tr=linhas[idx + 14].split()[3],
                                                 tj=linhas[idx + 15].split()[4],
                                                 cc=linhas[idx + 16].split()[4]
                                                 )
                except:
                    print("Disciplina não existe:" + codigoDisciplina)


def run():
    print("Ínico do parse dos arquivos das menções... ")
    update_mencao_database()
    print("Fim do parse dos arquivos das menções... ")