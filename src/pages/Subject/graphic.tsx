import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CanvasJSReact from '../../assets/canvasjs.react.js';

import { Subject } from './index';

import { GraphicContainer } from './styles';

/*
  Página de Disciplina - Bruna
*/

interface GraphicProps {
  subject: Subject;
  window: boolean;
}

interface OptionsProps {
  animationEnabled: boolean;
  title: {
    text: string;
  };
  legend: {
    maxWidth: number;
  };
  data: {
    color: string;
    type: string;
    name: string;
    showInLegend: boolean;
    dataPoints: { label: string; y: number }[];
  }[];
}

const Graphic: React.FC<GraphicProps> = ({ subject, window }: GraphicProps) => {
  const ss = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.ss };
  });

  const ms = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.ms };
  });

  const mm = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.mm };
  });

  const mi = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.mi };
  });

  const ii = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.ii };
  });

  const sr = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.sr };
  });

  const tr = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.tr };
  });

  const tj = subject.grade_infos.map(grade_info => {
    return { semester: grade_info.semester, count: grade_info.grades.tj };
  });

  const options: OptionsProps = {
    animationEnabled: true,
    title: {
      text: 'Gráfico de Menções da Disciplina',
    },
    legend: {
      maxWidth: window ? 150 : 300,
    },
    data: [
      {
        color: '#FF0000',
        type: 'stackedColumn',
        name: 'SR',
        showInLegend: true,
        dataPoints: sr.map(srLabel => {
          return { label: srLabel.semester, y: srLabel.count };
        }),
      },
      {
        color: '#FF8700',
        type: 'stackedColumn',
        name: 'II',
        showInLegend: true,
        dataPoints: ii.map(iiLabel => {
          return { label: iiLabel.semester, y: iiLabel.count };
        }),
      },
      {
        color: '#FFEC00',
        type: 'stackedColumn',
        name: 'MI',
        showInLegend: true,
        dataPoints: mi.map(miLabel => {
          return { label: miLabel.semester, y: miLabel.count };
        }),
      },
      {
        color: '#B6FF00',
        type: 'stackedColumn',
        name: 'MM',
        showInLegend: true,
        dataPoints: mm.map(mmLabel => {
          return { label: mmLabel.semester, y: mmLabel.count };
        }),
      },

      {
        color: '#00FFE4',
        type: 'stackedColumn',
        name: 'MS',
        showInLegend: true,
        dataPoints: ms.map(msLabel => {
          return { label: msLabel.semester, y: msLabel.count };
        }),
      },
      {
        color: '#003AFF',
        type: 'stackedColumn',
        name: 'SS',
        showInLegend: true,
        dataPoints: ss.map(ssLabel => {
          return { label: ssLabel.semester, y: ssLabel.count };
        }),
      },
      {
        color: '#2C3A68',
        type: 'spline',
        showInLegend: true,
        name: 'Trancamento',
        dataPoints: tr.map(trLabel => {
          return { label: trLabel.semester, y: trLabel.count };
        }),
      },
      {
        color: '#8A0C90',
        type: 'spline',
        showInLegend: true,
        name: 'Trancamento Justificado',
        dataPoints: tj.map(tjLabel => {
          return { label: tjLabel.semester, y: tjLabel.count };
        }),
      },
    ],
  };

  return (
    <Slide direction="up" in mountOnEnter unmountOnExit>
      <GraphicContainer window={window}>
        <Paper>
          <CanvasJSReact.CanvasJSChart options={options} />
        </Paper>
      </GraphicContainer>
    </Slide>
  );
};

export default Graphic;
