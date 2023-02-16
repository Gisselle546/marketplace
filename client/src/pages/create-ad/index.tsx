import React from 'react'
import styled, { css } from 'styled-components'
import { PageTemplate } from '@/templates/PageTemplate';
import { CreateWrapper } from './index.style';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';


function CreateAd() {


    const Content = styled.div`
        display:flex;
        background: linear-gradient(to top right,rgba(0,0,0, 0),rgba(28,44,91, 100)), url(https://actionseaze.com/wp-content/uploads/2020/02/sunset.jpg) no-repeat top/cover;
        height: 100vh;
        justify-content:center;
        align-items:center;
        width:100%;
    `;


  return (
    <ProtectedRoute>
    <PageTemplate>
        <Content>
            <CreateWrapper>
                <div>CreateAd</div>
            </CreateWrapper>
        </Content>
    </PageTemplate>
    </ProtectedRoute>
  )
}

export default CreateAd