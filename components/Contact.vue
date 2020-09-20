<template>
  <div class="contact">
    <div class="contact__video">
      <video src="@/assets/video/lofi-bg.webm" autoplay loop muted></video>
    </div>

    <div class="contact__content">
      <h1>Let´s Chat</h1>
      <a class="contact__btn">Contact Me</a>
    </div>
  </div>
</template>

<style lang="scss">
.contact {
  position: relative;
  &__video {
    height: 40vh;
    overflow: hidden;
    position: relative;
    video {
      position: absolute;
      bottom: -100px;
      width: 100%;
    }
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    h1 {
      font-size: 6.4rem;
      font-style: normal;
      font-weight: bold;
      font-family: "InterBold", "36", "Microsoft YaHei New", "Microsoft Yahei",
        "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      color: white;
      margin-bottom: 20px;

      @include respond(phone) {
        font-size: 4.5rem;
      }
    }
  }

  &__btn{
      display: block;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: bold;
      font-style: normal;
      padding: 13px 20px;
      background: white;
      width: fit-content;
      margin: 0 auto;
      cursor: pointer;
      position: relative;
      border-radius: 3px;
      &:hover{
          &:before{
              transform:scale(1.1);
          }
      }
      &:before{
          position: absolute;
          content: "";
          display: block;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background:white;
          z-index: -1;
      }
  }
}
</style>