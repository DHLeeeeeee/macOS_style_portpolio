import Header from './component/Header';
import './style/reset.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Menu from './component/Menu';

// 전체 배경
const Wrap = styled.div`
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL}/img/macOS.jpg);
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

// 컨텐츠 페이지 나올 공간 위치
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  let [title, setTitle] = useState('Hello');

  return (
    <div className='App'>
      <Wrap>
        <Header title={title} setTitle={setTitle} />
        <Content>
          <Routes>
            <Route path='/' element={<div>메인임</div>} />
            <Route path='/project' element={<div>프로젝트임</div>} />
            <Route path='/about' element={<div>어바웃임</div>} />
            <Route path='/contact' element={<div>연락처임</div>} />
          </Routes>
        </Content>
        <Menu title={title} setTitle={setTitle} />
      </Wrap>
    </div>
  );
}

export default App;
