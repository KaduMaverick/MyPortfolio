<template>
  <section class="works">
    <div class="works__heading">
      <h1 class="title works__title">I’M PROUD OF</h1>
    </div>

    <div class="u-wrapper works__container">
      <div class="works__content">
        <div class="works__content__project">
          <h1 class="works__content__project__title">Tracker</h1>
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
  &__title {
    color: $secondary-color;
  }
  &__img-bg {
    position: absolute;
  }
  &__container {
    max-width: 100rem;
    padding: 12rem 0;
    position: relative;
    height: inherit;

    @include mq(1099px){
      padding: 0 7rem;
    }
  }
  &__heading {
    line-height: 6.7rem;
    text-align: center;
    margin-top: 12rem;
    position: relative;
  }

  &__content {
    &__project {
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 12rem;
      &__title {
        display: block;
        text-align: center;
        font-size: 5rem;
        font-weight: bold;
        color: $tertiary-color;
        margin-bottom: 4.8rem;
      }
      p {
        color: $primary-color;
      }
      &__img {
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 4rem;
        filter: grayscale(0.9);
        cursor: pointer;
        transition: all 0.8s ease;
        img {
          width: 100%;
          transition: all 0.8s ease;
        }

        &:hover {
          filter: grayscale(0);
          img {
            transform: scale(1.05);
          }
        }
      }
    }
  }
}

.light .works {
  &__title {
    color: $light-secondary-color;
  }

  &__content {
    &__project {
      p{
        color: $light-primary-color;
      }
      &__title {
        color: $light-tertiary-color;
      }
    }
  }
}
</style>

