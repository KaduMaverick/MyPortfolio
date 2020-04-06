<template>
  <div class="nav">
    <div
      @click="isMenuShown = !isMenuShown"
      class="nav-btn"
      v-bind:class="[ isMenuShown ? 'nav-btn--active' : '']"
    ></div>
    <div class="nav-bg" v-bind:class="[ isMenuShown ? 'nav-bg--scroll-down' : 'nav-bg--scroll-up']">
      <div v-if="isMenuShown" class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item" data-bg="featured-work-2">
            <a href class="main-nav__link">Projetos</a>
          </li>
          <li class="main-nav__item" data-bg="interactive-web-design">
            <a href class="main-nav__link">Skills</a>
          </li>
          <li class="main-nav__item" @mouseover="changeVideoBg()" data-bg="about-us">
            <a href class="main-nav__link">Sobre</a>
          </li>
          <li class="main-nav__item" data-bg="corporate-identity-branding">
            <nuxt-link to="/contact" class="main-nav__link">Contato</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="video">
        <!-- <video data-src="/pedradosino.mp4" ref="videoSource" autoplay muted loop playsinline></video> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false
    };
  },
  methods: {
    changeVideoBg() {
      // this.$refs.videoSource.src = this.$refs.videoSource.dataset.src;
    }
  },
  mounted() {
    // console.log(this.$refs.videoSource.dataset.src)
  }
};
</script>

<style lang="scss">
// .video {
//   position: absolute;
//   top: 0;
//   width: 100%;
//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     background-color: rgba($color: #000000, $alpha: 0.5);
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 100vw;
//     z-index: 5;
//   }
// }

@keyframes bg-scroll-down {
  from {
    top: -100%;
  }
  to {
    top: 0%;
  }
}
@keyframes bg-scroll-up {
  from {
    top: 0%;
  }
  to {
    top: -100%;
  }
}

.nav {
  position: relative;
}

.nav-btn {
  position: absolute;
  height: 15px;
  width: 20px;
  background: transparent;
  z-index: 100;
  right: 5rem;
  top: 5rem;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    display: block;
    height: 4px;
    width: 20px;
    border-radius: 2px;
    background: #fff;
    position: absolute;
    transition: all 0.3s ease-out;
  }

  &::after {
    top: 0;
  }

  &::before {
    bottom: 0;
  }

  &--active {
    &::after {
      // top: 0;
      background: $primary-color;
      top: 50%;
      transform: translateY(-50%) rotate(-140deg);
    }

    &::before {
      // bottom: 0;
      background: $primary-color;
      bottom: 50%;
      transform: translateY(50%) rotate(140deg);
    }
  }
}
.light .nav-btn {

  &::after,
  &::before {

    background: $light-primary-color;

  }

  &--active {
    &::after {
      // top: 0;
      background: $light-primary-color;
    }
    &::before {
      background: $light-primary-color;
  
    }
  }
}

.nav-bg {
  transform: translateZ(1);
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  left: 0;
  z-index: 2;
  // overflow: hidden;

  &:after {
    content: "";
    display: block;
    height: 1rem;
    width: 100%;
    position: absolute;
    bottom: -1rem;
    background-color: $primary-color;
  }
  &:before {
    content: "";
    display: block;
    height: 4rem;
    width: 100%;
    position: absolute;
    bottom: -5rem;
    z-index: 2;
    background-color: $secondary-color;
  }

  &--scroll-down {
    animation-name: bg-scroll-down;
    animation-duration: 0.71s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    top: 0;
  }
  &--scroll-up {
    animation-name: bg-scroll-up;
    animation-duration: 0.71s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    top: -100%;
    &:after,
    &:before {
      display: none;
    }
  }
}

.light .nav-bg {
  background-color: white;

  &:after {
    background-color: $light-primary-color;
  }
  &:before {
    background-color: $light-secondary-color;
  }

}

@keyframes text-animation {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes expand-underline {
  0% {
    opacity: 0;
    width: 0%;
  }

  100% {
    opacity: 1;
    width: 100%;
  }
}

.main-nav {
  display: block;
  max-width: 1240px;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  &__items {
    text-align: center;
  }
  @for $i from 1 through 10 {
    .main-nav__items .main-nav__item:nth-child(#{$i}) {
      animation-delay: (#{$i * 0.2s});
    }
  }
  &__item {
    opacity: 0;
    display: block;
    width: fit-content;
    margin: 0 auto;
    font-size: 30px;
    animation-name: text-animation;
    animation-duration: 0.9s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    animation-fill-mode: forwards;

    // opacity: 1;
    // transform: translateY(0);
  }

  &__link {
    font-family: "InterBold";
    font-size: 4.8rem;
    font-style: normal;
    font-weight: bold;
    color: $tertiary-color;
    transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 100%;
      background: transparent;
      margin: 0 auto;
    }
    &:hover {
      color: $secondary-color;
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 100%;
        background: $secondary-color;
        animation-name: expand-underline;
        animation-duration: 0.5s;
        animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        animation-fill-mode: forwards;
      }
    }
  }
}

.light .main-nav {
  
  &__item {
  
  }
  &__link {
    color: $light-primary-color;

    &::after {
      background: transparent;

    }
    &:hover {
      color: $light-secondary-color;
      &::after {

        background: $light-secondary-color;
      }
    }
  }
}


@keyframes fade-in-text {
  0% {
    opacity: 0;
    filter: blur(5px);
  }

  50% {
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>