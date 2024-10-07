import React from "react";
import styled from "styled-components";

const Card = styled.div`
border: 1px solid #D3D3D3;
border-radius: 8px;
padding: 16px;
width: 200px;
text-align: center;
background-color: #eeeeee;
transition: transform 0.3 ease;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
margin: 10px;

&:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.h2`
font-size: 1.5rem;
margin: 10px 0;
text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.3);
`;

const Precio = styled.p`
color: black;
margin: 10px 0;
font-weight: 600;
`;

const Button = styled.button`
background-color: white;
color: black;
padding: 10px 20px;
border: 1px solid black;
border-radius: 4px;
cursor: pointer;
transition: background-color 0.25;
transition: transform 0.3 ease;

&:hover {
background-color: black;
color: white;
transform: scale(1.2);
}

`;

function ProductCard({name, precio}) {
    return (
        <Card>
            <Name>{name}</Name>
            <Precio>{precio}</Precio>
            <Button>Comprar</Button>
        </Card>
    );
}

export default ProductCard;