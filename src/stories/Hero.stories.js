import { withDesign } from 'storybook-addon-designs'
import Hero from './Hero.vue';

export default {
  title: 'Example/Hero',
  component: Hero,
  argTypes: {
    size: { control: { type: 'select', options: ['mini', 'plg', 'ptlg'] } },
    backgroundGradient: { control: 'color' }
  },
  decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hero },
  template: '<hero @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

export const Mini = Template.bind({});
Mini.args = {
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

export const Large = Template.bind({});
Large.args = {
  size: 'ptlg',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

export const HasGradient = Template.bind({});
HasGradient.args = {
  size: 'plg',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

export const HasCTA = Template.bind({});
HasCTA.args = {
  size: 'mini',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

HasCTA.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}