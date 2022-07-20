# mw-melhorado-back

## Descrição
Repositório de backend do MwMelhorado feito em Django

## Docker

Para rodar utilizando o docker-compose

```docker-compose up -d```

## Instalação
1. Instale o python no seu pc
2. Utilize o comando ```pip install -r requirements.txt``` na pasta root do projeto
3. Configure seu banco de dados psql no arquivo mw_melhorado_back.settings.py
4. Utilize o comando abaixo para montar o schema do database
```python manage.py migrate```
5. Utilize o comando para popular o banco de dados de sua API:
```python manage.py runscript db_setup```
6. E por fim para rodar o servidor: 
```python manage.py runserver```

## Pré-processamento
No setup do banco de dados já é feito o pré-processamento para diminuir querys de banco de dados e melhorar a performance 
do backend, porém caso necessite fazer de forma individual para algum curso ou disiciplina utilize:
### Para um curso em específico
```python manage.py runscript preprocess.course --script-args course_id```
### Para todos os cursos
```python manage.py runscript preprocess.course --script-args all```
### Para uma disciplina em específica
```python manage.py runscript preprocess.subject --script-args subject_sigaa_id```
### Para todas as disciplinas
```python manage.py runscript preprocess.subject --script-args all```