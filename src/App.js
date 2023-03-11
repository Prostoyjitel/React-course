// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { Contnent } from './components/Content/Content';
import { Footer } from './components/Footer/Footer'
import { Container } from './components/Images/Images';
import { ShowLess } from './components/MoreLess/ShowLess';



function App() {

  return (
    <div className="App">
      {/* <Header title="Page title" />
      <Contnent title="Lorem Ipsum" desc="React has been desingned from the start for gradual adoption" />
      <Footer copyright="all right reserved" />
      <Container />
      <Container /> */}


      <ShowLess
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero written in BC This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
        max={20}
      />

    </div>
  );
}

export default App;
