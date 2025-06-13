import { ChevronUp } from 'lucide-react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  

  return (
    <div className="h-full w-screen">
        <div className="flex gap-2 bg-[#FFFF00] w-full justify-center py-1.5">
              <p className="">
                    Hopscotch has joined Avalara!                     
              </p>
              <a href='#' className="cursor-pointer underline space-x-2">Learn More!</a>  
        </div> 
        <div className="w-full ">
            <Header/>
          <HeroSection/>
        </div>
    </div>
  )
}

export default App




