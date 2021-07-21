import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Particles from 'react-particles-js';
import Navbar from './Interface/Navbar';
import Socialbar from './Interface/SocialBar';
import About from './Interface/About';

// Note: SocialBar has to be on the bottom of the stack.

function App() {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <About />
      <Socialbar />
    </div>
  );
}

export default App;
