import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  heading1: 'tets',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  heading1: 'tets',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  heading1: 'tets',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const myStory = () => <my-button>Hello, World!</my-button>
myStory.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}