import style from '../style/Project.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [img, setImg] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    fetch('https://dhleeeeeee.github.io/myapi/portpolio_api/project.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <article className={style.project}>
      <aside className={style.projectNav}>
        {projects.map((it, idx) => {
          return (
            <Link
              className={style.menu}
              onClick={() => {
                setImg(projects[idx].image);
                setName(projects[idx].name);
              }}>
              <img src={`${process.env.PUBLIC_URL}/img/icons/folder.png`} alt='' />
              <p>{projects[idx].name}</p>
            </Link>
          );
        })}
      </aside>
      <div className={style.contentsWrap}>
        <div className={style.left}>
          <img src={img} alt='' />
        </div>
        <div className={style.right}>
          <h2>{name}</h2>
          <p></p>
          <span></span>
        </div>
      </div>
    </article>
  );
};

export default Project;
