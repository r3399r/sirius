import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Player as PlayerType } from 'src/model/Record';
import { setPlayer } from 'src/redux/recordSlice';
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
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    const input: PlayerType[] = Object.keys(data).map((id: string) => ({ id, name: data[id] }));
    dispatch(setPlayer(input));
    onClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.title}>玩家名稱</div>
      <div className={style.parent}>
        {players.map((v: string, i: number) => (
          <div className={style.child} key={i}>
            <div className={style.text}>{v}</div>
            <input {...register(`${i + 1}`, { required: true })} autoComplete="off" />
          </div>
        ))}
      </div>
      <div>
        <Button type="text" htmlType="submit" className={style.btn}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Player;
