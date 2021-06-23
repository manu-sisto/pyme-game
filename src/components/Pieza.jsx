import React from "react";

const Pieza = () => {
    let estilo= {
        display: "grid"
    }

    return (
    <div style={estilo}>
        <img src="/assets/pieza1.png" id= "pieza" alt=""/>
    </div>
    )
}

export default Pieza;