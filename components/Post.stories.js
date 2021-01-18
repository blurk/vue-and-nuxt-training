import Post from "./Post.vue";

export default {
  title: "PostCard",
  component: Post,
  argTypes: {
    post: {
      control: "object"
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
  post: {
    id: "0000-0000-0000-0000",
    image: "https://picsum.photos/300/300",
    title: "Default Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt totam consequatur eos quo qui non quaerat minima nostrum ea."
  }
};
