import PostDetail from "./PostDetail.vue";

export default {
  title: "PostDetail",
  component: PostDetail,
  argTypes: {
    title: {
      control: "text"
    },
    content: {
      control: "text"
    },
    image: {
      control: "text"
    },
    createdAt: {
      control: "text"
    },
    updatedAt: {
      control: "text"
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { PostDetail },
  props: Object.keys(argTypes),
  template: '<post-detail v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  image: "https://picsum.photos/300/300",
  title: "Default Title",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nesciunt totam consequatur eos quo qui non quaerat minima nostrum ea.",
  createdAt: new Date().toUTCString(),
  updatedAt: new Date().toUTCString()
};
