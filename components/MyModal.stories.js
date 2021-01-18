import MyModal from "./MyModal.vue";

export default {
  title: "MyModal",
  component: MyModal,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  components: { MyModal },
  props: Object.keys(argTypes),
  template: '<my-modal v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {};
