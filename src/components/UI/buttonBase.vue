<template>
  <button class="btn" @click="sendData" :disabled="dataStatus">
    <span v-if="!dataStatus">Оставить заявку</span>
    <img v-else src="../../assets/icon/loading.svg" alt="loading" class="img" />
  </button>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "buttonBase",
  methods: {
    ...mapActions({
      sendData: "sendData",
    }),
  },
  computed: {
    ...mapState({
      dataStatus: (state) => state.dataStatus,
    }),
  },
};
</script>

<style lang="scss"></style>
