<template>
  <div>
    <v-parallax :src="require('../assets/yosemite.jpg')" height="1000">
      <v-container fluid>
        <v-row justify="center">
          <v-img :src="require('../assets/indiancreek.png')" max-width="250" max-height="250"/>
        </v-row>
        <v-row justify="center" class="mt-3">
          <v-card outlined width="300">
            <v-card-text justify="center">
              Hi there! My name is Pierce, welcome to my site. Here you'll find some
              interesting pictures, and some projects I've enjoyed, as well as a (very)
              brief summary of my story.
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-parallax>

    <v-container>
      <v-divider class="my-3"/>
      <v-row justify="center">
        <div class="display-3">The Journey</div>
      </v-row>
      <v-divider class="my-3"/>
    </v-container>

    <v-container>
      <v-row align="center" justify="center">
        <div v-for="(journeyCard, index) in journeyCardData" :key="index">
          <v-col>
            <v-card elevation="6" max-width="300">
              <div v-for="(image, index) in journeyCard.images" :key="index">
                <v-img :src="require(`../assets/${image}`)"/>
              </div>
              <v-card-subtitle>
                {{ journeyCard.subtitle }}
              </v-card-subtitle>
              <v-card-text>
                {{ journeyCard.text }}
              </v-card-text>
            </v-card>
          </v-col>
          </div>
      </v-row>
    </v-container>

    <v-container><v-divider /></v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    journeyCardData: [
      {
        images: ['graduate.jpg'],
        subtitle: 'Desk jockey',
        text: `I worked at a desk job for two years
          before realizing I was more at home in the outdoors`,
      },
      {
        images: ['toothbrush.jpg', 'thelanceinptown.jpg'],
        subtitle: 'Dirtbag',
        text: `I hit the road for a year and a half to explore the country
          and pursue my passion for rock climbing, eventually landing in
          Chattanooga, TN.`
      },
      {
        images: ['bean.jpg'],
        subtitle: 'Something in between?',
        text: `Now I live in Denver, CO, while working remotely and trying
          to squeeze in travelling when I can. In pursuit of the balance.`,
      }
    ]
  })
}

</script>
