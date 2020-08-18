# mw-melhorado-back

## Descrição
Repositório de backend do MwMelhorado feito em Django

## Instalação
1. Instale o python no seu pc
2. Utilize o comando ```pip install -r requirements.txt``` na pasta root do projeto
3. Configure seu banco de dados psql no arquivo mw_melhorado_back.settings.py
4. Utilize o comando abaixo para montar o schema do database
```python manage.py migrate```
5. Utilize os comandos abaixo em ordem para popular sua API:
```python manage.py runscript parse_fluxo```
```python manage.py runscript parse_mencao```
```python manage.py runscript refactor_course_name```
6. E por fim para rodar o servidor: 
```python manage.py runserver```

## Cadê o MW? V2.0

### Refatoração dos parsers (01/09/2020)

- [ ] Parse da Oferta (Waliff)
- [ ] Parse do Curso (Bahia + Pedro)
  - [ ] Parse do Currículo (Bahia)
  - [ ] Parse do Fluxo (Pedro)
- [ ] Parse dos Departamentos (Bruna)
  
### Adsense
- [ ] Pesquisar novas maneiras de ganhar dinheiro no site
Japa

