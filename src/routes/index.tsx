import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Builder from "../pages/builder";


const routes=createBrowserRouter([
    {
       path:'/',
       element:<App/>
        

    },
    {
        path:'builder',
        element:<Builder/>
    }
])

export default routes