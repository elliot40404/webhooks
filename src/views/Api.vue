<template>
  <div>
    <h1>⚡ API PAGE</h1>
    <div class="grid">
      <Card :priv="true"/>
      <Card/>
      <Card :priv="false"/>
      <Card/>
      <Card/>
      <Card :priv="true"/>
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
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>