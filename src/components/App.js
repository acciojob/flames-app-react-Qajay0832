import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesCalc from "./FlamesCalc";

class App extends Component {
    
    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <FlamesCalc/>
            </div>
        )
    }
}


export default App;
