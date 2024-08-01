import { Link } from "react-router-dom";
import React from 'react';
import tournament from '../Data/TournamentData.json'
export default function AvailableGames() {
  return (
    <>
    <div className="Container">
        <div className="list-wrapper">
            {tournament.map((tournaments, index) => (
                <div className="tournament-wrapper" key={index}>
                    <ul>
                        {tournaments.status !== "N/A"? (
                        <Link to={`/tournaments/${tournaments.link}`}>
                            <li>
                                <h1>{tournaments.name}</h1>
                            </li>
                            <li>
                                <p>{tournaments.status}</p>
                            </li>
                        </Link>) :
                        (<div className="disabled-link">
                            <li>
                                <h1>{tournaments.name}</h1>
                            </li>
                            <li>
                                <p>{tournaments.status}</p>
                            </li>
                      </div>)
                    }
                    </ul>
                </div>
            ))}
        </div>
    </div>
    </>
  );
}
