import { Button } from 'antd';
import classNames from 'classnames';

type Props = {
  onClick: () => void;
};

const GiveUp = ({ onClick }: Props) => {
  return <Button onClick={onClick}>Submit</Button>;
};

export default GiveUp;
