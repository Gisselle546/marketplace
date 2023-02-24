import React from 'react'
import styled from 'styled-components';
import Footer from '@/components/Footer/Footer';
import dynamic from 'next/dynamic';

type PageTemplateProps = {
    type?: 'default' | 'map' | 'basic',
    children: any
}

const Container = styled.div`
min-height: calc(100vh - 200px);

`
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false
});

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

