import { Routes , Route} from "react-router";
import Home from "../Components/Home/Home";
const Routers = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </>
    )
}

export default Routers;