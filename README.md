# mw-melhorado-back

## Descrição
Repositório de backend do MwMelhorado feito em Django

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
