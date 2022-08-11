import React from 'react';
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn} from 'mdb-react-ui-kit';

export default function App(props) {

    const {title, text, btntext} = props;
    return (
        <MDBCard>
        <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
            {text}
            </MDBCardText>
            <MDBBtn>{btntext}</MDBBtn>
        </MDBCardBody>
        </MDBCard>
    );
}