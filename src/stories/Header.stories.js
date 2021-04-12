import MyHeader from './Header';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Example/Header',
  component: MyHeader,
  decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

export const myStory = Template.bind({});
LoggedOut.args = {};


myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0',
  },
}