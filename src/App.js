import Header from './Header';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
