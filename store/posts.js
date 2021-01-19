import { storage } from "../utils/storage";

export default {
  state: () => ({
    posts: [],
    currentPost: {}
  }),

  getters: {
    allPosts: state => state.posts,
    onePost: state => state.currentPost
  },

  actions: {
    //GET
    fetchPosts({ commit }) {
      const posts = storage.getData();
      commit("setPosts", posts);
    },
    fetchOnePost({ commit }, id) {
      const post = storage.getData(id);
      commit("setCurrentPost", post);
    },
    //CREATE
    addPost({ commit }, post) {
      post.createdAt = new Date().toUTCString();
      post.updatedAt = new Date().toUTCString();
      post.id = uuid();

      storage.saveData(post);
      commit("addPost", post);
    },
    // UPDATE
    updatePost({ commit }, payload) {
      payload.updatedAt = new Date().toUTCString();
      storage.editData(payload);
      commit("editPost", payload);
    },
    //DELETE
    deletePost({ commit }, id) {
      storage.deleteData(id);
      commit("deletePost", id);
    }
  },

  mutations: {
    setPosts: (state, posts) => (state.posts = posts),
    setCurrentPost: (state, post) => (state.currentPost = post),
    addPost: (state, post) => state.posts.push(post),
    editPost: (state, post) => {
      const index = state.posts.findIndex(p => p.id === post.id);
      state.posts.splice(index, 1, { ...state.posts[index], ...post });
    },
    deletePost: (state, id) => {
      const index = state.posts.findIndex(p => p.id === id);
      state.posts.splice(index, 1);
    }
  }
};
