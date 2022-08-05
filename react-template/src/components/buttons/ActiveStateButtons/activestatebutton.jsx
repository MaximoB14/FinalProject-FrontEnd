import React from 'react';
import Button from 'react-bootstrap/Button';
import '../ActiveStateButtons/activestatebutton.css';

export default function ActiveStateButton() {
  return (
    <div>
          <Button className="primary">
            Sobre Nosotros
          </Button>
          <Button className="secondary">
            UNITE
          </Button>
    </div>

  );
}
