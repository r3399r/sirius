import { useState } from 'react';
import Daytime from './components/Daytime';
import Night from './components/Night';
import Player from './components/Player';
import Role from './components/Role';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const night = ['witch', 'seer', 'guard', 'hunter', 'wolf-king'];
const steps = ['type', 'player', 'role', night, 'daytime', 'blank'];

const NewRecord = () => {
  const [step, setStep] = useState<string>(steps[0][0]); // 同時宣告step(值) setStep(function)

  const onSubmit = (i: number, j: number) => () => {
    setStep(steps[i][j]);
  };

  return (
    <div className={style.self}>
      {step === steps[0][0] && <Type onClick={onSubmit(1, 0)} />}
      {step === steps[1][0] && <Player onClick={onSubmit(2, 0)} />}
      {step === steps[2][0] && <Role onClick={onSubmit(3, 0)} />}
      {step === steps[3][0] && <Night onClick={onSubmit(3, 1)} roleNameNight="witch" />}
      {step === steps[3][1] && <Night onClick={onSubmit(3, 2)} roleNameNight="seer" />}
      {step === steps[3][2] && <Night onClick={onSubmit(4, 0)} roleNameNight="guard" />}
      {step === steps[4][0] && <Daytime onClick={onSubmit(5, 0)} />}
    </div>
  );
};

export default NewRecord;
