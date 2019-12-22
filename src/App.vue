<template>
  <v-app>
    <Navbar app/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer app/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
};
</script>
