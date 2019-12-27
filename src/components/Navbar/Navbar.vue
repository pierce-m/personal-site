<template>
  <v-app-bar :app="app">
    <v-btn text to="/">
      home
    </v-btn>
    <v-btn text to="/about">
      about
    </v-btn>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        icon
        :href="EXTERNAL_URLS.LINKEDIN"
        color="#0077b5"
      >
        <v-icon large>mdi-linkedin-box</v-icon>
      </v-btn>
      <v-btn
        icon
        :href="EXTERNAL_URLS.GITHUB"
        color="black"
      >
        <v-icon large>mdi-github-circle</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { EXTERNAL_URLS } from '../../utils/constants.js'

export default {
  name: "navbar",
  props: ['app'],
  data: () => ({
    EXTERNAL_URLS: EXTERNAL_URLS
  })
}
</script>
