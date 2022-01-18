
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <NavTabs />
      <AboutMe />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
