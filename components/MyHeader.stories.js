import MyHeader from "./MyHeader.vue";

export default {
  title: "MyHeader",
  component: MyHeader,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  components: { MyHeader },
  props: Object.keys(argTypes),
  template: '<my-header v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {};
