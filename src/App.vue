<template>
  <Nav />
  <router-view class="route" />
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>t

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
body {
  background: #171721;
}
.route {
  margin-left: 100px;
}
#app {
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .router-link-exact-active, .router-link-active {
    ion-icon {
      color: #42b983;
    }
  }
  overflow-x: hidden;
}
</style>
