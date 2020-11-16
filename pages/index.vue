<template>
  <section>
    <div>
      <TopBar />
      <template v-if="!$store.state.questions.questionEnd">
        <Question />
        <Buttons />
      </template>
      <template v-else-if="$store.state.questions.questionEnd">
        <button v-on="handleRestart">Restart</button>
      </template>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

import TopBar from "~/components/TopBar.vue";
import Question from "~/components/Question.vue";
import Buttons from "~/components/Buttons.vue";

export default {
  data() {
    return {};
  },
  components: {
    TopBar,
    Question,
    Buttons,
  },
  computed: {
    list: function () {
      return this.$store.state.questions.list;
    },
  },
  methods: {
    getNextQuestionId() {},
    handleRestart() {},
  },
  created() {
    this.$store.dispatch("questions/getQuestions", {});
  },
};
</script>

<style scoped>
</style>
