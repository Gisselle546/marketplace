import {ComponentStory, ComponentMeta} from '@storybook/react';
import HomepageBadge from './HomepageBadge';
import buylogo from '../../assets/images/buy.png'

export default {
    title: 'Components/HomepageBadge',
    component: HomepageBadge,
    parameters: {
        layout: 'fullscreen',
      },
} as ComponentMeta<typeof HomepageBadge>

const Template: ComponentStory<typeof HomepageBadge> = () => <HomepageBadge logo={`${buylogo.src}`} title={'Buy Home'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam '} buttondesc={'Find a Home'}/>
export const Default = Template.bind({})
