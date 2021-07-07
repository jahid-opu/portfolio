import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <NavBar/>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
