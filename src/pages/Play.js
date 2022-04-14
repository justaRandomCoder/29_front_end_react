import { useEffect, useState } from 'react';
import cardpng from '../cardpng';
import MiddleSection from '../components/middle/middle';
import ScoreBoard from '../components/scoreboard/ScoreBoard';
import './Play.css';

const Play = () => {
  const [imgarray, setImgArray] = useState([]);
  const [trumpSuit, setTrumpSuit] = useState(cardpng['trump']);
  const [middleCards, setMiddleCards] = useState({
    top: null,
    right: null,
    bottom: null,
    left: null,
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

  const hideTrump = () => {
    setTrumpSuit(cardpng['trump']);
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
        let mid = { ...middleCards, bottom: imgarray[i].path };
        setMiddleCards(mid);
        handleOtherPlayerCards(mid);
      } else newImgArray.push(imgarray[i]);
    }
    setImgArray(newImgArray);
  };
  //make a network request at the beginning of each round
  //make a network request when user plays a card


  // call this after user selects a card
  const handleOtherPlayerCards = (newMiddleCards) => {
    // bottom player selected card so show right and top cards one by one

    let i = 0;
    let middle = newMiddleCards;
    let id = setInterval(() => {
      
      if (i === 0) {
        middle = { ...middle, right: cardpng['d7'] };
        setMiddleCards(middle);
      }
      if (i === 1) {
        middle = { ...middle, top: cardpng['c9'] };
        setMiddleCards(middle);
      }
      if(i === 2) {
        middle = { ...middle, left:cardpng['c8']}
        setMiddleCards(middle)
      }  
      if (i === 3) {
        middle = {}
        setMiddleCards(middle)
      }; 
      i++;
      if(i == 4){
        clearInterval(id)
      }
      
    }, 1000);

  };

  // this function will we called the first time page loads
  
  return (
    <div className='container'>
      <div className='game-container'>
        <div
          className='deal-btn'
          onClick={() => dealCards(imgarray)}
        >
          Deal
        </div>
        <div className='trump-card'>
          <img
            alt='card'
            onClick={() => {
              showTrump();
            }}
            src={trumpSuit}
            height='150'
          />
        </div>
          <div
            className='trump-card-btn'
            onClick={() => {
              trumpSuit === cardpng['trump'] ? showTrump() : hideTrump();
            }}
          >
            {trumpSuit === cardpng['trump'] ? 'Show Trump' : 'Hide Trump'}
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
        <ScoreBoard
          t1={2}
          t2={3}
          containerStyle={{ top: '10px', right: '10px' }}
        />
        <ScoreBoard
          t1={1}
          t2={4}
          containerStyle={{ bottom: '10px', left: '10px' }}
        />
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
                onClick={() => {
                  handleBottomCard(index);
                }}
                className={'card'}
                src={value.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Play;
