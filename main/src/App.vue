<template>
  <v-app>
    <v-main>
      <v-toolbar dense>
        <v-btn to="/">
          main
        </v-btn>

        <v-btn to="/card1">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn to="/card2">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-toolbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
