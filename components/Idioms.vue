<template>
  <div class="idioms">
    <ul class="idioms__list">
      <li
        v-on:click="changeLocale('en')"
        v-bind:class="currentLanguage == 'en' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >EN</li>
      <li
        v-on:click="changeLocale('fr')"
        v-bind:class="currentLanguage == 'fr' ?  'idioms__items--active' : ''"
        class="idioms__items"
      >FR</li>
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
      console.log("entrei");
      //   i18n.locale = locale;
      this.$i18n.locale = locale;
      this.currentLanguage = locale;
    }
  }
};
</script>

<style lang="scss">
.idioms {
  position: absolute;
  bottom: 6rem;
  left: 6rem;
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