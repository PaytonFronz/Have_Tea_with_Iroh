import './App.css';
import './Responsive.css'
import Button from './components/button';
import background from './img/iroh_api.png';

function App() {

  return (
    <div className="App">
      <div className='Iroh' style={{ backgroundImage: `url(${background})` }}>
        <Button/>
      </div>
    </div>
  );
}

export default App;
