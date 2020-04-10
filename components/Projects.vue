<template>
  <section class="projects">
    <div class="projects__container">
      <div class="projects__heading">
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
        <h1>PROJECTS</h1>
      </div>
      <div class="projects__content">
        <div class="projects__card" v-for="n in 6" v-bind:key="n">
          <h5>Building a Headless Mobile App CMS From Scratch</h5>
          <p>R Project for my Data Science class at Northeastern to analyze the top Spotify tracks of 2017 and their audio features.R Project for my Data Science class at Northeastern to analyze the top Spotify tracks of 2017 and their audio features.</p>
          <div class="projects__card__tag">
            <span>Vuejs</span>
            <span>Express</span>
            <span>MongoDb</span>
          </div>
        </div>
        <!-- <img src="@/assets/img/me-portrait.png" alt="" srcset=""> -->
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.projects {
  background-color: #070608;
  position: relative;
  min-height: 100vh;

  &__container {
    width: 100rem;
    margin: 0 auto;
    position: relative;
    height: inherit;
  }
  &__heading {
    line-height: 6.7rem;
    position: absolute;
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
      color: #8cb9b4;
      display: inline-block;
    }
  }

  &__content {
    padding: 12rem 0 12rem 9rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__card {
    height: 27rem;
    width: 27rem;
    // border: 3px solid firebrick;
    background: #110f15;
    margin-bottom: 4rem;
    padding: 2rem;
    position: relative;
    h5 {
      font-family: Istok Web;
      font-style: normal;
      font-weight: bold;
      font-size: 1.7rem;
      line-height: 20px;
      color: #ffffff;
      height: 7rem;
    }

    p {
      font-family: Istok Web;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      color: #ffffff;
    }

    &__tag {
      writing-mode: vertical-rl;
      position: absolute;
      right: -20px;
      top: 0;
      span {
        font-family: Istok Web;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        margin: 0.3rem 0;
      }
    }
  }
}
</style>