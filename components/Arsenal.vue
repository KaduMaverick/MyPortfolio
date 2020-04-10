<template>
  <div class="arsenal">
    <h1 class="title arsenal__title">Arsenal</h1>
    <p class="arsenal__sub-title">Here are a few technologies I've been working with recently</p>
    <div class="arsenal__box">
      <div class="arsenal__col-1">
        <ul class="arsenal__menu">
          <li>Knowledge</li>
          <li>Skills</li>
          <li>Tools</li>
        </ul>
      </div>
      <div class="arsenal__col-2">
        <ul class="arsenal__list">
          <li>Knowledge</li>
          <li>Skills</li>
          <li>Tools</li>
          <li>Knowledge</li>
          <li>Skills</li>
          <li>Tools</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.arsenal {
  &__title {
    margin-top: 15rem;
    text-transform: uppercase;
  }

  &__sub-title {
      font-size: 1.8rem;
    margin-left: 22rem;
    margin-top: -2rem;
  }

  &__box {
    display: flex;
  }

  //   &__col-1 {
  //     display: inline-block;
  //   }
    &__col-2 {
      display: inline-block;
      padding: 0 2rem;
    }

  &__menu {
    li {
      list-style: none;
      font-family: "Istok Web", "Microsoft YaHei New", "Microsoft Yahei",
        "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      font-style: normal;
      font-weight: normal;
      font-size: 1.3rem;
      color: white;
      text-align: right;
      padding: 0.8rem 0.8rem;
      text-transform: uppercase;
      border-right: 2px solid white;
      cursor: pointer;
      &:hover{
          border-right: 2px solid #8cb9b4;
          color: #8cb9b4;
      }
    }
  }
  &__list {
      display: inline-block;
   
    li {
      list-style: none;
      font-family: "Istok Web", "Microsoft YaHei New", "Microsoft Yahei",
        "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
      font-style: normal;
      font-weight: normal;
      font-size: 1.3rem;
      color: white;
      text-align: left;
      padding: 0.5rem;

      &:before{
          content: "";
          display: inline-block;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: #8cb9b4;
          margin-right: 1rem;
      }
    }
  }
}
</style>