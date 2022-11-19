
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import BookDetails from './components/BookDetails/BookDetails';
import Books from './components/Books/Books';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Root from './layout/Root';
import Order from './components/Order/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/home',
          element:<Home/>
        },
        {
          path: '/books',
          loader: () => {
            return fetch(`https://api.itbook.store/1.0/new`) 
          },
          element:<Books/>
        },
        {
          path: '/orders',
          loader:()=>fetch('https://api.itbook.store/1.0/new'),
          element: <Order/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/books/:bookId',
          loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
          element:<BookDetails></BookDetails>
        }
      ]
      
    },
    {
      path: '*',
      element:<ErrorPage></ErrorPage>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
