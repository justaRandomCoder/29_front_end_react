import './ScoreBoard.css';

const ScoreBoard = ({ t1 = 0, t2 = 0, containerStyle, ...props }) => {

  return (
    <div className='score-board-container' style={containerStyle}>
      <div className='score-board'>
        <div className='score'>Team1: {t1}</div>
        <div className='score'>Team2: {t2}</div>
      </div>
      <div className='score-title'>ScoreBoard</div>
    </div>
  );
};

export default ScoreBoard;
