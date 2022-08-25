import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from "../../components/cards/Pricing Card/Card"
import "../PricingSection/PricingSection.css"
import {MDBCard,MDBCardTitle,MDBCardText,MDBCardOverlay, MDBIcon} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';



export default function PricingContainer(props){

    return(
        <MDBContainer>
            <MDBRow className="donate__row">
                <MDBCol>
                    <MDBCard>
                            <MDBCardOverlay>
                                <div className="donate__header">
                                    <MDBCardTitle className="donate__title">
                                        Donar DINERO
                                    </MDBCardTitle>
                                </div>
                                <div className="donate__div">
                                    <MDBCardText className="donate__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta consequatur ipsum consectetur qui, a sint nesciunt officiis incidunt expedita! Impedit exercitationem facere deleniti ratione reiciendis quod, sit dolorum cumque.
                                    </MDBCardText>
                                    <Button className="donate__button">
                                        Ir a Mercado Pago <MDBIcon className="donate__icon" fas icon="credit-card" />
                                    </Button>
                                </div>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardOverlay>
                            <div className="donate__header">
                                <MDBCardTitle className="donate__title">
                                    Donar MERCADERIA
                                </MDBCardTitle>
                            </div>
                            <div className="donate__div">
                                <MDBCardText className="donate__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta consequatur ipsum consectetur qui, a sint nesciunt officiis incidunt expedita! Impedit exercitationem facere deleniti ratione reiciendis quod, sit dolorum cumque.
                                </MDBCardText>
                                <Button className="donate__button">
                                    Contactate con nosotros
                                </Button>
                            </div>
                        </MDBCardOverlay>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    
        

);
}