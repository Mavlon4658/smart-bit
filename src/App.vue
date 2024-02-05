<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<template>
  <div class="w-full overflow-hidden">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
