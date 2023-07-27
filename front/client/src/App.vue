<template>
  <v-app>
    <div>
      <v-file-input
        show-size
        label="File input"
        @change="click"
      />
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions(['click']),
  },
};
</script>
