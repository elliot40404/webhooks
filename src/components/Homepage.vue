<template>
  <div>
      <h1>HOMEPAGE</h1>
      <button @click="hello">SAY HELLO</button>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    hello() {
      fetch('/api/hello', {"method": 'POST'})
        .then(res => res.json())
          .then((data) => {this.msg = data.msg})
    }
  }
};
</script>

<style scoped lang="scss">
button {
  margin: 50px;
  background: #C4EF49;
  color: #000000;
  padding: 10px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
}
h1 {
  color: white;
  padding: 1em;
}
h2 {
  color: white;
  padding: 20px;
}
</style>
