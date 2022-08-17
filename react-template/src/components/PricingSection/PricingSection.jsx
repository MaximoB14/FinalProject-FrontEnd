import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from "../../components/cards/Pricing Card/Card"

export default function PricingContainer(props){

    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol size='md'>
                    <Card class="donate__card" title="Donar DINERO" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est quam, pulvinar eget felis ut' btntext ='Button1'/>
                </MDBCol>
                <MDBCol size='md'>
                <Card title="Donar MERCADERIA" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est quam, pulvinar eget felis ut' btntext ='Button2'/>
                </MDBCol>
        </MDBRow>
    </MDBContainer>

    
        

);
}