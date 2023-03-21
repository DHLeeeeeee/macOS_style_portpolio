import style from '../style/Project.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projects, setProjects] = useState(['캐스퍼', '어반플레이', '건설사업정보시스템 홈페이지', '투두리스트', 'MacOS 스타일 포트폴리오']);
  return (
    <article className={style.project}>
      <aside className={style.projectNav}>
        {projects.map((it, idx) => {
          return (
            <Link className={style.menu}>
              <img src={`${process.env.PUBLIC_URL}/img/icons/folder.png`} alt='' />
              <p>{projects[idx]}</p>
            </Link>
          );
        })}
      </aside>
      <div className={style.contentsWrap}></div>
    </article>
  );
};

export default Project;
