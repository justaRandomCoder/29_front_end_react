import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='container homepage'>
      <div
        className='btn'
        role='button'
        onClick={() => {
          navigate('/play');
        }}
      >
        Play
      </div>
      <div
        className='btn'
        role='button'
        onClick={() => {
          navigate('/info');
        }}
      >
        Info
      </div>
    </div>
  );
};

export default Home;
