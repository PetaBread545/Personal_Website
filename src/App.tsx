import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Layout from './layout/Layout';
import SentimentAnalysis from './pages/portfolio-pages/SentimentAnalysis';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      // Consider adding a layout
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />}> 
          <Route path='/portfolio/sentiment' element={<SentimentAnalysis />} />
        </Route>
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App