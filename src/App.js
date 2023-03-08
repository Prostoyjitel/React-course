// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Contnent } from './components/Content/Content';
import {Footer} from './components/Footer/Footer'
import { Container } from './components/Images/Images';



function App() {

  return (
    <div className="App">
      {/* <Header title="Page title" />
      <Contnent title="Lorem Ipsum"  desc="React has been desingned from the start for gradual adoption" />
      <Footer copyright="all right reserved" /> */}
      <Container />
      <Container />
    </div>
  );
}

export default App;
