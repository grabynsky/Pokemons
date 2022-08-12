import React, {useContext} from "react";
import { MainContext } from "../../context/MainContext";
import { Loader } from "../loader/Loader";
import './description.scss';
import { DescrPageContent } from "./DescrPageContent";

export const Description = () => {
    const {state} = useContext(MainContext)
    return (
        <div className="descrPage">
                {
                    state.itemLoading ? <DescrPageContent/> : <Loader/>
                }
        </div>
    )
}
