import { useState } from 'react';
import Daytime from './components/Daytime';
import Night from './components/Night';
import Player from './components/Player';
import RoleSample from './components/RoleSample';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const steps = ['type', 'player', 'role', 'night', 'daytime', 'blank'];

const NewRecord = () => {
  const [step, setStep] = useState<string>(steps[0]);
  const onSubmit = (i: number) => () => {
    setStep(steps[i]);
  };

  return (
    <div className={style.self}>
      {step === steps[0] && <Type onClick={onSubmit(1)} />}
      {step === steps[1] && <Player onClick={onSubmit(2)} />}
      {step === steps[2] && <RoleSample onClick={onSubmit(3)} />}
      {step === steps[3] && <Night onClick={onSubmit(4)} />}
      {step === steps[4] && <Daytime onClick={onSubmit(5)} />}
    </div>
  );
};

export default NewRecord;
