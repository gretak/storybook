import { withDesign } from 'storybook-addon-designs'
import MyButton from './Button1.vue';

export default {
    title: 'Example/My-stories',
    component: MyButton,
    decorators: [withDesign],
}

export const myStory = () => <MyButton>Hello, World!</MyButton>

myStory.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0',
    },
}