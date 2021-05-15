<template>
  <div>
    <h1>⚡ API PAGE</h1>
    <div class="grid">
      <Card/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name: 'Api',
    components: {
      Card
    }
}
</script>

<style lang="scss" scoped>
h1 {
  padding: 1em;
}
</style>