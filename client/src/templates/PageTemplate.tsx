import React from 'react'
import styled from 'styled-components';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

type PageTemplateProps = {
    type?: 'default' | 'authen' | 'basic',
    children: any
}

const Container = styled.div`
min-height: calc(100vh - 200px);

`

function PageTemplate({type = 'default', children}: PageTemplateProps) {
  switch(type){
    case 'authen':
        return(
            <>
             <Header/>
             <Container/>
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

export default PageTemplate