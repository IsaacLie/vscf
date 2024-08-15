import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import players from "../Data/Players.json"
export default function Ratings(){
    const sortedplayers = [...players.sort((a, b) => b.Ratings - a.Ratings)]
    return(
     <>
      <Nav/>
      <Hero/>

      <div className="Container">
        <div className="leaderboard-container">
                <ul className="leaderboard-title">
                    <li>#</li>
                    <li>Name</li>
                    <li id="ratings">Ratings</li>
                    <li id="by">Birthyear</li>
                </ul>
            {sortedplayers.map((player, index) => (
                <div key={index} className={`playerscontainer`} >
                    <ul>
                        <li>{index + 1}</li>
                        <li id="Players">{player.name}</li>
                        <li>{player.Ratings}</li>
                        <li>{player.By}</li>
                    </ul>
                </div>
            ))}
        </div>
      </div>
     </>
    )
}