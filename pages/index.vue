<template>
  <section class="home">
    <div class="u-wrapper">
      <h4 class="home__name">Maycon Douglas</h4>
      <div class="home__heading">
        <h3>{{ this.$t('home.greeting') }}</h3>
        <h1 class="home__heading__title">{{ this.$t('home.heading') }}</h1>
        <h1 class="home__heading__sub-title">{{ this.$t('home.subHeading') }}</h1>
        <div class="home__heading__paragraph">
          {{ this.$t('home.paragraph') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">

.home {
  color: $primary-color;
  font-family: "InterRegular";

  &__name {
    position: absolute;
    margin-top: 6.3rem;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.2rem;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    color: $primary-color;
  }
  &__heading {
    font-family: "InterBold";
    font-size: 4.8rem;
    font-style: normal;
    font-weight: bold;
    position: absolute;
    top: 22.6rem;

    h3 {
      font-family: "Istok Web";
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2.6rem;
      color: $tertiary-color;
    }

    &__title {
      line-height: 5.7rem;
      color: #ffffff;
    }

    &__sub-title {
      color: $secondary-color;
    }

    &__paragraph {
      font-family: "InterRegular";
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 22px;
      color: #ffffff;
      max-width: 44.2rem;
      margin-top: 7.2rem;
    }
  }
}

.light .home {
  color: white;

  &__name {
  color: $light-primary-color;
  }
  &__heading {
  

    h3 {
      color: $light-primary-color;
    }

    &__title {
  
      color: $light-primary-color;
    }

    &__sub-title {
      color: $light-secondary-color;
    }

    &__paragraph {
      color: $light-tertiary-color;
  
    }
  }
}
</style>

Deal with the language
{{ this.$t("title") }}

Change Dark Mode
<h1>{{ this.$store.state.message }}</h1>