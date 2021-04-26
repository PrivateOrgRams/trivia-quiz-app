<template>
  <div>
    <hr />
    <div v-if="currentQuestion <= numberOfQuestions" id="header">
      <p>Score: {{ score }}</p>
      <p>Question: {{ currentQuestion }}/{{ numberOfQuestions }}</p>
    </div>
    <div v-else id="header">
      <p>
        Final score: {{ score }}/{{
          numberOfQuestions * pointsForCorrectAnswer
        }}
      </p>
    </div>
    <hr />
    <trivia-screen
      v-if="currentQuestion <= numberOfQuestions"
      :question="questions[currentQuestion - 1]"
      @answer-option-button-clicked="handleAnswerOptionButtonClicked"
    />
    <results :questions="questions" v-else />
    <hr />
  </div>
</template>

<script>
import TriviaScreen from "./TriviaScreen";
import Results from "./ResultPage/TriviaResults";
import { mapState } from "vuex";

export default {
  components: {
    TriviaScreen,
    Results,
  },
  data() {
    return {
      score: 0,
      currentQuestion: 1,
      pointsForCorrectAnswer: 10,
    };
  },
  computed: {
    ...mapState(["questions", "numberOfQuestions"]),
  },
  methods: {
    handleAnswerOptionButtonClicked(selectedOption) {
      const indexOfCurrentQuestion = this.currentQuestion - 1;
      const correctAnswer = this.questions[indexOfCurrentQuestion]
        .correctAnswer;
      if (selectedOption == correctAnswer) {
        this.score += this.pointsForCorrectAnswer;
      }

      this.questions[indexOfCurrentQuestion].selectedOption = selectedOption;

      this.currentQuestion++;
    },
  },
};
</script>

<style></style>
