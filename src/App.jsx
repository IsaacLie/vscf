import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import HomePage from '../Pages/Tournament.jsx';
import VSCF from "../Pages/VSCF.jsx";
import News from "../Pages/News.jsx";
import Contact from "../Pages/Contact.jsx";
import Ratings from "../Pages/Ratings.jsx";
import Page404 from '../Pages/Page404.jsx';
import AvailableGames from '../Components/AvailableGames.jsx';
import DynamicTournament from '../Components/DynamicTournament.jsx';
import Round1 from "../Rounds/Round1";
import Round2 from "../Rounds/Round2";
import Round3 from "../Rounds/Round3";
import Round4 from "../Rounds/Round4";
import Round5 from "../Rounds/Round5";
import Round6 from "../Rounds/Round6";
import Round7 from "../Rounds/Round7";
import Round8 from "../Rounds/Round8";
import Round9 from "../Rounds/Round9";
import round1 from '../PairingsRound/round1.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/news' element={<News />} />
      <Route path='/vscf' element={<VSCF />} />
      <Route path='/ratings' element={<Ratings />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='*' element={<Page404 />} />
      <Route path='/tournaments/available' element={<AvailableGames />} />
      <Route path='/tournaments/:monthYear/' element={<DynamicTournament />}>
        <Route path='round1' element={<Round1 />} />
        <Route path='round2' element={<Round2 />} />
        <Route path='round3' element={<Round3 />} />
        <Route path='round4' element={<Round4 />} />
        <Route path='round5' element={<Round5 />} />
        <Route path='round6' element={<Round6 />} />
        <Route path='round7' element={<Round7 />} />
        <Route path='round8' element={<Round8 />} />
        <Route path='round9' element={<Round9 />} />
        <Route path='resultr1' element={<round1 />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
