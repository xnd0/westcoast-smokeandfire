import logo from './logo.svg';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div>

      <div>
        <Header />
      </div>

      <div><MainPage /></div>

      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
