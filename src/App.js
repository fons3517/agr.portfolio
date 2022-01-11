
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTabs from './components/NavTabs';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'
function App() {
  return (
    <div>
      <NavTabs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
