<template>
  <div :class="[priv ? 'priv' : 'card']">
      <h3>Author</h3>
      <img src="https://elliot.sirv.com/favicon.ico" alt="icon">
      <h2>CARD</h2>
      <h3>commit message</h3>
      <h4>{{new Date().toDateString()}} {{new Date().toLocaleTimeString()}}</h4>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
      priv : {
        default: false
      }
    }
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