import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="2234345"
            title={
              "Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in"
            }
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71s-OXhQNDL._AC_SX569_.jpg"
          />
          <Product
            id="38974345"
            title={
              "ZOTAC Gaming GeForce RTX™ 3070 Ti Trinity OC 8GB GDDR6X 256-bit 19 Gbps PCIE 4.0 Gaming Graphics Card"
            }
            price={84.66}
            rating={5}
            image="https://cdn.akakce.com/z/zotac/zotac-rtx-3070-ti-trinity-oc-zt-a30710j-10p-256-bit-gddr6x-8-gb.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="974345"
            title={
              " Curved Frameless Ultra-Fast Gaming Monitor, FHD 1080p,FreeSync, HDMI/DP/VGA, Height Adjustable,Zero Dead Pixel Guarantee"
            }
            price={29.89}
            rating={4}
            image="https://m.media-amazon.com/images/I/811TEMBaxPL._AC_SX679_.jpg"
          />
          <Product
            id="1224345"
            title={
              "Revlon Infrared Hair Dryer | 1875 Watts of Maximum Shine, Softness and Control"
            }
            price={23.82}
            rating={3}
            image="https://m.media-amazon.com/images/I/71aC3SsYwkL._SX425_.jpg"
          />
          <Product
            id="8974345"
            title={"The lean startup"}
            price={29.89}
            rating={5}
            image="https://static-01.daraz.com.bd/p/b98eeb31d6b886df372154823e40704e.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="7439045"
            title={
              "Klipsch Black Reference Theater Pack 5.1 Surround Sound System"
            }
            price={29.89}
            rating={5}
            image="https://m.media-amazon.com/images/I/81UTwdVe-0L._AC_SX425_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
