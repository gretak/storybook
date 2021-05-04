import { withDesign } from 'storybook-addon-designs'
import Hero from './Hero.vue';

export default {
  title: 'Hero(ASI)',
  component: Hero,
  argTypes: {
    size: { control: { type: 'select', options: ['mini', 'plg', 'ptlg'] } },
    gradient: { control: { type: 'select', options: ['none', 'darkBlue', 'grey', 'lightBlue'] } },
  },
  decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hero },
  template: '<Hero @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
};

export const Large = Template.bind({});
Large.args = {
  size: 'ptlg',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
};

export const HasGradient = Template.bind({});
HasGradient.args = {
  size: 'ptlg',
  gradient: 'darkBlue',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
};

export const HasCTA = Template.bind({});
HasCTA.args = {
  size: 'mini',
  title: 'Everything is future',
  subtitle: 'Invest today. Change tomorrow.',
  label: 'Discover more',
};

Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}

HasGradient.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}

Mini.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}

Large.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}

HasCTA.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jWxccJwguU2RHdxXvwRGkh/test-Figma?node-id=24%3A0'
    }
  }
}