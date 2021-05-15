<template>
  <div :class="[priv ? 'priv' : 'card']">
      <h3>{{author}}</h3>
      <img :src="url" alt="icon">
      <h2>{{repo}}</h2>
      <h3>{{commit}}</h3>
      <h4>{{time}}</h4>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['priv', 'author', 'repo', 'commit', 'time', 'url'],
}
</script>

<style lang="scss" scoped>
.card, .priv {
  background: hsl(0, 0%, 0%);
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border-left: 10px solid rgb(49, 170, 49);
  padding: 10px;
  color: #ffffff;
  h2,h3,h4 {
    font-weight: normal;
  }
  img {
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
  }
  ::selection {
  color: rgb(255, 130, 28);
  background: none
  }
}
.priv {
  border-left: 10px solid rgb(255, 0, 0);
}

</style>