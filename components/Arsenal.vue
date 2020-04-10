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
    color: $secondary-color;
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
      color: $primary-color;
      text-align: right;
      padding: 0.8rem 0.8rem;
      text-transform: uppercase;
      border-right: 2px solid $primary-color;
      cursor: pointer;
      &:hover {
        border-right: 2px solid $secondary-color;
        color: $secondary-color;
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
      color: $primary-color;
      text-align: left;
      padding: 0.5rem;

      &:before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: $secondary-color;
        margin-right: 1rem;
      }
    }
  }
}

.light .arsenal {
  &__title {
    color: $light-secondary-color;
  }
  &__menu {
    li {
      color: $light-primary-color;
      border-right: 2px solid $light-primary-color;

      &:hover {
        border-right: 2px solid $light-secondary-color;
        color: $light-secondary-color;
      }
    }
  }
  &__list {
    li {
      color: $light-primary-color;

      &:before {
        background: $light-secondary-color;
      }
    }
  }
}
</style>