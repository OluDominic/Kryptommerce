//import './App.css';
import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components';
import './default.scss';

const App = () => {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
