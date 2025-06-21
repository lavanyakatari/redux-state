import kashmir from "./assets/computer.jpeg"
import { NavBar } from './projectFolder/NavBar'
import { PostDisplay } from './projectFolder/PostDisplay'
import './App.css'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <img src={kashmir}/>
        <div>
          <PostDisplay/>
        </div>
        
      </div>
    </>
  )
}

export default App
