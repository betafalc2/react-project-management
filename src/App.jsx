import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"


function App() {


  return (
    <>

    <Navbar/>

    <Routes>
<Route>
  <Route path="/" element={<HomePage/>}/>
</Route>

</>
  )
}

export default App
