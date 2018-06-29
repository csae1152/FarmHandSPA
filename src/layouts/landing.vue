<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          FarmHands
        </q-toolbar-title>
      </q-toolbar>
      <nav-tabs v-if="$q.theme === 'mat'" />
    </q-layout-header>
    <q-page-container>
      <q-fab
  color="purple"
  icon="keyboard_arrow_up"
  direction="up"
>
  <q-fab-action
    color="primary"
    @click="someMethod"
    icon="mail"
  />
  <q-fab-action
    color="secondary"
    @click="someMethod"
    icon="alarm"
  />
</q-fab>
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
      <q-toolbar-title>
         @Helmut Steiner
      </q-toolbar-title>
     </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
