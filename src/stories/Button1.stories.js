import MyButton from './Button1.vue';

export default {
  title: 'Example/Button1',
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
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const myStory = Template.bind({});
myStory.args = {
  size: 'small',
  label: 'Button 1'
};

myStory.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}