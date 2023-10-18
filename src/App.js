import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DoughnutChart from './components/DoughnutChart';
import MobileBar from './components/mobilebar';



function App() {
  return (
    <>
    <MobileBar/>
    <Sidebar/>
    <Dashboard/>
    <DoughnutChart/>
    </>
  );
}


export default App;
