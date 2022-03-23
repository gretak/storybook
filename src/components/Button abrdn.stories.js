import { withDesign } from 'storybook-addon-designs'
import Button from './Button abrdn.vue';

export default {
  title: 'Button abrdn',
  component: Button,
  argTypes: {
    type: { control: { type: 'select', options: ['primary', 'primary__white' ,'bordered', 'bordered__white' ,'naked', 'naked__white'] } },
    gradient: { control: { type: 'select', options: ['none', 'darkBlue', 'grey', 'lightBlue'] } },
  },
  decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: 'primary',
};

export const Bordered = Template.bind({});
Bordered.args = {
  label: 'Read more',
  type: 'bordered',
};

export const Naked = Template.bind({});
Naked.args = {
  label: 'Explore',
  type: 'naked',
};


Primary.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OsJanbnjXXNfgfNoJkTd5d/Day-2---UI-Library---Atom-%26-Molecules?node-id=12755%3A405'
    }
  }
}


Bordered.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OsJanbnjXXNfgfNoJkTd5d/Day-2---UI-Library---Atom-%26-Molecules?node-id=12755%3A405'
    }
  }
}

Naked.story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OsJanbnjXXNfgfNoJkTd5d/Day-2---UI-Library---Atom-%26-Molecules?node-id=12755%3A405'
    }
  }
}