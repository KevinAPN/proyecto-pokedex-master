import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.css"
import imgOne from "../assets/images/1.png"
import imgTwo from "../assets/images/2.png"
import imgThree from "../assets/images/3.png"
import imgFour from "../assets/images/4.png"
import Carrousel from "../components/Carrousel";
import Card from "../components/Card";

const Home: React.FC = () => {
    return (
        <div className="container" id="carousell">
            {/* <h1>Bienvenido a Pokédex</h1>
            <p>Cada Pokémon tiene una historia... ¡Descúbrela aquí!</p> */}

            <div className="row g-3">

                <div className="col bg-light text-center p-3">
                    <img src={imgOne}></img>
                </div>

                <div className="col bg-light text-center p-3">
                    <img src={imgTwo}></img>
                </div>

                <div className="col bg-light text-center p-3">
                    <img src={imgThree}></img>
                </div>

                <div className="col bg-light text-center p-3">
                    <img src={imgFour}></img>
                </div>

            </div>

            <div className="row g-3">

                <div className="col bg-light text-center p-3">
                
                    <h1 className="text-warning fw-bold text-uppercase text-shadow">Bienvenido</h1>
                    <p>Cada Pokémon tiene una historia... ¡Descúbrela aquí!</p>
                <div className="row g-3">

                <Carrousel/>
                </div>

                <div className="row g-3">
                    
                <Link to="/pokedex" className="btn btn-primary">
                        Ver Pokédex
                    </Link>
                </div>
                </div>
            </div>

            <div className="row g-3">
                <div className="col bg-light text-center p-3">
                <Card/>
            </div>
            </div>
                        


            
        </div>
    );
};

export default Home;
