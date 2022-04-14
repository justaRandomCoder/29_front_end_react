import './middle.css';

const MiddleSection = ({ top, right, bottom, left }) => {
  return (
    <div className='origin'>
      <div className='middlecard__top'>
        {top && <img alt='top-card' src={top} />}
      </div>
      <div className='middlecard__right'>
        {right && <img alt='top-card' src={right} />}
      </div>
      <div className='middlecard__bottom'>
        {bottom && <img alt='bottom-card' src={bottom} />}
      </div>
      <div className='middlecard__left'>
        {left && <img alt='top-card' src={left} />}
      </div>
    </div>
  );
};

export default MiddleSection;
