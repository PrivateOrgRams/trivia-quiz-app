<template>
  <div id="app">
    <h1 id="pageTitle" align="center">Trivia-Quiz</h1>
    <TriviaStart v-if="showTrivia" @start-clicked="handleStartClicked" />
    <game-score-board v-if="!showTrivia" />
  </div>
</template>

<script>
import GameScoreBoard from "./components/TriviaScoreBoard";
import TriviaStart from "./components/StartPage/TriviaStart";

export default {
  name: "App",
  data() {
    return {
      showTrivia: true,
    };
  },
  methods: {
    handleStartClicked() {
      this.showTrivia = false;
    },
  },
  components: {
    TriviaStart,
    GameScoreBoard,
  },
};
</script>
