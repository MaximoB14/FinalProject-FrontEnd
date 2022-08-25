import React from "react";
import '../HomeSection/HomeSection.css'
import ActiveStateButton from'../buttons/ActiveStateButtons/activestatebutton';
export default function HomeSection (){
    return(
        <>
            <section className="home" id="home_section">
                <div className="home__container grid">
                    <div className="home__data">
                        <h1 className="home__title">COCINAMOS</h1>
                        <h1 className="home__title__bold">POR LOS NIÑOS</h1>
                        <p className="home__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="home__btns">
                            <ActiveStateButton/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="separator"></div>
        </>
    );
}