import router from './routes';
import { RouterProvider } from 'react-router-dom';
import Header from './pages/Header';
import GlobalStyle from './main.styled';
import Container from './components/BasicComponents/Container';
import { createRoot } from 'react-dom/client';
import OrderContextProvider from './components/OrderContextProvider';

const App = () => {
  return (
    <OrderContextProvider>
      <GlobalStyle />
      <Header />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </OrderContextProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
