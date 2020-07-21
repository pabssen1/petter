<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
export default {
  components: {
    Header: () => import("./components/Header")
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");
body {
  font-family: "Raleway", sans-serif;
}
</style>
