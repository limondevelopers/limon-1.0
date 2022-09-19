import React, { useState } from "react"
import BMW from'../img/vector-1@2x.svg'
import MB from '../img/vector@2x.svg'
import WV from '../img/vector-8@2x.svg'
import Skoda from '../img/vector-7@2x.svg'
import Reno from '../img/vector-6@2x.svg'
import Toyota from '../img/vector-9@2x.svg'
import Lexus from '../img/vector-5@2x.svg'
import Mazda from '../img/vector-4@2x.svg'
import LandRover from '../img/vector-10@2x.svg'
import Kia from '../img/vector-2@2x.svg'


const CarBrand = function () {

    const[brand, setBrand] = useState(0);
    
    return (
        <div class="auto">
            
            <button onClick={() => setBrand('BMW')} className={brand === 'BMW' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={BMW} />
             </button> 

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('MB')} className={brand === 'MB' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={MB} />
            </button> 

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('WV')} className={brand === 'WV' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={WV} />
            </button> 

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Skoda')} className={brand === 'Skoda' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Skoda} />
            </button> 

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Reno')} className={brand === 'Reno' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Reno} />
            </button> 
            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Toyota')} className={brand === 'Toyota' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Toyota} />
            </button>

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Lexus')} className={brand === 'Lexus' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Lexus} />
            </button>

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Mazda')} className={brand === 'Mazda' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Mazda} />
            </button>

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('LandRover')} className={brand === 'LandRover' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={LandRover} />
            </button> 

            <div class="vertical_line"></div>

            <button onClick={() => setBrand('Kia')} className={brand === 'Kia' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Kia} />
            </button> 

            <div class="vertical_line"></div>

            <a class="see_moretxt" onClick={() => setBrand('0')}>see<br />more</a>

            

        </div>
    )
}

export default CarBrand;