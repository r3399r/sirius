import { Button } from 'antd';
import style from './Role.module.scss';

const role = [
  '玩家1',
  '玩家2',
  '玩家3',
  '玩家4',
  '玩家5',
  '玩家6',
  '玩家7',
  '玩家8',
  '玩家9',
  '玩家10',
  '玩家11',
  '玩家12',
];

type Props = {
  onClick: () => void;
};

const Role = ({ onClick }: Props) => {
  return (
    <div>
      <div>身份發放</div>
      <div>
        {role.map((v: string, i: number) => {
          return <div key={i}>{v}</div>;
        })}
      </div>
      <div>
        <Button onClick={onClick}>Submit</Button>
      </div>
    </div>
  );
};

export default Role;
