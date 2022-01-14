<script>
import { reactive } from "vue";
import PhotoCard from "./PhotoCard.vue";

export default {
  components: { PhotoCard },
  setup(props) {
    let state = reactive({ photos: [] });
    state.photos = [...Array(25).keys()].map((x) => ++x);

    return {
      state,
    };
  },
};
</script>

<template>
  <PhotoCard v-for="item in state.photos" v-bind:key="item" :id="item" />
</template>
