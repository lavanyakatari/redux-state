import kashmir from "./assets/computer.jpeg"
import { NavBar } from './projectFolder/NavBar'
import { PostDisplay } from './projectFolder/PostDisplay'
import './App.css'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <div className="flex justifiy-center py-5 px-60">
          <img className="" src={kashmir}/>
        </div>
        
        <div>
          <PostDisplay/>
        </div>
        
      </div>
    </>
  )
}

export default App
