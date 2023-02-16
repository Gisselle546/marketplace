import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';

const CardListWrapper = styled.div`
    
`;

function CardList() {
  return (
    <CardListWrapper>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </CardListWrapper>
  )
}

export default CardList