import style from '../style/Menu.module.css';

const Menu = () => {
  return (
    <nav>
      <ul className={style.gnb}>
        <li className={style.gnbItm}>
          <a href=''>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/finder.png`} alt='' />
          </a>
        </li>
        <li className={style.gnbItm}>
          <a href=''>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/safari.png`} alt='' />
          </a>
        </li>
        <li className={style.gnbItm}>
          <a href=''>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/vscode.png`} alt='' />
          </a>
        </li>
        <li className={style.gnbItm}>
          <a href=''>
            <img src={`${process.env.PUBLIC_URL}/img/icons/menu/setting.png`} alt='' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
