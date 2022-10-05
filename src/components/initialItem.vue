<template>
  <div class="calc__item">
    <label for="first_money" class="calc__title"> Первоначальный взнос </label>
    <div class="calc__wrapper">
      <input
        id="first_money"
        type="text"
        class="calc__hole"
        v-model="firstMoney"
        :disabled="dataStatus"
        readonly
      />
      <div class="calc__box calc__box_procent">{{ initial }}%</div>
    </div>
    <input
      class="calc__slider slider"
      type="range"
      min="10"
      max="60"
      step="1"
      v-model.number="initial"
      :disabled="dataStatus"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "initialItem",
  data() {
    return {
      initial: 13,
    };
  },
  watch: {
    initial: function () {
      this.setInitial(this.initial);
    },
  },
  methods: {
    ...mapActions({
      setInitial: "setInitial",
    }),
  },
  computed: {
    ...mapState({
      dataStatus: (state) => state.dataStatus,
    }),
    ...mapGetters({
      firstMoney: "getFirstMoney",
    }),
  },
};
</script>

<style lang="scss"></style>
