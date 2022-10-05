<template>
  <div class="calc__item">
    <label for="cost" class="calc__title"> Стоимость автомобиля </label>
    <div class="calc__wrapper calc__wrapper_money">
      <input
        id="cost"
        type="number"
        class="calc__hole"
        v-model.number="price"
        :disabled="dataStatus"
      />
      <div class="calc__box calc__box_money">₽</div>
    </div>
    <input
      class="calc__slider slider"
      type="range"
      min="1000000"
      max="6000000"
      step="50000"
      v-model.number="price"
      :disabled="dataStatus"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "priceItem",
  data() {
    return {
      price: 3300000,
    };
  },
  watch: {
    price: function () {
      this.setPrice(this.price);
    },
  },
  methods: {
    ...mapActions({
      setPrice: "setPrice",
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
