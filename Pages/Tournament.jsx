import Nav from '../Components/Nav.jsx';
import Hero from '../Components/Hero.jsx';
import AvailableGames from '../Components/AvailableGames.jsx';

const HomePage = () => {
    return(
      <>
      <Nav />
      <Hero/>
      <div className="Container">
        <div className="tournament-wrapper">
          <AvailableGames/>
        </div>
      </div>
    </>
    )
}

export default HomePage;