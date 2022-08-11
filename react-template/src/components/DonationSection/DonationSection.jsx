import React from "react";
import '../DonationSection/DonationSection.css'
import Button from 'react-bootstrap/Button';
export default function HomeSection (){
    return(
        <>
            <section className="donation" id="donation">
                <div className="don__separator"></div>
                    <div className="donation__container">
                        <div className="donation__data">
                            <h1 className="donation__title__bold">Donaciones</h1>
                            <p className="donation__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Button className="donation__btn" variant="primary">DONA!</Button>
                        </div>
                    </div>
                <div className="separator"></div>
            </section>
        </>
    );
}