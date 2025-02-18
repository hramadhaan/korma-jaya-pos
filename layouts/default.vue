<template>
  <div class="flex min-h-screen w-full flex-col">
    <Sidebar />
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <MoleculesNavbar />
      <slot />
    </div>
  </div>
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import Sidebar from "~/components/molecules/sidebar.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

// import Sidebar from '../components/sidebar.vue'
</script>

<style></style>
