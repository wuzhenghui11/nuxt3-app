<template>
  个人
</template>
<script setup>
  definePageMeta({
    middleware: 'profile',
    // validate: async function () {
    //   const nuxtApp = useNuxtApp()
    //   // Check if the id is made up of digits
    //   return /^\d+$/.test(route.params.id)
    // }
  })
  const aa = ref(1)
</script>