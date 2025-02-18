<template>
  <div class="w-ful h-screen flex items-center justify-center">
    <span>Logging out...</span>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "authentication",
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: "/authentication/validate",
  },
});

const { signOut } = useAuth();

onMounted(() => {
  signOut();
});
</script>

<style></style>
