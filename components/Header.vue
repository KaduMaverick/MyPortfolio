<template>
  <section class="home">
    <div class="u-wrapper home__flex">
      <h4 class="home__name">Kadu Maverick</h4>
      <div class="home__heading">
        <h3>{{ this.$t('home.greeting') }}</h3>
        <h1 class="home__heading__title">{{ this.$t('home.heading') }}</h1>
        <h1 class="home__heading__sub-title">{{ this.$t('home.subHeading') }}</h1>
        <div class="home__heading__paragraph">{{ this.$t('home.paragraph') }}</div>
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
  font-family: $font-family;
  // background: url('../assets/img/me.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 60%;
  height: 100vh;
  margin: 0 10rem;

  @include respond(phone) {
    margin: 0 6rem;
  }

  &__flex {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    @include respond(phone){
      align-items: flex-end;
    }
  }

  &__name {
    position: absolute;
    top: 6.3rem;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.2rem;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    color: $primary-color;
  }

  &__heading {
    font-family: $font-family;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: bold;
    // position: absolute;
    top: 22.6rem;

    @include respond(phone) {
      font-size: 2.2rem;
      margin-bottom: 25vh;
    }

    h3 {
      font-family: $font-family-2, $font-family;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      line-height: 2.6rem;
      color: $tertiary-color;
    }

    &__title {
      line-height: 6.7rem;
      color: #ffffff;
      font-size: 7.4rem;

      @include respond(phone) {
        line-height: 4rem;
        font-size: 4.5rem;
      }

    }

    &__sub-title {
      font-family: $font-family;
      color: $secondary-color;
      line-height: 6.7rem;
      margin-top: 2rem;

      @include respond(phone) {
        line-height: 3rem;
        margin-top: 1rem;
        font-size: 3.5rem;
        letter-spacing: -1px;
      }

    }

    &__paragraph {
      font-family: "InterRegular", $font-family-chinese;
      font-style: normal;
      font-weight: normal;
      font-size: 2.8rem;
      line-height: 4rem;
      color: #ffffff;
      margin-top: 7.2rem;

      @include respond(phone) {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-top: 2rem;
      }
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