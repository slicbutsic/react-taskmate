import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer'
import './App.css';

export default function App() {


  return (
    <div className='App'>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}
