import { ViteReactSSG } from 'vite-react-ssg';

import './styles/global.css';

import App from './App';
import Home from './pages/Home';
import Error from './components/error/Error';

export const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: '*', element: <Error /> },
];

export const createRoot = ViteReactSSG({ routes });
