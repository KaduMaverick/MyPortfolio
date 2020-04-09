<template>
  <section class="about">
    <div class="about__container">
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
        <h1>WHO AM I?</h1>
      </div>
      <div class="about__content">
          <div>
        <p>Hello! I'm Kadu, a developer based in Brazil, who enjoys solving problems with tech. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
        <p>Shortly after coming back from China,where I was living and working as a English teacher, I started my learning path into computer science and I developed a passion for building things and solving problems.</p>
          </div>
        <img src="@/assets/img/me-portrait.png" alt="" srcset="">
        <h1 class="title about__title">Arsenal</h1>
        <p>Here are a few technologies I've been working with recently</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  background-color: #070608;
  position: relative;
  height: 100vh;

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

  &__content{
      padding: 9rem 0 0 9rem;
      div{
          display: inline-block;
          max-width: 50rem;
      }
      p{
          display: inline-block;
          margin-bottom: 2rem;
      }

      img{
          display: inline-block;
          float: right;
      }
  }

  &__title{
      margin-top: 20rem;
      text-transform: uppercase;
  }
}
</style>