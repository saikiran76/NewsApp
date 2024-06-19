import './App.css'
import { Card } from './components/Card';
import { NavBar } from './components/NavBar';

const App = ()=>{
  return(
    <>
    <div className='h-screen w-full'>
      <NavBar/>
      <div className="font-Inter font-bold flex flex-wrap m-8 gap-4 w-[70%] border-[#293548] border-l p-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    </>
  )
}

export default App;