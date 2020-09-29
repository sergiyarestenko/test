<template>
  <div id="app">
    <app-header/>
    <app-table/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader'
import AppTable from './components/AppTable/AppTable'
import AppFooter from './components/AppFooter/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTable,
    AppFooter

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
div, header, footer, main {
  display: flex;
}


</style>
