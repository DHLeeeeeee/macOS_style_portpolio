import Header from './component/Header';
import './style/reset.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Menu from './component/Menu';
import Main from './pages/Main';
import Project from './pages/Project';
import About from './pages/About';
import Frame from './component/Frame';
import Contact from './pages/Contact';

// 전체 배경
const Wrap = styled.div`
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/img/macOS.jpg);
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100rem;
  min-height: 80rem;
`;

// 컨텐츠 페이지 나올 공간 위치
const Content = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 100%;
`;

function App() {
  let [title, setTitle] = useState('Hello');

  return (
    <div className='App'>
      <Wrap>
        <Header title={title} setTitle={setTitle} />
        <Content>
          <Routes>
            {/* 메인 */}
            <Route path='/' element={<Main />} />

            <Route path='/' element={<Frame />}>
              {/* 프로젝트 */}
              <Route path='project' element={<Project />} />

              {/* 어바웃 */}
              <Route path='about' element={<About />} />

              {/* 컨택트 */}
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </Content>
        <Menu title={title} setTitle={setTitle} />
      </Wrap>
    </div>
  );
}

export default App;
