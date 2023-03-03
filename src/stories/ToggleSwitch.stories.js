import Toggle from '../components/ToggleSwitch.vue';

export default {
  title: 'Example/ToggleSwitch',
  component: Toggle,
  argTypes: {
    modelValue: {
      type: 'boolean',
    },
  },
};

const Template = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'SORT BY',
  labelA: 'RELEASE DATE',
  labelB: 'RATING',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  labelA: 'RELEASE DATE',
  labelB: 'RATING',
};
