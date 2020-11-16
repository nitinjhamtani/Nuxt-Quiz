<template>
  <div>
    <label>Your Name</label>
    <label>Current Question : {{ currentQuestion }}</label>
    <label>Total Questions : {{ totalQuestions }}</label>
    <label>Total Score : {{ totalScore }}</label>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 452,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentQuestion: function () {
      return this.$store.getters["questions/getCurrentQuestionIndex"]({}) + 1;
    },
    totalQuestions: function () {
      return this.$store.getters["questions/getTotalQuestions"]({});
    },
    totalScore: function () {
      return this.$store.getters["questions/getTotalScore"]({});
    },
  },
};
</script>
