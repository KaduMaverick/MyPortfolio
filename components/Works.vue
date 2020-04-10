<template>
  <section class="works">
    <img class="works__img-bg" src="@/assets/img/worldmap.png" alt srcset />
    <div class="works__heading">
      <h1 class="title">I’M PROUD OF</h1>
      <svg
        class="works__heading__line"
        width="1500"
        height="4"
        viewBox="0 0 672 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="2" x2="1500" y2="2" stroke="#8CB9B4" stroke-width="4" />
      </svg>
    </div>

    <div class="u-wrapper works__container">
      <div class="works__content">
        <div class="works__content__project" v-for="n in 3" v-bind:key='n'>
          <h1 class="works__title">Tracker</h1>
          <p>Runlet provides an easy to use interface to manage jobs across a fleet of connected devices, including the capability of triggering remote executions and viewing the logs of running jobs in real-time.</p>
          <div class="works__content__project__img">
            <img src="@/assets/img/project-1.png" alt srcset />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {};
</script>


<style lang="scss">
.works {
  min-height: 100vh;
  // width: 100vw;
  overflow: hidden;
  position: relative;
  &__img-bg {
    position: absolute;
  }
  &__container {
    width: 100rem;
    padding: 12rem 0;
    position: relative;
    height: inherit;
  }
  &__heading {
    line-height: 6.7rem;
    text-align: center;
    margin-top: 12rem;
    position: relative;

    &__line {
      position: absolute;
      bottom: 0;
      right: -8%;
    }
  }

  &__content {
    &__project {
      font-size: 2.2rem;
      text-align: center;
    margin-bottom: 12rem;
      &__img {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 4rem;
        filter: grayscale(0.9);
        cursor: pointer;
        transition: all 0.8s  ease;
        img {
          width: 100%;
          transition: all 0.8s  ease;
        }

        &:hover{
            filter: grayscale(0);
            img{
                transform: scale(1.05);
            }
        }
      }
    }
  }
  &__title {
    display: block;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 4.8rem;
  }
}
</style>

