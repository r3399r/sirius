import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from 'src/constant/Page';
import { Theme } from 'src/constant/Theme';
import { ThemeContext } from 'src/context/themer';
import style from './Navbar.module.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const goto = (path: Page) => () => navigate(path);

  return (
    <div className={style.self}>
      <div onClick={goto(Page.Home)}>首頁</div>
      <IconButton onClick={theme.toggleTheme}>
        {theme.themeName === Theme.Dark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};

export default Navbar;
