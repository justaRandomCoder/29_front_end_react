import { useEffect, useRef, useState } from 'react';
import cardpng from '../cardpng';
import MiddleSection from '../components/middle/middle';
import ScoreBoard from '../components/scoreboard/ScoreBoard';
import Trumpcaller from '../components/trumpcaller/Trumpcaller';
import './Play.css';
import axios from 'axios'
const Players = {
  top: 4,
  right: 3,
  bottom: 2,
  left: 1,
};

const PlayersRev = {
  1: 'left',
  2: 'bottom',
  3: 'right',
  4: 'top',
};

const Play = () => {
  const [imgarray, setImgArray] = useState([]);
  const [trumpSuit, setTrumpSuit] = useState(cardpng['trump']);
  const [t1Score, sett1Score] = useState(0);
  const [t2Score, sett2Score] = useState(0);
  const [topCard, setTopCard] = useState(null);
  const [leftCard, setLeftCard] = useState(null);
  const [rightCard, setRightCard] = useState(null);
  const [bottomCard, setBottomCard] = useState(null);

  const myCards = useRef({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [startingPlayer, setStartingPlayer] = useState(null);

  const [isCurrentUser, setIsCurrentUser] = useState(false);

  const suits = ['s', 'd', 'c', 'h'];
  const values = ['A', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let deck = [];
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

  useEffect(() => {
    let cur = Players.bottom;
    setCurrentPlayer(cur);
    setStartingPlayer(cur);
  }, []);

  useEffect(() => {
    if (topCard != null) {
      myCards.current.top = true;
    } else {
      myCards.current.top = false;
    }
  }, [topCard]);

  useEffect(() => {
    if (rightCard != null) {
      myCards.current.right = true;
    } else {
      myCards.current.right = false;
    }
  }, [rightCard]);

  useEffect(() => {
    if (bottomCard != null) {
      myCards.current.bottom = true;
    } else {
      myCards.current.bottom = false;
    }
  }, [bottomCard]);

  useEffect(() => {
    if (leftCard != null) {
      myCards.current.left = true;
    } else {
      myCards.current.left = false;
    }
  }, [leftCard]);

  const clearCards = () => {
    sett1Score(t1Score+1)
    sett2Score(t2Score+1)
    console.log('clearing cards');
    setTopCard(null);
    setLeftCard(null);
    setRightCard(null);
    setBottomCard(null);
  };

  const showTrump = () => {
    //send to state that trump has been shown
    setTrumpSuit(cardpng['trump-spade']);
  };

  const hideTrump = () => {
    setTrumpSuit(cardpng['trump']);
  };


  

  const dealCards = async(imgarray) => {
    if (imgarray.length === 0 || imgarray.length === 8) {
      
      let res = ''
      const response = await axios.post('https://95dd-103-92-214-20.in.ngrok.io/init', {first_player: 0})
      cards = response.data.state.player_hand;
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
    setIsCurrentUser(!isCurrentUser);
  };

  const handleBottomCard = (index) => {
    const newImgArray = [];
    for (let i = 0; i < imgarray.length; i++) {
      if (i === index) {
        setBottomCard(imgarray[i].path);

        if (rightCard == null) {
          setCurrentPlayer((currentPlayer % 4) + 1);
          toggleTurn({
            willClearCards: true,
            currentPlayer: (currentPlayer % 4) + 1,
          });
        } else {
          setTimeout(() => {
            clearCards();
            let nextStartingPlayer = (startingPlayer % 4) + 1;
            setCurrentPlayer(nextStartingPlayer);
            setStartingPlayer(nextStartingPlayer);
            toggleTurn({ currentPlayer: nextStartingPlayer });
          }, 1000);
        }
      } else newImgArray.push(imgarray[i]);
    }
    setImgArray(newImgArray);
  };
  //make a network request at the beginning of each round
  //make a network request when user plays a card

  const toggleTurn = ({ willClearCards = false, currentPlayer }) => {
    if (currentPlayer === Players['bottom']) return;

    let nextPlayer = currentPlayer;
    let clear = false;
    let id = setInterval(() => {
      // top card
      if (nextPlayer === Players['top']) {
        if (myCards.current.top == false) {
          setTopCard(cardpng['c9']);
        } else {
          clear = true;
        }
        // left card
      } else if (nextPlayer === Players['left']) {
        if (myCards.current.left == false) {
          setLeftCard(cardpng['c8']);
        } else {
          clear = true;
        }
        // right card
      } else if (nextPlayer === Players['right']) {
        if (myCards.current.right == false) {
          setRightCard(cardpng['d7']);
        } else {
          clear = true;
        }
        // bottom card <== user's card
      } else {
        clear = true;
      }
      if (clear) {
        clearInterval(id);
        if (willClearCards) {
          // change here
          clearCards();
          let nextStartingPlayer = (startingPlayer % 4) + 1; // basically if 4 then 1 otherwise ++
          setCurrentPlayer(nextStartingPlayer);
          setStartingPlayer(nextStartingPlayer);
          toggleTurn({ currentPlayer: nextStartingPlayer });
        }
      } else {
        nextPlayer = (nextPlayer % 4) + 1;
        setCurrentPlayer(nextPlayer);
      }
    }, 1000);
    //update score here
    
  };

  return (
    <div className='container'>
      <p>{PlayersRev[currentPlayer]}</p>
      <div className='game-container'>
        {isCurrentUser && <Trumpcaller />}
        <div className='deal-btn' onClick={() => dealCards(imgarray)}>
          Deal
        </div>
        <div> Round bid: </div>
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
          t1={t1Score}
          t2={t2Score}
          containerStyle={{ top: '10px', right: '10px' }}
        />
        <ScoreBoard
          t1={t1Score}
          t2={t2Score}
          containerStyle={{ bottom: '10px', left: '10px' }}
        />
        <MiddleSection
          top={topCard}
          right={rightCard}
          bottom={bottomCard}
          left={leftCard}
        />
        <div className='cards-container'>
          {imgarray.map((value, index) => {
            return (
              <img
                key={index}
                alt='card'
                onClick={() => {
                  if (currentPlayer === Players['bottom']) {
                    handleBottomCard(index);
                  }
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