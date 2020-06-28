<template>
  <section class="archive">
    <div class="u-wrapper archive__container">
      <div class="archive__heading">
        <h1 class="title">Archive</h1>
        <svg
          class="archive__heading__line"
          width="672"
          height="4"
          viewBox="0 0 672 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="2" x2="672" y2="2" stroke="#8CB9B4" stroke-width="4" />
        </svg>
      </div>

      <div class="archive__content">
        <p>Here are projects that I’ve worked in</p>
        <table>
          <thead>
            <tr>
              <th>YEAR</th>
              <th>PROJECT</th>
              <th>MADE AT</th>
              <th>TECH</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.title" @click="goTo(project.content.link)">
              <th class="year">{{ project.content.year }}</th>
              <th>{{ project.content.project }}</th>
              <th>{{ project.content.made_at }}</th>
              <th>{{ project.content.tech }}</th>
            </tr>            
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: ['projects'],
  methods: {
    goTo(url) {
      url = 'https://' + url
      window.open(url,'_blank');
    }
  }
}
</script>


<style lang="scss">
.archive {
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
    text-align: left;
    // margin-top: 12rem;
    position: relative;

    &__line {
      display: block;
    }
  }

  &__content {
    font-size: 2.2rem;
    p {
      text-align: right;
    }

    table {
      color: $primary-color;
      width: 100%;
      border-collapse: collapse;
      margin-top: 10rem;
      th {
        padding: 10px 20px;
        text-align: left;
      }
      .year {
        color: $secondary-color;
      }
      thead {
        font-family: Istok Web;
        font-style: normal;
        font-weight: bold;
        font-size: 2.2rem;
        line-height: 2.9rem;
        color: $tertiary-color;
        text-transform: uppercase;
        // border-bottom: 2px solid rgba(255, 255, 255, 0.35);
      }

      tbody {
        font-family: "Istok Web", "Microsoft YaHei New", "Microsoft Yahei",
          "微软雅黑", 宋体, SimSun, STXihei, "华文细黑";
        font-family: Istok Web;
        font-style: normal;
        font-weight: lighter;
        font-size: 1.8rem;
        line-height: 2.6rem;
        tr {
          cursor: pointer;
          &:hover {
            background: $background-secondary-color;
          }
        }
      }
    }
  }
}

.light .archive {
  &__content {
    table {
      color: $light-primary-color;
      .year {
        color: $light-secondary-color;
      }
      thead {
        color: $light-tertiary-color;
      }
      tbody {
        tr {
          &:hover {
            background: $light-background-secondary-color;
          }
        }
      }
    }
  }
}
</style>

