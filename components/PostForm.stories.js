import PostForm from "./PostForm.vue";

export default {
  title: "PostForm",
  component: PostForm,
  argTypes: {
    isEditing: {
      control: "boolean"
    },
    currentPost: {
      control: "object"
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { PostForm },
  props: Object.keys(argTypes),
  template: '<post-form v-bind="$props"/>'
});

export const Add = Template.bind({}); //Add post is default
Add.args = {
  currentPost: {
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: ""
  },
  isEditing: false
};

export const Update = Template.bind({}); //Edit post
Update.args = {
  currentPost: {
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: ""
  },
  isEditing: true
};
