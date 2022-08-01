import './App.css';
import Header from './components/Header';
import Keypad from './components/Keypad';
import Footer from './components/Footer';
import { ThemesContext } from './contexts/ThemesContext';
import { useContext } from 'react';
import OperationContextProvider from './contexts/OperationContext';


function App() {
  const { toggleValue, one, two, three } = useContext(ThemesContext);
  const theme = (toggleValue === "1") ? one : (toggleValue === "2") ? two : (toggleValue === "3") ? three : toggleValue;
  return (
    <div className={`App ${theme.class}`}>
      <main>
        <Header />
        <OperationContextProvider>
          <Keypad />
        </OperationContextProvider>
        <Footer />
      </main>
    </div>
  );
}

export default App;
