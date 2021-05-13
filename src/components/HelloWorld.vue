<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.update()
    }, 5000);
  },
  methods: {
    async update() {
      const req = await fetch('/api');
      const res = await req.json()
      if (res !== '') {
        this.msg = res.msg
      }
    }
  }

}
</script>

<style scoped lang="scss">

</style>
