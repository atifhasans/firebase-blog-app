import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';  
import Home from './pages/Home';  
import Blogs from './pages/Blogs'; 
import Auth from './pages/Auth';  
import ProfilePage from './pages/ProfilePage';
import AddEditBlog from './pages/AddEditBlog.jsx';
import NotFound from './pages/NotFound.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'create',
        element: <ProtectedRoutes component={<AddEditBlog />} /> 
      },
      {
        path: 'profile',
        element: <ProtectedRoutes component={<ProfilePage />} />   
      },
      {
        path: 'detail/:id',
        element: <ProfilePage /> 
      },
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: '*',  
        element: <NotFound />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
