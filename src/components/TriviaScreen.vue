<template>
  <div id="quiz-area">
    <h1 v-html="question.mainQuestion"></h1>
    <div class="grid-container">
      <button
        class="grid-item"
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
.grid-container {
  display: -moz-box;
  grid-template-columns: auto auto;
}

.grid-item {
  text-align: center;
  font: bold;
  padding: 1rem;
  margin: 1rem;
}

#quiz-area button {
  border-radius: 5rem;
  background-color: rgb(79, 177, 216);
  font-size: 1.5rem;
}

#quiz-area button:hover {
  background-color: rgb(138, 136, 132);
}

#quiz-area button:focus {
  outline: none;
}

#quiz-area h1 {
  text-align: center;
}
</style>
