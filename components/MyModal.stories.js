import MyModal from "./MyModal.vue";

export default {
  title: "MyModal",
  component: MyModal
};

const Template = (args, { argTypes }) => ({
  components: { MyModal },
  props: Object.keys(argTypes),
  template: `<my-modal v-bind="$props" >
    <slot></slot>
  </my-modal>`
});

export const Default = Template.bind({});
Default.args = {};
