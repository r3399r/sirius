import { Button } from 'antd';
import style from './Role.module.scss';

const role = ['Alex', 'Bai', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'Kevin', 'Lily'];

type Props = {
  onClick: () => void;
};

const Role = ({ onClick }: Props) => {
  return (
    <div>
      <div className={style.title}>身份發放</div>
      <div className={style.parent}>
        {role.map((v: string, i: number) => {
          return (
            <div className={style.child} key={i}>
              <div className={style.number}>{i + 1}</div>
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

export default Role;
