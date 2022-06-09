import { Drawer as MuiDrawer } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Page } from 'src/constant/Page';
import style from './Drawer.module.scss';

type Props = { open: boolean; onClose: () => void };

const Drawer = ({ open, onClose }: Props) => {
  const navigate = useNavigate();

  const goto = (path: Page) => () => {
    navigate(path);
    onClose();
  };

  return (
    <MuiDrawer anchor="left" open={open} onClose={onClose} classes={{ paper: style.self }}>
      <div onClick={goto(Page.Home)}>首頁</div>
      <div onClick={goto(Page.Record1)}>遊戲紀錄1</div>
      <div onClick={goto(Page.Record2)}>遊戲紀錄2</div>
    </MuiDrawer>
  );
};

export default Drawer;
