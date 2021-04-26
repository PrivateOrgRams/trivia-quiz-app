<template>
  <div id="quiz-area">
    <h1 v-html="question.mainQuestion"></h1>
    <div>
      <button
        v-for="option in question.options"
        :key="option"
        v-html="option"
        @click="onAnswerOptionButtonClicked(option)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  methods: {
    onAnswerOptionButtonClicked(selectedOption) {
      this.$emit("answer-option-button-clicked", selectedOption);
    },
  },
};
</script>

<style>
#quiz-area button {
  border-radius: 3rem;
  background-color: #f0f5f7;
  font-size: 1.5rem;
}
</style>
