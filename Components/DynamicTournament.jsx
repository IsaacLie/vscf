import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockData from "../Data/TournamentData.json";
import Loading from '../src/assets/Loading.gif'
import Nav from "./Nav";
import Hero from "./Hero";

const DynamicTournament = () => {
  const { monthYear }= useParams()
  const [error, setError] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        const data = mockData.find(data => data.link === monthYear);
        if(data){
            setTournament(data);
            setError(null);
            setLoading(false)
        } else {
            setError(new Error("Tournament Not Found"))
            setTournament(null)
            setLoading(false)
        }
      })

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

  return (
    <>
      <Hero/>
      <Nav/>

      <div className="Container">
        <div className="Dynamic-wrapper">
        <h1>{tournament.title}</h1>
            <div className="Content">
                <h1></h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default DynamicTournament;
