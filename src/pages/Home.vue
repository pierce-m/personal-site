<template>
  <v-carousel cycle height="830">
    <v-carousel-item
      v-for="(image, index) in carouselImages"
      :key="index"
    >
      <v-img :src="require('../assets/' + image)" max-height="830"/>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    carouselImages: [
      'brain.jpg',
      'tensleep.jpg'
    ]
  })
}

</script>
