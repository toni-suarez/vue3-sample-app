<script>
import { reactive } from "vue";
export default {
  props: ["id"],
  setup(props) {
    let state = reactive({ news: [], comments: [] });
    async function fetchNews() {
      state.news = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + props.id
      )
        .then((response) => response.json())
        .then((json) => json);
    }

    async function fetchComments() {
      state.comments = await fetch(
        "https://jsonplaceholder.typicode.com/posts/" + props.id + "/comments"
      )
        .then((response) => response.json())
        .then((json) => json);
    }

    return {
      state,
      fetchNews,
      fetchComments,
    };
  },
  mounted() {
    this.fetchNews();
    this.fetchComments();
  },
};
</script>

<template>
  <section class="bg-white/80 p-3 rounded mb-3 border border-slate-200">
    <h1 class="text-2xl text-slate-800 mb-3">
      {{ state.news.title }}
    </h1>
    <p class="text-base">{{ state.news.body }}</p>
  </section>

  <section class="bg-white/80 p-3 rounded mb-3 border border-slate-200">
    <h2 class="font-bold">Reaktionen:</h2>
    <div
      class="border-0 border-b py-4"
      v-for="item in state.comments"
      v-bind:key="item"
      :id="item"
    >
      <p class="text-sm text-gray-800">
        <strong>{{ item.name }}</strong>
        {{ item.body }}
      </p>
    </div>
  </section>
</template>
