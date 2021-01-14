export const storage = {
  getData(id) {
    if (!id) {
      return localStorage.getItem("posts") === null
        ? []
        : JSON.parse(localStorage.getItem("posts"));
    } else {
      const posts = JSON.parse(localStorage.getItem("posts"));
      return posts.find(post => post.id == id);
    }
  },

  editData(data) {
    const posts = this.getData();
    const foundIndex = posts.findIndex(post => post.id === data.id);
    posts[foundIndex] = { ...posts[foundIndex], ...data };

    this.saveData(posts);
  },

  saveData(data) {
    if (Array.isArray(data)) {
      localStorage.setItem("posts", JSON.stringify(data));
    } else {
      const posts = this.getData();
      posts.push(data);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  },

  deleteData(id) {
    const posts = this.getData();
    console.log(posts);
    const newPosts = posts.filter(post => post.id !== id);
    this.saveData(newPosts);
  }
};
