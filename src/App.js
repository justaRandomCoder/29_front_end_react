import { useState } from 'react';
import './App.css';
import cardpng from './cardpng';
import MiddleSection from './middle';
import ScoreBoard from './scoreboard/ScoreBoard';

function App() {
  const [imgarray, setImgArray] = useState([]);
  const [trumpSuit, setTrumpSuit] = useState(cardpng['trump']);
  const [middleCards, setMiddleCards] = useState({
    top: cardpng['c10'],
    right: cardpng['c7'],
    bottom: null,
    left: cardpng['c9'],
  });

  const suits = ['s', 'd', 'c', 'h'];
  const values = ['A', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let deck = [];

  // create a deck of cards
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = suits[i] + values[x];
      deck.push(card);
    }
  }
  // shuffle the cards
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  let cards = [];

  const showTrump = () => {
    setTrumpSuit(cardpng['trump-spade']);
  };

  const dealCards = (imgarray) => {
    if (imgarray.length === 0 || imgarray.length === 8) {
      // for (let i = 0; i < 4; i++) {
      //   cards[i] = deck[i];
      // }
      cards = ['cJ', 'sJ', 'hQ', 's9'];
      console.log(cards);
    } else {
      for (let i = 4; i < 8; i++) {
        // cards[i - 4] = imgarray[i - 4].card;
        // cards[i] = deck[i];
        cards = ['cJ', 'sJ', 'hQ', 's9', 'd7', 'dA', 'sK', 'c7'];
      }
      console.log(cards);
    }
    const newImgArray = [];
    for (let i = 0; i < cards.length; i++) {
      newImgArray.push({
        card: cards[i],
        path: cardpng[cards[i]],
        style: { top: '80%', left: `${(i + 1) * 10}%`, transform: '' },
      });
    }
    setImgArray(newImgArray);
  };
  const handleBottomCard = (index) => {
    const newImgArray = [];
    for (let i = 0; i < imgarray.length; i++) {
      if (i === index) {
        setMiddleCards({ ...middleCards, bottom: imgarray[i].path });
      } else newImgArray.push(imgarray[i]);
    }
    setImgArray(newImgArray);
  };

  return (
    <div className='container'>
      <div className='game-container'>

        <button
          style={{ margin: '1rem 1rem 1rem 2rem' }}
          onClick={() => dealCards(imgarray)}
        >
          Deal
        </button>
        <div className='trump-card'>
          <img
            alt='card'
            onClick={() => {
              showTrump();
            }}
            src={trumpSuit}
            height='150'
          />
          <div style={{ marginLeft: '2rem' }}>Trump</div>
        </div>

        <div className='profile profile1'>
          <img
            alt='player'
            className='image'
            src={cardpng['player']}
            height='100'
            width='100'
          />
          <div> Player 1 </div>
        </div>
        <div className='profile profile2'>
          <img
            alt='player'
            className='image'
            src={cardpng['player']}
            height='100'
            width='100'
          />
          <div> Player 2 </div>
        </div>
        <div className='profile profile3'>
          <img
            alt='player'
            className='image'
            src={cardpng['player']}
            height='100'
            width='100'
          />
          <div> Player 3 </div>
        </div>
        <ScoreBoard containerStyle={{ top: '10px', right: '10px' }} />
        <ScoreBoard containerStyle={{ bottom: '10px', left: '10px' }} />
        <MiddleSection
          top={middleCards.top}
          right={middleCards.right}
          bottom={middleCards.bottom}
          left={middleCards.left}
        />
        <div className='cards-container'>
          {imgarray.map((value, index) => {
            return (
              <img
                key={index}
                alt='card'
                onClick={() => handleBottomCard(index)}
                className={'card'}
                src={value.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
