import { Button } from 'antd';
import style from './Player.module.scss';

const players = [
  '玩家 1',
  '玩家 2',
  '玩家 3',
  '玩家 4',
  '玩家 5',
  '玩家 6',
  '玩家 7',
  '玩家 8',
  '玩家 9',
  '玩家 10',
  '玩家 11',
  '玩家 12',
];

type Props = {
  onClick: () => void;
};

const Player = ({ onClick }: Props) => {
  return (
    <div>
      <div className={style.title}>玩家名稱</div>
      <div className={style.parent}>
        {players.map((v: string, i: number) => {
          return (
            <div className={style.child} key={i}>
              <div className={style.text}>{v}</div>
              <div className={style.fillBlock}>1</div>
            </div>
          );
        })}
      </div>
      <div className={style.btn}>
        <Button onClick={onClick}>Submit</Button>
      </div>
    </div>
  );
};

export default Player;
