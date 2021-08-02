import './Interface/CSS/App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Interface/Navbar';
import Socialbar from './Interface/SocialBar';
import About from './Interface/About';
import Projects from './Interface/Projects';
import Work from './Interface/Work';
import Education from './Interface/Education';
import Contact from './Interface/Contact';

// Note: SocialBar has to be on the bottom of the stack.

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Work />
      <Education />
      <Contact />
      <Socialbar />
    </div>
  );
}

export default App;
