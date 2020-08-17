import React from 'react';
import { useCountUp } from 'react-countup';

interface CountUpProps {
  startNum: number;
  endNum: number;
}
const CountUp: React.FC<CountUpProps> = ({
  startNum,
  endNum,
}: CountUpProps) => {
  const { countUp } = useCountUp({
    start: startNum,
    end: endNum,
  });

  return (
    <div>
      <div>{countUp}</div>
    </div>
  );
};

export default CountUp;
