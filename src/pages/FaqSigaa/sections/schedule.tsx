import React, {
  useState,
  useCallback,
  FormEvent,
  useEffect,
} from 'react';

import diasDaSemana from '../../../assets/faq-dias.png';
import exemploHorario from '../../../assets/faq-exemplo.png';
import turnos from '../../../assets/faq-turnos.png';
import horarios from '../../../assets/faq-horarios.png';
import { parseHorario } from '../../../utils/parseOferta';
import * as themes from '../../../theme/schema.json';
import { getFromLS } from '../../../utils/localStorage';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
/*
  Página FAQ SIGAA - Bruna
*/


const ScheduleSigaa: React.FC = () => {
  const [sigla, setSiglaValue] = useState('');
  const [parse, setParse] = useState('');
  const [theme, setTheme] = useState(themes.data.light);

  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
  }, []);


  const handleSubmitValue = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(() => {
    if (sigla !== '') setParse(parseHorario(sigla));
  }, [sigla]);

  return (
    <>
      <h3>Entendendo os horários</h3>
      <p>
        O formato do novo padrão de horários do SIGAA deu o que comentar.
        Muitos alunos não sabem ainda como decifrar essa sigla, mas no fim
            das contas é bem simples: <br /> O horário é composto por números e
            letras que representam os dias e turnos da turma. Veja como
            calcular:
          </p>
      <img src={diasDaSemana} alt="horarios" />
      <img src={turnos} alt="horarios" />
      <img src={horarios} alt="horarios" />
      <img src={exemploHorario} alt="horarios" />
      <p>
        Agora que já sabe como decifrar qual horário cada sigla representa,
            para que ter esse trabalho, não é mesmo? <br /> Faça isso de forma
            automática:
          </p>
      <form onSubmit={handleSubmitValue} className="form">
        <TextField
          id="filled-basic"
          label="Digite a sigla aqui"
          variant="filled"
          style={{ width: 200, background: '#FFF', borderRadius: 10 }}
          onChange={event => {
            setSiglaValue(event.target.value);
          }}
        />
        <div className="buttonForm">
          <Button
            onClick={handleSubmit}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: theme.colors.color,
              width: 200,
              marginTop: 10,
            }}
          >
            Decifrar!
              </Button>
        </div>
      </form>
      <div className="message">
        {parse !== '' && parse !== 'Erro' && (
          <p className="parsed">{parse}</p>
        )}
        {parse === 'Erro' && <p className="erro">Formato Inválido!</p>}
      </div>
    </>
  );
};

export default ScheduleSigaa;
