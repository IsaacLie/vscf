import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import HomePage from '../Pages/Tournament.jsx';
import VSCF from "../Pages/VSCF.jsx";
import News from "../Pages/News.jsx";
import Contact from "../Pages/Contact.jsx";
import Ratings from "../Pages/Ratings.jsx";
import Page404 from '../Pages/Page404.jsx';
import AvailableGames from '../Components/AvailableGames.jsx';
import DynamicTournament from '../Components/DynamicTournament.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path='/news' element={<News />} />
      <Route path='/vscf' element={<VSCF />} />
      <Route path='/ratings' element={<Ratings />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='*' element={<Page404 />} />
      <Route path='/tournaments/available' element={<AvailableGames/>}/>
      <Route path='/tournaments/:monthYear' element={<DynamicTournament/>}/>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;