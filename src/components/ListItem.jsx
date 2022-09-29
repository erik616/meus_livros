import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ItemContainer = styled.div`
    border: 1px none solid;
    border-radius: 5px;
    background-color: #f5f5f5;
    height: 240px;
    width: 524px;
    color: #29303b;
    margin: 10px auto;
    padding: 10px;
`;

const Thumbnail = styled.img`
    width: auto;
    height: 100%;
    border: 0;
    vertical-align: middle;
    float: left;
    margin-right: 10px;
`;

const TitlePane = styled.div`
    font-weigth: 700;
    margin-bottom: 5px;
`;

const PricePane = styled.div` 
    margin-bottom: 5px;
`;

const ItemLink = styled.a`
    text-decoration:none;
    color:black;
`;

function ListItem({ link, img, title, price }) {
    return (
        <ItemContainer>
            <ItemLink href={link} title="Clique para comprar">
                <Thumbnail src={img} />
                <TitlePane>{title}</TitlePane>
                <PricePane>R$:{price}</PricePane>
                <Button variant='primary'>Comprar</Button>
            </ItemLink>
        </ItemContainer>
    ); 
}

export default ListItem;