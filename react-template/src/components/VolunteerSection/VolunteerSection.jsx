import React from "react";
import '../VolunteerSection/VolunteerSection.css'
import Button from 'react-bootstrap/Button';
export default function VolunteerSection(){
    return(
        <>
            <section className="volunteer" id="volunteer">
                <div className="separator"></div>
                    <div className="volunteer__container">
                        <div className="volunteer__data">
                            <h1 className="volunteer__title__bold">Voluntariado</h1>
                            <p className="volunteer__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Button className="volunteer__btn" variant="primary">INSCRIBITE!</Button>
                        </div>
                    </div>
                <div className="separator"></div>
            </section>
        </>
    );
}