import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from 'src/model/Record';
import { RootState } from 'src/redux/store';
import { getRoleStep, Role } from 'src/services/RecordService';

type Props = {
  onClick: () => void;
};

const RoleSample = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);

  const [roleStep, setRoleStep] = useState<Role[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [whoIsClicked, setWhoIsClicked] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const submitButtonIsDisabled = roleStep.length > 0 && roleStep[currentStep].howMany !== counter;

  useEffect(() => {
    setRoleStep(getRoleStep(state.record.type!));
    setPlayers(state.record.player!);
  }, [state]);

  const onNumClick = (i: number) => () => {
    // 計數器跟 howMany 一樣時直接 return，按了不會反應
    if (counter === roleStep[currentStep].howMany) return;

    const tmpPlayers = cloneDeep(players);
    tmpPlayers[i].role = roleStep[currentStep].roleCode;
    setPlayers(tmpPlayers);
    setCounter(counter + 1);
    setWhoIsClicked([...whoIsClicked, i]);
  };

  const onReturn = () => {
    // 返回只要回到上一步就好，不用刪改暫存的值，直接覆蓋也可
    const n = roleStep
      .slice(0, currentStep - 1)
      .map((v: Role) => v.howMany)
      .reduce((a: number, b: number) => a + b, 0);
    setWhoIsClicked(whoIsClicked.slice(0, n));

    setCurrentStep(currentStep - 1);
    setCounter(0);
  };

  const numIsDisabled = (i: number) => {
    return whoIsClicked.includes(i) || counter === roleStep[currentStep].howMany;
  };

  const onSubmit = () => {
    if (currentStep === roleStep.length - 1) {
      // dispatch(xxx) // 存全域變數
      console.log(players); // tslint:disable-line
      onClick();
    }
    setCurrentStep(currentStep + 1);
    setCounter(0);
  };

  if (roleStep.length === 0) return <div>loading...</div>;

  return (
    <div>
      <div>身分發放</div>
      <div>{roleStep[currentStep].roleName}</div>
      <div>
        {players?.map((v: Player, i: number) => {
          return (
            <div key={i}>
              <button onClick={onNumClick(i)} disabled={numIsDisabled(i)}>
                點選
              </button>
              id:{v.id}, name:{v.name}, temp role:{v.role}
            </div>
          );
        })}
      </div>
      <button onClick={onReturn} disabled={currentStep === 0}>
        return
      </button>
      <button onClick={onSubmit} disabled={submitButtonIsDisabled}>
        submit
      </button>
    </div>
  );
};

export default RoleSample;
