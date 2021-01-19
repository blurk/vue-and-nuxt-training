import Post from "./Post.vue";

export default {
  title: "Post",
  component: Post,
  argTypes: {
    id: {
      control: "text"
    },
    title: {
      control: "text"
    },
    image: {
      control: "text"
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Post },
  props: Object.keys(argTypes),
  template: '<post v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  id: "0000-0000-0000-0000",
  title: "Default Title",
  image: "https://picsum.photos/300/300"
};
