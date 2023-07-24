<template>
  <v-app>
    <div>
      <template>
        <v-file-input
          show-size
          label="File input"
          @change="click"
        ></v-file-input>
      </template>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["click"]),
  },
};
</script>
