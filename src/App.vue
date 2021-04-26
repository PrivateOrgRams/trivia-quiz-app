<template>
  <div id="app">
    <h1 id="pageTitle">Trivia-Fun-Game!</h1>
    <TriviaStart v-if="showTrivia" @start-clicked="handleStartClicked"/>
    <game-score-board v-if="!showTrivia"/>
  </div>
</template>

<script>
import GameScoreBoard from "./components/TriviaScoreBoard";
import TriviaStart from "./components/TriviaStart";

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

<style>
html {
  background-color: rgb(163, 142, 142);
}

#pageTitle {
  text-align: center;
}
</style>
