import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {Chat} from "../chat";
import Main from "../main";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Main/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Route>
    )
);