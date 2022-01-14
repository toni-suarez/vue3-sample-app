<script>
import { reactive } from "vue";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let state = reactive({ photo: [] });

    async function fetchPhoto() {
      state.photo = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${props.id}`
      )
        .then((response) => response.json())
        .then((json) => json);
    }

    return {
      state,
      fetchPhoto,
    };
  },
  mounted() {
    this.fetchPhoto();
  },
};
</script>

<template>
  <div class="bg-white drop-shadow rounded-xl p-5 pb-0 mb-3">
    <img
      :src="`https://picsum.photos/id/${state.photo.id}/1024/500`"
      class="w-[1024px] h-[500px] object-cover"
    />
    <div class="text-gray text-xs text-right py-5">
      {{ state.photo.title }} | Bild: Lorem Picsum
    </div>
  </div>
</template>
