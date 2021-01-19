import PostForm from "./PostForm.vue";

export default {
  title: "PostForm",
  component: PostForm,
  argTypes: {
    isEditing: {
      control: "boolean"
    },
    currentId: {
      control: "text"
    },
    currentTitle: {
      control: "text"
    },
    currentContent: {
      control: "text"
    },
    currentImage: {
      control: "text"
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
  isEditing: false
};

export const Update = Template.bind({}); //Edit post
Update.args = {
  currentId: "0000-0000-0000-0000",
  currentTitle: "Edit title",
  currentContent: "Edit Content",
  currentImage: "Edit Image",
  isEditing: true
};
