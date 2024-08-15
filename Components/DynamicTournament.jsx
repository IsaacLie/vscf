import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import mockData from "../Data/TournamentData.json";
import Loading from '../src/assets/Loading.gif'
import Nav from "./Nav";
import Hero from "./Hero";

const DynamicTournament = () => {
  const location = useLocation();
  const { monthYear }= useParams()
  const [error, setError] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      const data = mockData.find(data => data.link === monthYear);
      if (data) {
        setTournament(data);
        setError(null);
        setLoading(false);
      } else {
        setError(new Error("Tournament Not Found"));
        setTournament(null);
        setLoading(false);
      }
    };    
    
    fetchData();
  }, [monthYear]);

  if(loading) {
    return (
     <>
      <Hero/>
      <Nav/>
        <div className="Container">
            <div className="Loading">
                <img src={Loading}/> 
            </div>
        </div>   
     </>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!tournament) {
    return <div><h1>Tournament not found</h1></div>;
  }

  const hasRound = location.pathname.includes('round');

  return (
    <>
      <Hero/>
      <Nav/>

      <div className="Container">
        <div className="Dynamic-wrapper">
        <h1>{tournament.title}</h1>
            <div className="Content">
                <h2>Tournament Info: </h2>
                <ul>
                  <li>Date: {tournament.date} </li>
                  <li>Time: {tournament.time}</li>
                  <li>Venue/Platform: {tournament.venue}</li>
                </ul>
            </div>
            <div className="Rounds-container">
              <div className="Pairings">
                <ul className="round-style" style={{
                  borderRadius: hasRound? '10px 10px 0 0' : '10px'
                }}>
                <h2>Results after: </h2>
                  <Link to={`/tournaments/${tournament.link}/round1`}>
                    <li className={location.pathname.includes('round1')?'active':''}>R1</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round2`}>
                    <li className={location.pathname.includes('round2')?'active':''}>R2</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round3`}>
                    <li className={location.pathname.includes('round3')?'active':''}>R3</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round4`}>
                    <li className={location.pathname.includes('round4')?'active':''}>R4</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round5`}>
                    <li className={location.pathname.includes('round5')?'active':''}>R5</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round6`}>
                    <li className={location.pathname.includes('round6')?'active':''}>R6</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round7`}>
                    <li className={location.pathname.includes('round7')?'active':''}>R7</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round8`}>
                    <li className={location.pathname.includes('round8')?'active':''}>R8</li>
                  </Link>
                  <Link to={`/tournaments/${tournament.link}/round9`}>
                    <li className={location.pathname.includes('round9')?'active':''}>R9</li>
                  </Link>
                </ul>
              </div>
              <Outlet/>
            </div>

            <div className="pair-container">
              <div className="pair">
                <ul className="pair-style">
                  <h2>Pairings for: </h2>
                  <Link to={`/tournaments/${tournament.link}/round1`}>
                    <li className={location.pathname.includes('round1')?'active':''}>R1</li>
                  </Link>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default DynamicTournament;
