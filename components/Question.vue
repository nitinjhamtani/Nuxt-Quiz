<template>
  <div v-if="currentQuestion">
    <p>
      {{ currentQuestion.questionText }}
    </p>
    <div>
      <template v-if="currentQuestion.type === 'text'">
        <input type="text" />
      </template>
      <template v-else>
        <div v-for="item in currentQuestion.options" :key="item.id">
          <input :name="currentQuestion.id" :type="currentQuestion.type" />
          <label :for="item.id">{{ item.optionText }}</label>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentQuestion: function () {
      return this.$store.getters["questions/getCurrentQuestion"]({
        question: { id: this.$store.state.questions.currentQuestionId },
      })[0];
    },
  },
};
</script>