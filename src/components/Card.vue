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
    let state = reactive({ card: [] });

    async function fetchCard() {
      state.card = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.id}`
      )
        .then((response) => response.json())
        .then((json) => json);
    }

    return {
      state,
      fetchCard,
    };
  },
  mounted() {
    this.fetchCard();
  },
};
</script>

<template>
  <section class="bg-white/80 p-3 rounded mb-3 border border-slate-200">
    <h3 class="text-xl text-slate-800 mb-2">
      <router-link :to="'/news/' + state.card.id">
        {{ state.card.title }}
      </router-link>
    </h3>
    <p class="text-sm">{{ state.card.body }}</p>
  </section>
</template>
