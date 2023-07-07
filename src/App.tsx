import NavBar from './components/NavBar';
import Routes from './routes';
import { DarkModeProvider } from './Providers/DarkmoodProvider/darkmoodProvider';

function App() {
  return (
    <>
    <DarkModeProvider>
      <NavBar />
      <Routes />
    </DarkModeProvider>
    </>
  );
}

export default App;
