import { useState } from 'react';
import { Stage } from 'src/constant/Stage';
import StageType from './component/StageType';

const Record1 = () => {
  const [stage, setStage] = useState<Stage>(Stage.Type);

  const goStage = (s: Stage) => {
    setStage(s);
  };

  return <div>{stage === Stage.Type && <StageType goStage={goStage} />}</div>;
};

export default Record1;
