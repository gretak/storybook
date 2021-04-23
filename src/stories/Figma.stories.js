import { withDesign } from 'storybook-addon-designs'
import Hero from './Hero.vue';


export default {
    title: 'Example/My-stories',
    component: Hero,
    decorators: [withDesign],
}

export const myStory = () => <Hero>Hello, World!</Hero>

myStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0',
    },
}