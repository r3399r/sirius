import { Button } from 'antd';
import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setType } from 'src/redux/recordSlice';
import style from './Type.module.scss';

const types = [
  '狼王守衛',
  '守墓人石像鬼',
  '狼美人騎士',
  '機械狼',
  '狼王魔術師',
  '預女獵白',
  '噩夢之影',
];

type Props = {
  onClick: () => void;
};

const Type = ({ onClick }: Props) => {
  const dispatch = useDispatch();
  const [whichIsClicked, setWhichIsClicked] = useState<number>(-1);

  const onTypeClick = (i: number) => () => {
    setWhichIsClicked(i);
  };

  const onSubmit = () => {
    dispatch(setType(types[whichIsClicked]));
    onClick();
  };

  return (
    <div>
      <div className={style.title}>選擇版型</div>
      <div className={style.panel}>
        {types.map((v: string, i: number) => (
          <div
            key={i}
            className={classNames(style.type, { [style.clicked]: i === whichIsClicked })}
            role="button"
            onClick={onTypeClick(i)}
          >
            {v}
          </div>
        ))}
      </div>
      <div>
        <Button type="text" className={style.btn} onClick={onSubmit} disabled={whichIsClicked < 0}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Type;
