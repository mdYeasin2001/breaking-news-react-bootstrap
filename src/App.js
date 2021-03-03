import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeading from './components/TopHeading/TopHeading';

function App() {
  return (
    <>
      <Container>
      <h1>Learning React Bootstrap</h1>
      </Container>
      <Header></Header>
      <Container>
        <TopHeading></TopHeading>
      </Container>
    </>
  );
}

export default App;
