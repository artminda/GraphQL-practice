<template>
  <div>
    <v-navigation-drawer
      :clipped="drawer.clipped"
      :fixed="drawer.fixed"
      :mini-variant="drawer.mini"
      v-model="drawer.open"
      app
    >
      <v-list>
        <v-list-tile @click="toggleMiniDrawer" avatar>
          <v-list-tile-avatar>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQFM3ujCogBNJw/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=uGy0p7yxSCflKlYLYahP6Yse3H2nrmmWQigxlLLxxaE"
            >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Eldin Zaimovic</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="https://github.com/EldinZaimovic" target="_blank">
          <v-list-tile-action>
            <v-icon large>fab fa-github</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Github</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="https://www.linkedin.com/in/eldin-zaimovic" target="_blank">
          <v-list-tile-action>
            <v-icon large>fab fa-linkedin</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>LinkedIn</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile href="https://www.xing.com/profile/Eldin_Zaimovic?sc_o=mxb_p" target="_blank">
          <v-list-tile-action>
            <v-icon large>fab fa-xing-square</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Xing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      :fixed="toolbar.fixed"
      :clipped-left="toolbar.clippedLeft"
      scroll-off-screen
      dark
    >
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>

      <v-toolbar-items>
        <v-btn class="headline" to="/" flat>
          <span>Snow</span>
          <span class="font-weight-light">Ball</span>
        </v-btn>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expand: false,

      drawer: {
        // sets the open status of the drawer
        open: false,
        // sets if the drawer is shown above (false) or below (true) the toolbar
        clipped: true,
        // sets if the drawer is CSS positioned as 'fixed'
        fixed: false,
        // sets if the drawer remains visible all the time (true) or not (false)
        permanent: true,
        // sets the drawer to the mini variant, showing only icons, of itself (true)
        // or showing the full drawer (false)
        mini: true
      },
      toolbar: {
        //
        fixed: true,
        // sets if the toolbar contents is leaving space for drawer (false) or not (true)
        clippedLeft: true
      }
    };
  },

  methods: {
    // toggles the drawer variant (mini/full)
    toggleMiniDrawer() {
      this.drawer.mini = !this.drawer.mini;
    },
    // toggles the drawer type (permanent vs temporary) or shows/hides the drawer
    toggleDrawer() {
      this.drawer.permanent = false;
      if (this.drawer.permanent) {
        this.drawer.permanent = !this.drawer.permanent;
        // set the clipped state of the drawer and toolbar
        this.drawer.clipped = true;
        this.toolbar.clippedLeft = true;
      } else {
        // normal drawer
        this.drawer.open = !this.drawer.open;
      }
    }
  }
};
</script>


<style>
</style>