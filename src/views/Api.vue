<template>
  <div>
    <h1>⚡ API PAGE</h1>
    <div class="grid">
      <Card v-for="post,index in posts" 
      :key="index"
      :author="post.author"
      :repo="post.repository"
      :priv="post.private"
      :url="post.url"
      :commit="post.commit"
      :time="post.createdAt" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Api",
  components: {
    Card,
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      fetch("/db/posts", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch("updatePosts", data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  padding: 1em;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
