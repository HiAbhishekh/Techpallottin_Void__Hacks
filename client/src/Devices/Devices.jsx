import React, { useState } from "react";
import "./Devices.css";

import Dev1 from "../img/sell_phone.png";
import Dev2 from "../img/sell_laptop_.png";
import Dev3 from "../img/sell_smart_watch_.png";
import Dev4 from "../img/sell_tablet_.png";
import Dev5 from "../img/sell-televisions_.png";
import Dev6 from "../img/sell_earphone.png";
import Dev7 from "../img/sell_smart_speaker.png";
import Dev8 from "../img/sell_gaming_consoles.png";
import Services from "../components/Services/Services";
import PhoneModal from "../components/Modal/PhoneModal";

const Devices = () => {

  const[opened,setOpened] = useState(false)
  return (
    <div className="Devices">
      <span className="type">Sell Devices</span>
      <div className="Container">
        <div onClick={()=>setOpened(true)}
        >
          <PhoneModal 
          opened={opened} setOpened={setOpened}
          />
            <div className="desc">
          <img src={Dev1} alt="" />
          <span
          
          >Phone</span>
          
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev2} alt="" />
          <span>Laptop</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev3} alt="" />
          <span>Smart Watches</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev4} alt="" />
          <span>Tablet</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev5} alt="" />
          <span>Televisions</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev6} alt="" />
          <span>Earphones</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev7} alt="" />
          <span>Speakers</span>
          </div>
        </div>
        <div>
            <div className="desc">
          <img src={Dev8} alt="" />
          <span>Gaming Consoles</span>
          </div>
        </div>
      </div>
      <Services/>
    </div>
  );
};

export default Devices;
