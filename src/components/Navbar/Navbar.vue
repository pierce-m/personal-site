<template>
  <v-app-bar :app="app">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            v-on="on"
          >
            Projects
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in projects"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer />

      <v-toolbar-items>
        <v-btn text to="/">
          Home
        </v-btn>
        <v-btn text to="/about">
          About
        </v-btn>
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
  data: () => {
    return {
      projects: [
        { title: "The Buzz" }
      ],
      EXTERNAL_URLS: EXTERNAL_URLS
    }
  }
}
</script>
