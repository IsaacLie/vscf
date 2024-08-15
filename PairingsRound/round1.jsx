import React from 'react';
import Loading from '../src/assets/Loading.gif';
import { useParams } from 'react-router-dom';
import Players from '../Data/Players.json';
import Pair from '../Data/Pair.json';

export default function round1() {
  const [loading, setLoading] = React.useState(true);
  const { monthYear } = useParams();
  const [pairings, setPairings] = React.useState(null);

  const findPlayerRatings = (name) => {
    const players = Players.find(p => p.name === name)
    return players ? players.Ratings : "Unrated"
  }

  // Pairings data
  React.useEffect(() => {
    const fetchData = () => {
      if (Pair[monthYear]) {
        const data = Pair[monthYear]?.round1;
        if (data) {
          setPairings(data);
        } else {
          console.warn(`No data found for round1 ${monthYear}`);
        }
      } else {
        console.warn(`No data found for monthYear: ${monthYear}`);
      }
      setLoading(false);
    };
    fetchData();
  }, [monthYear]);

  if (loading) {
    return (
      <div className="Loading">
        <img src={Loading} alt="Loading..." />
      </div>
    );
  }

  if (!pairings) {
    return <div>No data found for {monthYear} Round 1</div>;
  }

  return (
    <>
      <div className="Container">
        <div className="pairings">
          <ul>
            {pairings.map((pairing, index) => (
              <li key={index}>
                <div className="player">{pairing.player1} ({findPlayerRatings(pairing.player1)})</div>
                <div className="vs">vs</div>
                <div className="player">{pairing.player2} ({findPlayerRatings(pairing.player1)})</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

