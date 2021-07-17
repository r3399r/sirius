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
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setRoleStep(getRoleStep(state.record.type!));
    setPlayers(state.record.player!);
  }, [state]);

  const onNumClick = (i: number) => () => {
    if (counter === roleStep[currentStep].howMany) return; // 計數器跟 howMany 一樣時直接 return，按了不會反應

    const tmpPlayers = cloneDeep(players);
    tmpPlayers[i].role = roleStep[currentStep].roleCode;
    setPlayers(tmpPlayers);
    setCounter(counter + 1);
  };

  const onReturn = () => {
    // 返回只要回到上一步就好，不用刪改暫存的值，直接覆蓋也可
    setCurrentStep(currentStep - 1);
    setCounter(0);
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

  return (
    <div>
      <div>身分發放</div>
      <div>{roleStep.length > 0 && roleStep[currentStep].roleName}</div>
      <div>
        {players?.map((v: Player, i: number) => {
          return (
            <div key={i}>
              <button onClick={onNumClick(i)}>點選</button>
              id:{v.id}, name:{v.name}, role:{v.role}
            </div>
          );
        })}
      </div>
      <button onClick={onReturn} disabled={currentStep === 0}>
        return
      </button>
      {/* tslint:disable-next-line */}
      <button
        onClick={onSubmit}
        disabled={roleStep.length > 0 && counter !== roleStep[currentStep].howMany}
      >
        submit
      </button>
    </div>
  );
};

export default RoleSample;
