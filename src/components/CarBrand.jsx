import React, { useState } from "react";
import BMW from'../img/vector-1@2x.svg'


const CarBrand = function () {

    const[brand, setBrand] = React.useState(false);
    
    return (
        <div class="auto">
            <button onClick={() => setBrand(true)} className={`${brand ? `name_of_car_radio_btn_show` : `name_of_car_radio_btn_hide`}`}>
                <img class="carsvg" src={BMW}/>
            </button>     
        </div>
    )
}

export default CarBrand;