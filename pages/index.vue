<template>
  <div>
    <Header/>
    <About/>
    <Works/>
    <Projects/>
    <Archive/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Works from '~/components/Works.vue';
import Projects from '~/components/Projects.vue';
import Archive from '~/components/Archive.vue';

export default {
  components: {
    Header,
    About,
    Works,
    Projects,
    Archive
  }
  
}
</script>

<style lang="scss">
  
</style>