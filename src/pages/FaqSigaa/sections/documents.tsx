import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import emitirHistorico from '../../../assets/emitirHistorico.png';
import * as themes from '../../../theme/schema.json';
import { getFromLS } from '../../../utils/localStorage';
/*
  Página FAQ SIGAA - Bruna
*/

const DocumentsSigaa: React.FC = () => {
  const [theme, setTheme] = useState(themes.data.light);
  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
  }, []);
  return (
    <>
      <h3>Onde emito meu histórico escolar?</h3>
      <p>
        Para isso, precisamos fazer o login na plataforma, com sua matrícula e
        sua senha! Depois, basta clicar no menu superior esquerdo com o nome{' '}
        <span className="negrito">Ensino</span> e{' '}
        <span className="negrito">Emitir Histórico</span>. Outros documentos
        podem ser emitidos pela mesma aba, como{' '}
        <span className="negrito">Declaração de Vínculo</span> e{' '}
        <span className="negrito">Atestado de Matrícula</span>.
      </p>
      <p>
        Além de emitir o Histórico, podemos acessar nossas notas em todas as
        disciplinas já cursadas sem precisar emitir nenhum documento. Basta
        entrar no link <span className="negrito">Consultar Minhas Notas</span>{' '}
        localizada na mesma aba.
      </p>
      <div className="button">
        <Button
          onClick={() => {
            window.open('https://autenticacao.unb.br/sso-server/login');
          }}
          variant="outline-light"
          style={{
            color: theme.colors.color,
            borderColor: theme.colors.color,
          }}
        >
          Fazer login SIGAA
        </Button>
      </div>
      <img src={emitirHistorico} alt="historico" />
    </>
  );
};

export default DocumentsSigaa;
