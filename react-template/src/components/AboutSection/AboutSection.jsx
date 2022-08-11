import React from "react";
import AboutCard from "../cards/AboutCard";
import '../AboutSection/AboutSection.css'

export default function AboutSection(){
    return(
        <>
            <h1 className="about__title">Sobre nosotros</h1>
            <div grid className="AboutCard__container"> 
                <div className="box">
                    <AboutCard title="Somos CPLN" text='Una ONG que provee soluciones y servicios' scr={"https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"}/>
                </div>
                <div className="box">
                    <AboutCard title="Que hacemos" text='Nos dedicamos a ayudar a diferentes comederos con donaciones y servicios a lo largo del año' scr={"https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"}/>
                </div>
                <div className="box">
                    <AboutCard title="Servicios" text='Voluntariado y Donaciones' scr={"https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"}/>
                </div>
                <div className="box">
                    <AboutCard title="Contacto" text='Envianos Un Mensaje y un encargado se comunicara con usted' scr={"https://as2.ftcdn.net/v2/jpg/04/62/75/03/1000_F_462750303_KN9yQWsvY263YlmGylP28e3jyygo1YyG.jpg"}/>
                </div>
            </div>
        </>
    );
}