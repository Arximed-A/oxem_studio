import { createStore } from "vuex";

export default createStore({
  state: {
    price: 3300000,
    initial: 13,
    firstMoney: 429000,
    month: 60,
    monthlyPayment: 114455,
    summ: 4467313,
    rate: 0.035,
    dataStatus: false,
  },
  mutations: {
    changePrice(state, price) {
      state.price = price;
    },
    changeInitial(state, initial) {
      state.initial = initial;
    },
    changeMonth(state, month) {
      state.month = month;
    },
    changeFirstMoney(state) {
      state.firstMoney = Math.floor((state.price / 100) * state.initial);
    },
    changeMonthlyPayment(state) {
      state.monthlyPayment = Math.floor(
        (state.price - state.firstMoney) *
          ((state.rate * Math.pow(1 + state.rate, state.month)) /
            (Math.pow(1 + state.rate, state.month) - 1))
      );
    },
    changeSumm(state) {
      state.summ = state.firstMoney + state.month * state.monthlyPayment;
    },
    changeDataStatus(state) {
      state.dataStatus = !state.dataStatus;
    },
  },
  actions: {
    setPrice({ commit }, price) {
      commit("changePrice", price);
      commit("changeFirstMoney");
      commit("changeMonthlyPayment");
      commit("changeSumm");
    },
    setInitial({ commit }, initial) {
      commit("changeInitial", initial);
      commit("changeFirstMoney");
      commit("changeMonthlyPayment");
      commit("changeSumm");
    },
    setMonth({ commit }, month) {
      commit("changeMonth", month);
      commit("changeMonthlyPayment");
      commit("changeSumm");
    },
    async sendData({ commit }) {
      const data = {
        car_coast: this.state.price,
        initail_payment: this.state.firstMoney,
        initail_payment_percent: this.state.initial,
        lease_term: this.state.month,
        total_sum: this.state.summ,
        monthly_payment_from: this.state.monthlyPayment,
      };
      commit("changeDataStatus");
      let result = null;
      try {
        result = await fetch("https://hookb.in/eK160jgYJ6UlaRPldJ1P", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "content-type": "application/json",
          },
        }).then((res) => {
          return res.ok;
        });
      } catch (err) {
        throw err;
      } finally {
        if (result) {
          setTimeout(commit, 1500, "changeDataStatus"); //добавил немного времени на запрос.
        }
      }
    },
  },
  getters: {
    getFirstMoney(state) {
      return state.firstMoney + " ₽";
    },
  },
});
