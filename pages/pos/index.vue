<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import { Settings2Icon, ShoppingCartIcon } from "lucide-vue-next";
import { useGetCategories } from "@/composables/useCategories";
import { useGetProducts } from "@/composables/useProducts";
import { SheetCore } from "@/components/atoms";
import { ProductCard } from "@/components/molecules";

interface ListOfCategory {
  id: number;
  name: string;
}
const router = useRouter();
const { query } = useRoute();

const { data, isLoading, error } = useGetCategories();

const listOfCategories = computed<ListOfCategory[]>(() => {
  const dataTemp = [{ id: 0, name: "Semua" }];
  if (data.value && data.value?.length > 0) {
    data.value.forEach((item: ListOfCategory) => {
      dataTemp.push({
        id: item.id,
        name: item.name,
      });
    });
  }
  return dataTemp;
});

const selectedCategory = ref<number>(listOfCategories.value[0].id);

const {
  data: dataProducts,
  isLoading: isLoadingProducts,
  error: errorProducts,
  refetch: refetchProducts,
} = useGetProducts();
const store = useMyCartsStore();

const isOpen = ref(false);

const listOfCart = computed(() => {
  return store.carts;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const handleSelectedCategory = (id: number) => {
  router
    .push({
      path: "/pos",
      query: {
        category: id !== 0 ? id : undefined,
      },
    })
    .then(() => {
      selectedCategory.value = id;
      refetchProducts();
    });
};

onMounted(() => {
  if (query.category) {
    selectedCategory.value = Number(query.category);
  }
});
</script>

<template>
  <div class="w-full px-4 sm:px-6 flex flex-col h-screen">
    <!-- Navbar -->
    <div
      class="flex flex-row-items-center justify-between flex-grow-0 w-full sm:my-4 my-2"
    >
      <div class="flex flex-row-items-center flex-1 sm:gap-x-4 gap-x-2">
        <Input placeholder="Cari Produk" class="sm:w-4/12 w-7/12" />
        <!-- <Button>Cari</Button> -->
        <Button variant="outline" size="icon">
          <Settings2Icon class="size-5" />
        </Button>
      </div>
      <div>
        <Button @click="toggle" variant="outline" size="sm"
          ><ShoppingCartIcon /><Badge v-show="listOfCart.length > 0"
            ><span class="text-xs font-light">{{
              listOfCart.length
            }}</span></Badge
          ></Button
        >
        <SheetCore :open="isOpen" @update="toggle" title="Keranjang">
          <template #content>
            <div class="flex flex-col">
              <p v-for="(item, index) in listOfCart" :key="index">
                {{ item.name }}
              </p>
            </div>
          </template>
        </SheetCore>
      </div>
    </div>
    <!-- End Navbar -->
    <!-- Categories -->
    <div class="sm:py-2 py-0">
      <div
        class="flex flex-row items-center sm:gap-x-3 gap-x-1 overflow-x-auto"
      >
        <!-- <Button variant="outline">Semua</Button> -->
        <Button
          v-for="category in listOfCategories"
          :key="category.id"
          :variant="selectedCategory === category.id ? 'default' : 'outline'"
          size="sm"
          @click="handleSelectedCategory(category.id)"
          >{{ category.name }}</Button
        >
      </div>
    </div>
    <div class="h-full sm:mt-8 mt-4">
      <div class="grid sm:grid-cols-6 grid-cols-2 sm:gap-4 gap-2">
        <!-- Product Card -->
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<style></style>
