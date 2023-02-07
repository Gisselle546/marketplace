import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageTemplate } from './PageTemplate'

export default {
    title: 'Templates/PageTemplate',
    component: PageTemplate,
    parameters:{
        layout: 'fullscreen'
    },
} as ComponentMeta<typeof PageTemplate>

const DummyComponent = ({children}:any) => <div style={{padding: 60}}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
    type:'default',
    children: (
        <DummyComponent>Default template</DummyComponent>
    ),
}