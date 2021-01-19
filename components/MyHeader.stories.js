import MyHeader from "./MyHeader.vue";

export default {
  title: "MyHeader",
  component: MyHeader,
  argTypes: {
    links: {
      control: "object"
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { MyHeader },
  props: Object.keys(argTypes),
  template: '<my-header v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  links: { Home: "/", Posts: "/posts", About: "/about" }
};
