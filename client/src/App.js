import { Navbar, Header, Program, Boking, JoinedContent, Plan, Testimony, Footer  } from './component/index';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Program />
     <Boking />
     <JoinedContent/>
     <Plan />
     <Testimony />
     <Footer />
    </div>
  );
}

export default App;
