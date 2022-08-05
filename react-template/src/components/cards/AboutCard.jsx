import React from "react";
import '../cards/AboutCard.css'
import Card from 'react-bootstrap/Card';

export default function AboutCard(props){
    const {title,text,scr} = props;


    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img className="card__img" src={scr}/>
        <div className="card__separator"></div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Link  href="#">Card Link</Card.Link>
          <Card.Link  href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
}

