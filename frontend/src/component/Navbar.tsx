import { useState } from 'react';
import Drawer from './Drawer';
import style from './Navbar.module.scss';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={style.self}>
        <div className={style.clickable} onClick={() => setOpen(true)}>
          選單
        </div>
        <div className={style.title}>
          <b>狼人殺小工具</b>
        </div>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
