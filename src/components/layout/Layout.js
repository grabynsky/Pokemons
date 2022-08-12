import React, {useContext} from "react";
import { Nav } from "../nav/Nav";
import { Mask } from "../mask/Mask";
import './layout.scss';
import { Home } from "../home/Home";
import { MainContext } from "../../context/MainContext";
import{Loader} from '../loader/Loader';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Description } from "../description/Description";


export const Layout = () => {
    const {state} = useContext(MainContext)
    return (


        <div className="layout">
            {
                state.loading ? <React.Fragment>
                    <Nav />
                    <Mask />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/item/:name" element={<Description/>}/>
                            <Route render={() => <Navigate to="/" />} />
                        </Routes>

                        <Home/>

                     </div>
                </React.Fragment> : 
                <Loader/>
            }
     
        </div>
    )
}