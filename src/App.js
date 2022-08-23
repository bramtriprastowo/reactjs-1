import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Header } from './Components/Header';
import { Profile } from './Components/Profile';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;