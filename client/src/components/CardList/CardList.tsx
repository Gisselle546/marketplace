import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';

const CardListWrapper = styled.div`
    overflow: auto
`;

function CardList() {
  return (
    <CardListWrapper>
        <Card/>
    </CardListWrapper>
  )
}

export default CardList