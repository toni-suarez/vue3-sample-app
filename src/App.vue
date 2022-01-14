<script setup>
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import Card from "./components/Card.vue";
</script>

<template>
  <section class="w-screen h-full bg-slate-100">
    <Header />
    <div
      class="flex flex-col md:flex-row px-4 py-5 max-w-[1440px] m-auto h-full"
    >
      <div class="w-[200px] mt-24 hidden lg:block">
        <div class="flex flex-col space-y-2 sticky top-24">
          <router-link to="/" active-class="font-bold" class="text-lg">
            Startseite
          </router-link>
          <router-link to="/news" active-class="font-bold" class="text-lg">
            News
          </router-link>
        </div>
      </div>
      <div class="w-full md:px-10">
        <router-view />
      </div>
      <div class="w-[400px] hidden lg:block">
        <div class="flex flex-col space-y-2 sticky top-12">
          <Card :id="1" />
          <Card :id="2" />
          <Card :id="3" />
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>
