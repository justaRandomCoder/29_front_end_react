import './trumpcaller.css'

const Trumpcaller = ({ initial = 16, isfirstcaller = true}) => {
    return (
      <div className='trump-caller'>
        <div className='trump-count'>
          <div className='heading-text'>Current Count</div>
          <div className='count'>{initial}</div>
        </div>
        <div className='options'>
            <button className='pass-btn' onClick={console.log('hi')}> Pass </button>
            <button className='incr-btn' onClick={console.log('hi')}> Increase </button>
            {isfirstcaller && 
              (<button className='call-btn' onClick={console.log('hi')}> Call</button>)}
        </div>
      </div>
    );
  };

export default Trumpcaller;