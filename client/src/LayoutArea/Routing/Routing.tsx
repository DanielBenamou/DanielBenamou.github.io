import { Route, Routes } from "react-router-dom"
import Companys from "../../Pages/Companys/Companys"
import Login from "../../Pages/Login/Login"
import PageNotFound from "../PageNotFound/PageNotFound"

function Routing() {
  return (
    <>
  <Routes>
    <Route path="/Companys" element={<Companys/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>
    </>
  )
}

export default Routing