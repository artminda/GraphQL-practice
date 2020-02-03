<template>
  <v-footer :clipped-left="footer.clippedLeft" dark>
    <span class="caption mx-3">&copy; 2019, Eldin Zaimovic</span>
    <v-spacer></v-spacer>
    <span class="caption mx-3">SnowBall Coding Challenge</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        // sets if the footer is full width (true) or gives space to the drawer (false)
        clippedLeft: true
      }
    };
  }
};
</script>

<style scoped>
</style>