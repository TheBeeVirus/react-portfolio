import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './Interface/Navbar';
import Socialbar from './Interface/SocialBar';
import About from './Interface/About';

// Note: SocialBar has to be on the bottom of the stack.

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Socialbar />
    </div>
  );
}

export default App;
