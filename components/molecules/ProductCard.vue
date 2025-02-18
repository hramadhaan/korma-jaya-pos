<template>
  <div class="rounded-md p-2 border flex flex-col items-start">
    <img
      src="https://cdn.dribbble.com/userupload/3571004/file/original-cd5efe3fbbc6fbf0dfe14de04c9657e4.png"
    />
    <div class="mt-4 space-y-2">
      <p class="text-base font-semibold">Product Name</p>
      <p class="text-xs font-medium">Rp. 10.000</p>
    </div>
    <div class="mt-4 w-full">
      <Button class="w-full" @click="addToCart"
        ><ShoppingCartIcon /> Tambah</Button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ShoppingCartIcon } from "lucide-vue-next";
const { data } = defineProps(["data"]);

const store = useMyCartsStore();

const addToCart = () => {
  store.addCart({
    id: Math.round(100 * Math.random()),
    name: "Hanif Ramadhan",
  });
};
</script>

<style></style>
