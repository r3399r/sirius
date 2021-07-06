import { Button } from 'antd';

const daytime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

type Props = {
  onClick: () => void;
};

const Night = ({ onClick }: Props) => {
  return (
    <div>
      <div>首夜</div>
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

export default Night;
