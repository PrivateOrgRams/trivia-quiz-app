<template>
  <div id="question-area">
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
  display:-moz-box;
  grid-template-columns: auto auto;
}

.grid-item {
  text-align: center;
  font: bold;
  padding: 2rem;
  margin: 1rem;
}

#question-area button {
  border-radius: 25rem;
  background-color: rgb(99, 155, 66);
  font-size: 2rem;
}

#question-area button:hover {
  background-color: rgb(138, 136, 132);
}

#question-area button:focus {
  outline: none;
}

#question-area h1 {
  text-align: center;
}
</style>