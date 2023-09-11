<template>
  <div>
    <TopNav></TopNav>
    首页
  </div>
</template>
<script setup>
  const router = useRouter()
  const runtimeConfig = useRuntimeConfig()
  console.log(runtimeConfig)

  const appConfig = useAppConfig()
  console.log(appConfig)

  function onBtnClick () {
    router.push({ path: '/about' })
  }
</script>
