<template>
  <div v-on:click="switchMode()" class="theme-switch">
    <div
      class="switch"
      v-bind:class="currentThemeMode === 'light' ? 'switch--light-mode' : 'switch--dark-mode'"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentThemeMode: this.$store.state.mode
    };
  },
  methods: {
    switchMode() {
      if (this.currentThemeMode == "light") {
        this.$store.state.mode = "dark";
        this.currentThemeMode = "dark";
        document.body.classList.remove("light-theme");
      } else {
        this.$store.state.mode = "light";
        this.currentThemeMode = "light";
        document.body.classList.add("light-theme");
      }

      console.log(this.$store.state.mode);
    }
  }
};
</script>

<style lang="scss">
.theme-switch {
  --background: #fff;
  --text: #adadad;
  color: var(--text);
  width: 5rem;
  height: 2.5rem;
  background: $secondary-color;
  border-radius: 50px;
  position: absolute;
  z-index: 1000;
  top: 5rem;
  left: 5rem;
  cursor: pointer;

  @include respond(phone){
    left: 3rem;
  }
  

  .switch {
    background: #ffffff;
    width: 2rem;
    height: 2rem;
    background: #ffffff;
    border-radius: 100%;
    position: absolute;
    top: 3px;
    transition: 0.5s all ease;
    &--light-mode {
      right: 4px;
    }
    &--dark-mode {
      left: 4px;
    }
  }
}

.light .theme-switch{
background: $light-secondary-color;
  
}
</style>