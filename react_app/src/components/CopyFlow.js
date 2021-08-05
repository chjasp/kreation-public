import { useState } from "react";
import Copypress from './Copypress' 
import FocusGroup from './FocusGroup'

const CopyFlow = () => {

    const [compName, setCompName] = useState("");
    const [text, setText] = useState("");

    return (
        <>
            { text == "" ? (
            <Copypress setCompName={setCompName} setText={setText} />) :
            (
            <FocusGroup compName={compName} text={text} />  
            ) }          
        </>
    )
}

export default CopyFlow
