import SearchSection from '../components/SearchItem.vue';

export default {
  title: 'Example/SearchSection',
  component: SearchSection,
  argTypes: {
    onSubmit: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

const Template = (args) => ({
  components: { SearchSection },
  setup() {
    return { args };
  },
  template: '<search-section v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Search',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Search',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Search',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Search',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Search',
};
