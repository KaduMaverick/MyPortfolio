<template>
  <div class="idioms">
    <ul class="idioms__list">
      <li
        v-on:click="changeLocale('en')"
        v-bind:class="currentLanguage == 'en' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >EN</li>
      <li
        v-on:click="changeLocale('pt')"
        v-bind:class="currentLanguage == 'pt' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >PT</li>
      <li
        v-on:click="changeLocale('es')"
        v-bind:class="currentLanguage == 'es' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >ES</li>
      <li
        v-on:click="changeLocale('zncn')"
        v-bind:class="currentLanguage == 'zncn' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >中文</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: "en"
    };
  },
  methods: {
    changeLocale(locale) {
      //   i18n.locale = locale;
      this.$i18n.locale = locale;
      this.$store.state.currentLocale = locale; 
      this.currentLanguage = locale;
    }
  }
};
</script>

<style lang="scss">
.idioms {
  position: fixed;
  bottom: 6rem;
  left: 6rem;
  z-index: 1000;
  &:after {
    content: "";
    display: block;
    height: 6rem;
    width: 2px;
    position: absolute;
    left: 50%;
    bottom: -7rem;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.35);
  }

  @include respond(tab-land){
    left: 2rem;
  }
  &__list {
    text-align: center;
  }
  &__items {
    font-family: "InterRegular";
    color: rgba(255, 255, 255, 0.35);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 2.5rem;
    cursor: pointer;
    &--active,
    &:hover {
      color: #fff;
    }
  }
}

.light .idioms {
  &:after {
    background-color: $light-primary-color;
  }
  &__list {
  }
  &__items {
    color: $light-primary-color;
    &--active,
    &:hover {
      color: $light-secondary-color;
    }
  }
}
</style>