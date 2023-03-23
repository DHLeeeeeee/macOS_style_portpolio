import style from '../style/Project.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState([]);
  const [github, setGithub] = useState('');
  const [demo, setDemo] = useState('');

  useEffect(() => {
    fetch('https://dhleeeeeee.github.io/myapi/portpolio_api/project.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setName(data[0].name);
        setImg(data[0].image);
        setDesc(data[0].description.replace(/\n/g, '<br/>'));
        setTags(data[0].tags);
        setGithub(data[0].source_code);
        setDemo(data[0].demo);
      })
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
                setName(projects[idx].name);
                setImg(projects[idx].image);
                setDesc(projects[idx].description);
                setTags(projects[idx].tags);
                setGithub(projects[idx].source_code);
                setDemo(projects[idx].demo);
              }}>
              <img src={`${process.env.PUBLIC_URL}/img/icons/folder.png`} alt='' />
              <p>{projects[idx].name}</p>
            </Link>
          );
        })}
      </aside>
      <div className={style.contentsWrap}>
        <div className={style.left}>
          <div className={style.imgWrap}>
            <img src={img} alt='project_img' />
          </div>
        </div>
        <div className={style.right}>
          <h2>{name}</h2>
          <p>
            <span>설명</span>
            <span>{desc}</span>
          </p>
          <p>
            <span>사용기술</span>
            {tags.map((it, idx) => {
              return <span>{it}</span>;
            })}
          </p>
          <div className={style.btnWrap}>
            <a className={style.gitBtn} href={github} target={'_blank'}>
              Git Hub
            </a>
            <a className={style.demoBtn} href={demo} target={'_blank'}>
              Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
