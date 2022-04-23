import './Info.css';

const Info = () => {
  return <div className='container'>
    <div className='infopage'>
      <h3>Origin</h3>
      <p>Twenty-Nine is a South Asian trick-taking card game. It is believed that this game is a descendant of a family of European games called Jass games. The principals of the game were imported along with Dutch traders.
      <h3>Game Rules</h3>
      </p><p>Twenty-Nine is generally a four-player game with two partnerships. Partners face each other during play. The game utilizes only 32 cards of a standard 52 card deck, 8 cards per suit. The cards rank as follows: J (high), 9, A, 10, K, Q, 8, 7 (low).

        The objective of Twenty-Nine is to win tricks that have valuable cards in them. A trick is a hand in a trick-taking game. Each player plays a single card in a trick. The winner of the trick, the player with the highest value card, takes the cards.

        Cards values are as follows:</p>
      <p> <b>Jacks:</b> 3 points </p>

      <p><b>Nines:</b>: 2 points </p>

      <p><b>Aces:</b>: 1 point </p>

      <p><b>Tens:</b>: 1 point </p>

      <p><b>K, Q, 8, 7</b>: 0 points </p>

      <p>This gives a total of 28 points. Some variations have a total of 29 points for the last trick, which is how it received its namesake. However, the game is generally not played that way and still retains the name.

        The game is traditionally played with the 2s, 3s, 4s, and 5s being used as trump indicators. Each player receives cards from each suit. Sometimes, the 6s are used to keep score. A set of partners each receives a red and black six.</p>
      <h3>Deal and Bidding Process</h3>
      <p>
        The deal and game play pass to the left. The dealer shuffles the deck and the player to their right cuts it. Each player receives four cards, one at a time, face-down.

        Depending on the cards in hand, players place bids for electing trumps. A bid is a number that represents the amount of tricks that person believes their partnership can make. The highest bidder wins. The bid starts with the player to the left of the dealer and moves left. Players can raise the bid or pass. This continues until 3 players pass in a row. The minimum bid is 15 and the maximum is 28. If everyone passes the dealer must make a forced bid of 15, this also ends the bidding.

        The winner of the bidding selects the trump suit. The 2s and 5s not being used are arranged so that the trump suit the bidder chose is at the bottom.

        The dealer passes each player another 4 cards. Each player now has 8 cards.
      </p>
      <h3> Playing process </h3>
      <p> The first trick starts with the player to the left of the dealer. Each player must follow suit if they can. At this point, the trump suit is unknown to all other players. The first player who is unable to follow suit is required to ask the bidder what the trump suit is and they must show the trump suit to everyone. However, if the bidder is the first player who is unable to follow suit they must declare to everyone what the trump suit is. Once the trump is declared the highest value card from that suit played wins the trick, if no trump card is played then it is the highest value card of the suit led.

        If you cannot follow suit, you can play a trumps, but you are not required to.

        After trumps have been declared, players with a King and Queen in hand of the suit may announce they have “Royals” or a “Pair.” These can only be revealed after winning a trick. You may not claim them if they have been used in a trick.

        In the event, the bidder or their partner announces they have a Pair, their bid is reduced by four, as long as their bid remains above the 15 point minimum. However, if the other partnership has the Pair it increases the bid by 4, as long as it doesn’t exceed 28.
      </p>
      <h3>Scoring Process</h3>
      <p>After all 8 tricks have been taken, the partnerships total the value of the cards they have won. The winners of the last trick add an additional point to their total. If the bidding partnership fulfilled their contract by taking the required number of tricks they win a single game point. If not, they lose a game point. The other set of partners\’ score remains constant.

      The red and black sixes are used for keeping score. The red six (nali or red chaka) displays the positive score, deeding on the number of pips revealed. The black six (kala or black chaka) displays the negative score with the number of pips it has revealed. At the start, each partnership has no pips showing. Pips are revealed as players lose or gain points. The game can end in one of two ways: one team has +6 points or one team has -6 points.</p>
    </div>;
  </div>
};

export default Info;
