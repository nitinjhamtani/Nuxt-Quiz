<template>
  <div>
    <button v-on:click="handleSave">Save</button>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {
    handleSave() {
      const nextQuestionId = this.$store.getters["questions/getNextQuestionId"](
        {}
      );
      if (nextQuestionId)
        this.$store.dispatch("questions/setCurrentQuestionId", {
          id: nextQuestionId,
        });
      else this.$store.dispatch("questions/endOfQuestions");
      console.log("here");
    },
  },
};
</script>>