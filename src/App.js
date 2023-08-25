import './App.css';

import Header from './components/Header'
import InProgress from './components/InProgress';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='task-list'>
      <Todos />
      <InProgress />
    </div>
    </div>
  );
}

export default App;
