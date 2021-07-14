import { useState } from 'react';
import Daytime from './components/Daytime';
import Night from './components/Night';
import Player from './components/Player';
import Role from './components/Role';
import Type from './components/Type';
import style from './NewRecord.module.scss';

const role = ['witch', 'seer', 'guard', 'hunter', 'wolf-king', 'wolf', 'villager'];
const night = ['witch', 'seer', 'guard', 'hunter', 'wolf-king'];
const steps = ['type', 'player', role, night, 'daytime', 'blank'];

const NewRecord = () => {
  const [step, setStep] = useState<string>(steps[0][0]); // 同時宣告step(值) setStep(function)
  const [index, setIndex] = useState<number>(0);
  const onSubmit = (i: number, j: number, k: number) => () => {
    setStep(steps[i][j]);
    setIndex(k);
  };

  return (
    <div className={style.self}>
      {step === steps[0][0] && index === 0 && <Type onClick={onSubmit(1, 0, 1)} />}
      {step === steps[1][0] && index === 1 && <Player onClick={onSubmit(2, 0, 2)} />}
      {step === steps[2][0] && index === 2 && (
        <Role onClick={onSubmit(2, 1, 2)} roleName={role[0]} />
      )}
      {step === steps[2][1] && index === 2 && (
        <Role onClick={onSubmit(2, 2, 2)} roleName={role[1]} />
      )}
      {step === steps[2][2] && index === 2 && (
        <Role onClick={onSubmit(2, 3, 2)} roleName={role[2]} />
      )}
      {step === steps[2][3] && index === 2 && (
        <Role onClick={onSubmit(2, 4, 2)} roleName={role[3]} />
      )}
      {step === steps[2][4] && index === 2 && (
        <Role onClick={onSubmit(2, 5, 2)} roleName={role[4]} />
      )}
      {step === steps[2][5] && index === 2 && (
        <Role onClick={onSubmit(2, 6, 2)} roleName={role[5]} />
      )}
      {step === steps[2][6] && index === 2 && (
        <Role onClick={onSubmit(3, 0, 3)} roleName={role[6]} />
      )}
      {step === steps[3][0] && index === 3 && (
        <Night onClick={onSubmit(3, 1, 3)} roleNameNight={night[0]} />
      )}
      {step === steps[3][1] && index === 3 && (
        <Night onClick={onSubmit(3, 2, 3)} roleNameNight={night[1]} />
      )}
      {step === steps[3][2] && index === 3 && (
        <Night onClick={onSubmit(4, 0, 4)} roleNameNight={night[2]} />
      )}
      {step === steps[4][0] && index === 4 && <Daytime onClick={onSubmit(5, 0, 5)} />}
    </div>
  );
};

export default NewRecord;
