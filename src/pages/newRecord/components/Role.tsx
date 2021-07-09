import { Button } from 'antd';
import style from './Role.module.scss';

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
              <div className={style.number} key={i}>
                {num[i]}
              </div>
              <div className={style.text} key={i}>
                {v}
              </div>
              <div className={style.fill_block} key={i}>
                1
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.btn}>
        <Button type="text" className={style.button} onClick={onClick}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Role;
