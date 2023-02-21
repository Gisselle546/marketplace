import {ComponentStory, ComponentMeta} from '@storybook/react';

import Signup from './index';

export default {
    title: 'Pages/Signup',
    component: Signup,
    parameters: {
        layout: 'fullscreen',
      },
} as ComponentMeta<typeof Signup>

const Template: ComponentStory<typeof Signup> = () => <Signup/>
export const Default = Template.bind({})