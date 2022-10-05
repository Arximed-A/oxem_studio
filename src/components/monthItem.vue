<template>
  <div class="calc__item">
    <label for="time" class="calc__title">Срок лизинга</label>
    <div class="calc__wrapper">
      <input
        id="time"
        type="number"
        class="calc__hole"
        v-model.number="month"
        :disabled="dataStatus"
      />
      <div class="calc__box calc__box_month">мес.</div>
    </div>
    <input
      class="calc__slider"
      type="range"
      min="1"
      max="60"
      step="1"
      v-model.number="month"
      :disabled="dataStatus"
    />
    <!-- здесь не совсем понял как вы хотите что бы отображались данные -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "monthItem",
  data() {
    return {
      month: 60,
    };
  },
  watch: {
    month: function () {
      this.setMonth(this.month);
    },
  },
  methods: {
    ...mapActions({
      setMonth: "setMonth",
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
