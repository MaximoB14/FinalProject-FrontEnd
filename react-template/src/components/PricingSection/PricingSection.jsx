import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from "../../components/cards/Pricing Card/Card"

export default function PricingContainer(props){

    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol size='md'>
                    <Card title="First Card" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est quam, pulvinar eget felis ut' btntext ='Button1'/>
                </MDBCol>
                <MDBCol size='md'>
                <Card title="Second Card" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est quam, pulvinar eget felis ut' btntext ='Button2'/>
                </MDBCol>
                <MDBCol size='md'>
                <Card title="Thrid Card" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean est quam, pulvinar eget felis ut' btntext ='Button3'/>
                </MDBCol>
        </MDBRow>
    </MDBContainer>

    
        

);
}