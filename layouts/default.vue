<template>
  <div :class="this.$store.state.mode">
    <Navigation />
    <nuxt/>
    <Idioms />
    <Social />
    <ThemeSwitch />
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import Idioms from '~/components/Idioms.vue';
import Social from '~/components/Social.vue';
import ThemeSwitch from '~/components/ThemeSwitch.vue';
export default {
  components: {
    Idioms,
    Social,
    ThemeSwitch,
    Navigation
  }
}
</script>

<style lang="scss">
// @import url("../assets/scss/reset.scss");
// @import url("../assets/scss/variables.scss");

@import url('https://fonts.googleapis.com/css?family=Istok+Web&display=swap');

@font-face {
  font-family: "InterRegular";
  src: url("../assets/fonts/inter/Inter-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "InterBold";
  src: url("../assets/fonts/inter/Inter-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "TitlingGothicFBComp-Stand";
  src: url("../assets/fonts/titlinggothicfb/TitlingGothicFBComp-Stand.otf") format("otf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "36";
  src: url("../assets/fonts/36.ttf") format("truetype");
  
}

html {
  font-family: "InterRegular", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #000;
}

body.light-theme{
  background-color: #fff;
}

.u-wrapper {
  max-width: 100rem;
  margin: 0 auto;
}

p{
  font-family: "InterRegular", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #ffffff;
}


.title{
  font-size: 6.4rem;
      font-style: normal;
      font-weight: bold;
      font-family: "InterBold", "36", "Microsoft YaHei New", "Microsoft Yahei",
        "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      color: #8cb9b4;
      display: inline-block;
}


</style>