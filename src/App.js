import Header from './component/Header';
import './style/reset.css';
import Menu from './component/Menu';

function App() {
  return (
    <div className='App'>
      <div className='Wrap' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/macOS.jpg)` }}>
        <Header />
        <Menu />
      </div>
    </div>
  );
}

export default App;
