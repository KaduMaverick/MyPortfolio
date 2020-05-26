<template>
  <div class="arsenal">
    <h1 class="title arsenal__title">Arsenal</h1>
    <p class="arsenal__sub-title">Here are a few technologies I've been working with recently</p>
    <div class="arsenal__box">
      <div class="arsenal__col-1">
        <ul class="arsenal__menu" >
          <li v-for="(item, index) in arsenalOptions" :key="index" v-html="item" v-bind:class="currentOption === item ? 'active' : ''" @click="changeOption(item)"></li>
        </ul>
      </div>
      <div class="arsenal__col-2">
        <ul class="arsenal__list">
        <transition name="fade" v-for="(item, index) in arsenalData[currentOption]" v-bind:key="index">
          <li  v-html="item">
          </li>
        </transition>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      currentOption: null,
      arsenalOptions: this.$t('arsenal.arsenalOptions'),
      arsenalData: this.$t('arsenal.arsenalData'),
    }
  },
  created(){
    this.currentOption = this.arsenalOptions[0] 
    // console.log(this.i18n.locale)
  },
  methods: {
    changeOption(value){
      this.currentOption = value
    }
  },
  computed: {
    getCurrentLocale() {
      return this.$store.state.currentLocale
    }
  },
  watch: {
    getCurrentLocale(newLocale, oldLocale) {
      this.arsenalOptions = this.$t('arsenal.arsenalOptions')
      this.arsenalData = this.$t('arsenal.arsenalData')
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
    width: 100%;
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
      &:hover , &.active {
        border-right: 2px solid $secondary-color;
        color: $secondary-color;
      }
    }
  }
  &__list {
      display: flex;
      flex-wrap: wrap;
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
      margin-right: 2rem;
      width: 25%;
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

      &:hover , &.active {
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