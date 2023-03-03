import InputItem from '../components/InputItem.vue';

export default {
  title: 'Example/Input',
  component: InputItem,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { InputItem },
  setup() {
    return { args };
  },
  template: '<InputItem v-bind="args" />',
});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Input',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
