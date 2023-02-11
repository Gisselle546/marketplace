import React from 'react'
import styled from 'styled-components';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

type PageTemplateProps = {
    type?: 'default' | 'map' | 'basic',
    children: any
}

const Container = styled.div`
min-height: calc(100vh - 200px);

`

export const PageTemplate = ({type = 'default', children}: PageTemplateProps) =>{
  switch(type){
    case 'map':
        return(
            <>
             <Header/>
             <Container>{children}</Container>
            </>
        )
  }
  return(
    <>
     <Header/>
        <Container>{children}</Container>
     <Footer/>
    </>
  )
}

