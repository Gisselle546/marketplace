import {ComponentStory, ComponentMeta} from '@storybook/react';

import Signin from './index';

export default {
    title: 'Pages/Signin',
    component: Signin,
    parameters: {
        layout: 'fullscreen',
      },
} as ComponentMeta<typeof Signin>

const Template: ComponentStory<typeof Signin> = () => <Signin/>
export const Default = Template.bind({})