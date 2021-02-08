<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <page-footer />
  </div>
</template>
<script>
import navbar from './components/Navbar'
import pageFooter from './components/Footer'
export default {
  components: {
    navbar,
    pageFooter
  }
}
</script>
<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
</style>
