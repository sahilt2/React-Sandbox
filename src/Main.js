import React from "react";
import './Main.css'
import Box from './Box'

const Main = () => {
    return(
<main>
    <div  className="cards">
    <Box name="Margit" title="CEO" age="29"/>
    <Box name="Kati" title="Developer" age="20"/>
    <Box name="Karin" title="Designer" age="45"/>
    </div>
</main>
    )
}

export default Main;