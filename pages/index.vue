<template>
  <div>
    <Header/>
    <About/>
    <!-- <Works/>
    <Projects/> -->
    <!-- <Archive/> -->
    <!-- <Contact/>  -->
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import About from "~/components/About.vue";
import Works from "~/components/Works.vue";
import Projects from "~/components/Projects.vue";
import Archive from "~/components/Archive.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Header,
    About,
    Works,
    Projects,
    Archive,
Contact
  },
  data() {
    return { story: { content: {} } };
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";

    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/`, {
        version: version,
        start_with: "archive/"
      })
      .then(res => {
        
        return { projects: res.data.stories };
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      });
  }
};
</script>

<style lang="scss">
</style>