<template>
  <div class="home">
    <carousel :perPage="1">
      <slide style="height: 90vh"> Slide 1 Content </slide>
      <slide style="height: 90vh"> Slide 2 Content </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
  },
};
</script>
