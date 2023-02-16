import React, { useState } from "react";   // calling the react and state modules 
import Button from '@mui/material/Button';    // calling the button module 
import Tooltip from '@mui/material/Tooltip';  // calling the tooltip module 
import './Style.css';   // calling the css module 


function App(){

    // using an Hooks(useState) for changing the color of the buttons 
    const [color1,setColor1] = useState("primary");
    const [color2,setColor2] = useState("primary");
    const [color3,setColor3] = useState("primary");
    const [color4,setColor4] = useState("primary");


    // function to change the color of the first button 
    const bgChange1 = () =>{
        setColor1("secondary");
    }

    // function to change the color of the second button 
    const bgChange2 = () => {
        setColor2("secondary");
    }

    // function to change the color of the third button 
    const bgChange3 = () => {
        setColor3("secondary");
    }

    // function to change the color of the forth button 
    const bgChange4 = () =>{
        setColor4("secondary");
    }



    return(
        //  wrapping all the buttons on React Fragment 
        <React.Fragment>
            <h2>Hover Over the Buttons </h2>
            <div className="btnContainer">
                {/* first button  */}
                <Tooltip title='i am Left Button' placement='left' arrow enterDelay={200} leaveDelay={200}>
                 <Button color= {color1} variant="contained" size="large" onClick={bgChange1}  >Left</Button>
                </Tooltip>

                {/* second button  */}
               <Tooltip title='i am Right Button'  placement="right" arrow  enterDelay={200} leaveDelay={200}>
                <Button color= {color2} variant="contained" size="large" onClick={bgChange2} >Right</Button>
               </Tooltip>

               {/* third button  */}
               <Tooltip title='i am Top Button'  placement="top" arrow enterDelay={200} leaveDelay={200} >
                <Button color= {color3} variant="contained" size="large" onClick={bgChange3} style={{padding:14}} >Top</Button>
               </Tooltip>
               
               {/* forth button  */}
               <Tooltip title='i am Bottom Button' placement="bottom" arrow  enterDelay={200} leaveDelay={200} >
                <Button  color= {color4} variant="contained" size="large" onClick={bgChange4} >Bottom</Button>
               </Tooltip>
               
            </div>
        </React.Fragment>
    )
}

// exporting the App function 
export default App;