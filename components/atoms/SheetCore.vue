<script lang="ts" setup>
const { title, open, description } = defineProps([
  "title",
  "open",
  "description",
]);
const emits = defineEmits(["update"]);
</script>

<template>
  <Sheet :open="open" @update:open="emits('update')">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>{{ title }}</SheetTitle>
        <SheetDescription>{{ description }}</SheetDescription>
      </SheetHeader>
      <slot name="content"></slot>
    </SheetContent>
  </Sheet>
</template>
