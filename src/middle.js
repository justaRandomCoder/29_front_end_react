import './middle.css';

const MiddleSection = ({ top, right, bottom, left }) => {
  return (
    <div className='middle-container'>
      <div className='card-holder'>
        <img className='top' alt='top-card' src={top} />
      </div>
      <div className='mid-parent'>
        <div className='card-holder '>
          <img className='left' alt='top-card' src={left} />
        </div>
        <div className='card-holder '>
          <img className='right' alt='top-card' src={right} />
        </div>
      </div>
      <div className='card-holder'>
        {bottom && <img className='bottom' alt='bottom-card' src={bottom} />}
      </div>
    </div>
  );
};

export default MiddleSection;
