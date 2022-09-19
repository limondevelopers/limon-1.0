import React, { useState } from "react"
import BMW from'../img/vector-1@2x.svg'
import MB from '../img/vector@2x.svg'
import WV from '../img/vector-8@2x.svg'
import Skoda from '../img/vector-7@2x.svg'
import Renault from '../img/vector-6@2x.svg'
import Toyota from '../img/vector-9@2x.svg'
import Lexus from '../img/vector-5@2x.svg'
import Mazda from '../img/vector-4@2x.svg'
import LandRover from '../img/vector-10@2x.svg'
import Kia from '../img/vector-2@2x.svg'
import vertical_line from '../img/line-37@2x.svg'



const CarBrand = function () {

    const[brand, setBrand] = useState(0);
    const[brand_overlay, setBrand_overlay] = useState('hide');
    
    return (
        <div class="column">

            <div className="brand">
            
            <div class="line">

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

            <button onClick={() => setBrand('Renault')} className={brand === 'Renault' && `name_of_car_radio_btn_show` || `name_of_car_radio_btn_hide`}>
                <img class="carsvg" src={Renault} />
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

            <a class="see_moretxt" onClick={() => setBrand_overlay('show')}>see<br />more</a>

            </div>

            <div class="divider"></div>

            <div className={brand_overlay === 'show' && `brand_overlay_show` || `brand_overlay_hide`}>

            <div class="line">

                <button onClick={() => setBrand('Audi')} className={brand === 'Audi' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Audi</p1>
                </button> 

                <img class="vertical_line" src={vertical_line}/>

                <button onClick={() => setBrand('Ford')} className={brand === 'Ford' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Ford</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Hyundai')} className={brand === 'Hyundai' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Hyundai</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Infiniti')} className={brand === 'Infiniti' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Infiniti</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Jaguar')} className={brand === 'Jaguar' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Jaguar</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Jeep')} className={brand === 'Jeep' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Jeep</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('MINI')} className={brand === 'MINI' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">MINI</p1>
                </button>

            </div>

                    <div class="divider"></div>

            <div class="line">

                <button onClick={() => setBrand('Lifan')} className={brand === 'Lifan' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Lifan</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Mitsubishi')} className={brand === 'Mitsubishi' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Mitsubishi</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Nissan')} className={brand === 'Nissan' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Nissan</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Lada')} className={brand === 'Lada' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Lada</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Opel')} className={brand === 'Opel' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Opel</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Porshe')} className={brand === 'Porshe' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Porshe</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                        <button onClick={() => setBrand('Peugeot')} className={brand === 'Peugeot' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Peugeot</p1>
                </button>

            </div>

                    <div class="divider"></div>

            <div class="line">

                <button onClick={() => setBrand('Geely')} className={brand === 'Geely' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Geely</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('SangYong')} className={brand === 'SangYong' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">SangYong</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Subaru')} className={brand === 'Subaru' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Subaru</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Suzuki')} className={brand === 'Suzuki' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Suzuki</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Volvo')} className={brand === 'Volvo' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Volvo</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Cadillac')} className={brand === 'Cadillac' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Cadillac</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Chery')} className={brand === 'Chery' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Chery</p1>
                </button>

            </div>

            
                    <div class="divider"></div>

            <div class="line">

                <button onClick={() => setBrand('Chevrolet')} className={brand === 'Chevrolet' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Chevrolet</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Haval')} className={brand === 'Haval' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Haval</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Citroen')} className={brand === 'Citroen' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Citroen</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Dodge')} className={brand === 'Dodge' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Dodge</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Datsun')} className={brand === 'Datsun' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Datsun</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Honda')} className={brand === 'Honda' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Honda</p1>
                </button>

                <img class="vertical_line" src={vertical_line} />

                <button onClick={() => setBrand('Other')} className={brand === 'Other' && `overlay_name_of_car_radio_btn_show` || `overlay_name_of_car_radio_btn_hide`}>
                    <p1 class="car2">Other</p1>
                </button>

            </div>

                    <div class="divider2"></div>

                <a class="overlay" onClick={() => setBrand_overlay('hide')}></a>

            </div>

            </div>

        </div>
    )
}

export default CarBrand;