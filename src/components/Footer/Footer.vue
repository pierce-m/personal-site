<template>
  <v-footer :app="app">
    <v-spacer />
    <v-btn
      icon
      :href="EXTERNAL_URLS.LINKEDIN"
    >
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
import { EXTERNAL_URLS } from '../../utils/constants.js'

export default {
  name: "Footer",
  props: ['app'],
  data: () => ({
    EXTERNAL_URLS: EXTERNAL_URLS
  })
}
</script>
