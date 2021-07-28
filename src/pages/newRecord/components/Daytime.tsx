import { Button } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from 'src/redux/store';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
};

const Daytime = ({ onClick }: Props) => {
  const state = useSelector((rootState: RootState) => rootState);
  // console.log(state.record.player);
  // console.log(state.record.night);

  return (
    <div>
      <div>第一天白天</div>
      <div>
        {daytime.map((v: string, i: number) => {
          return <div key={i}>{v}</div>;
        })}
      </div>
      <div>
        <Button onClick={onClick}>Submit</Button>
      </div>
    </div>
  );
};

export default Daytime;
