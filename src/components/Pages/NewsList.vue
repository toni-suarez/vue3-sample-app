<script setup>
import Card from "../Card.vue";
</script>
<template>
  <Card
    v-for="item in [...Array(100).keys()].map((x) => ++x)"
    v-bind:key="item"
    :id="item"
  />
</template>
