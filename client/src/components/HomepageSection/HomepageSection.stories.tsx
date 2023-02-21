import {ComponentStory, ComponentMeta} from '@storybook/react';

import HomepageSection  from './HomepageSection';

export default {
    title: 'Components/HomepageBanner',
    component: HomepageSection,
    parameters: {
        layout: 'fullscreen',
      },
} as ComponentMeta<typeof HomepageSection>

const Template: ComponentStory<typeof HomepageSection> = () => <HomepageSection/>
export const Default = Template.bind({})