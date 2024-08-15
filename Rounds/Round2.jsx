import React from 'react';
import Pairings from '../Data/Pairings.json';
import Loading from '../src/assets/Loading.gif';
import { useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';

export default function Round2() {
  const [loading, setLoading] = React.useState(true);
  const { monthYear } = useParams();
  const [pairings, setPairings] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      if (Pairings[monthYear]) {
        const data = Pairings[monthYear]?.round2;
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
    return <div>No data found for {monthYear} Round 2</div>;
  }

  return (
    <>
      <div className="Container">
        <div className="pairings">
          <ul>
            {pairings.map((pairing, index) => (
              <li key={index}>
                <div className="player">{pairing.player1}</div>
                <div className="vs">vs</div>
                <div className="player">{pairing.player2}</div>
                <div className="result">{pairing.result}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

