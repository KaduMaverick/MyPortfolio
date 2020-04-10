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
  font-family: "InterRegular","Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
  background: url('../assets/img/me.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 60%;
  height: 100vh;
  margin: 0 10rem;

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
    font-family: "InterBold","Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
    font-size: 4.8rem;
    font-style: normal;
    font-weight: bold;
    position: absolute;
    top: 22.6rem;
    width: 67%;

    h3 {
      font-family: "Istok Web", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
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
    }

    &__sub-title {
      font-family: "InterBold",'36',"Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      color: $secondary-color;
      width: 54%;
    line-height: 6.7rem;
    margin-top: 2rem;
    }

    &__paragraph {
      font-family: "InterRegular", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      font-style: normal;
      font-weight: normal;
      // font-size: 1.8rem;
      font-size: 2.8rem;
      // line-height: 22px;
      line-height: 4rem;
      color: #ffffff;
      // max-width: 44.2rem;
          max-width: 60rem;
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