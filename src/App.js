import ForthPage from "./pages/ForthPage";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import { Routes, Route } from "react-router-dom";
const coffee = [
    { id:1,
      country:"Kanada", 
      cost:"5.99$",
      title:"Nescoffee 1kg"
    }, 
    {
      id:2,
      country:"Brazil", 
      cost:"4.39$",
      title:"AROMI 1kg"
    }, 
    {
      id:3,
      country:"Russia", 
      cost:"5.49$",
      title:"CoffeeEE 1kg"
    }, 
    {
      id:4,
      country:"USA", 
      cost:"5.89$",
      title:"OlegsCoffee 1kg"
    }, 
    {
      id:5,
      country:"Kenya", 
      cost:"10.90$",
      title:"KenyaCoffee 1kg"
    }, 
    {
      id:6,
      country:"Kenya", 
      cost:"0.99$",
      title:"AROMISTICO 1kg"
    }
  ]
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/our-beans" element={<SecondPage coffee={coffee}/>} />
                <Route path="/your-pleasure" element={<ThirdPage coffee={coffee}/>} />
                <Route path="/about/:id" element={<ForthPage coffee={coffee}/>}/>
            </Routes>
        </div>
    );
}
export default App;
