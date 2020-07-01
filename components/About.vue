<template>
  <section class="about">
    <div class="about__title-box">
      <div class="about__heading">
        <svg
          width="5"
          height="124"
          viewBox="0 0 5 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.99993"
            y1="0.98374"
            x2="2.99993"
            y2="123.984"
            stroke="#8CB9B4"
            stroke-width="4"
          />
        </svg>
        <h1>{{ this.$t('about.heading')}}</h1>
      </div>
    </div>
    <div class="about__container">
      <div class="about__content">
        <div class="about__content__text">
          <p v-html="this.$t('about.first-paragraph')">
            Hello! I'm Kadu, a developer based in Brazil, who enjoys
            <b class="green">solving problems</b> with tech.
            <b class="yellow">I develop exceptional websites and web apps</b> that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.
            
          </p>
          <p v-html="this.$t('about.second-paragraph')">
            Shortly after coming back from China,where I was living and working as a English teacher, I started my learning path into
            <b class="purple" >computer science</b> and I developed a passion for building things and solving problems.
          </p>
        </div>
        <!-- <img src="@/assets/img/me-portrait.png" alt="" srcset=""> -->
        <!-- <Arsenal /> -->
      </div>
    </div>
  </section>
</template>

<script>
import Arsenal from "./Arsenal.vue";
export default {
  components: {
    Arsenal
  }
};
</script>

<style lang="scss">
.about {
  background-color: $background-secondary-color;
  position: relative;
  min-height: 100vh;

  &__container {
    max-width: 100rem;
    margin: 0 auto;
    position: relative;
    height: inherit;
  }
  &__title-box {
    position: absolute;
    max-width: 100rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;

    @include mq(1077px) {
      padding-left: 4rem;
    }
  }
  &__heading {
    line-height: 6.7rem;
    position: sticky;
    left: 0;
    top: 0;
    // transform: rotate(-250deg);
    writing-mode: vertical-rl;
    h1 {
      font-size: 6.4rem;
      font-style: normal;
      font-weight: bold;
      font-family: "InterBold", "36", "Microsoft YaHei New", "Microsoft Yahei",
        "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      color: $secondary-color;
      display: inline-block;

      @include respond(phone){
        font-size: 4.5rem;
      }
    }
  }

  &__content {
    padding: 12rem 0 12rem 9rem;

    @include respond(tab-land) {
      padding: 12rem 9rem 12rem 9rem;
    }

    @include mq(1077px) {
      padding: 12rem 9rem 12rem 13rem;
    }

    @include respond(phone) {
      padding: 12rem 6rem 12rem 12rem;
    }
    &__text {
      display: inline-block;
      font-size: 2.8rem;
      line-height: 4rem;
      text-align: center;

      @include respond(phone){
        font-size: 2rem;
        line-height: 3.2rem;
      }
    }
    p {
      //   display: inline-block;
      margin-bottom: 3rem;
      color: $primary-color;
    }

    img {
      display: inline-block;
      float: right;
    }
  }
}

.light .about {
  background-color: $light-background-secondary-color;

  &__heading {
    h1 {
      color: $light-secondary-color;
    }
  }

  &__content {
    p {
      color: $light-primary-color;
    }
  }
}
</style>