<template>
  <div>
    <div id="intro">
      <hr id="option-section" />
      <div class="form">
        <form>
          <label>Number of Questions:</label>
          <input
            id="numberOfQuestions"
            class="form-control-no-ofquestions"
            type="number"
            min="1"
            value="1"
          /><br />
          <label>Type of Questions:</label>
          <select id="selectedType" class="form-control">
            <option value="0">Any Type</option>
            <option value="multiple">Mulyiple-Choice</option>
            <option value="boolean">True/False</option> </select
          ><br />
          <label>Select Category: </label>
          <select id="selectedCategory" class="form-control">
            <option value="0">Any Category</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.id"
              >{{ category.name }}
            </option> </select
          ><br />
          <label>
            Choose Difficulty
          </label>
          <select id="selectedDifficulty" class="form-control">
            <option value="0">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option> </select
          ><br />
        </form>
      </div>
    </div>
    <div id="button-placement">
      <button @click="onStartClicked">Start Game</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["categories"]),
  },
  data() {
    return {
      description: "Trivia Game For-Fun",
    };
  },
  methods: {
    ...mapMutations([
      "setSelectedCategory",
      "setNumberOfQuestions",
      "setDifficulty",
      "setType",
    ]),
    ...mapActions(["loadQuestions", "loadCategories"]),
    onStartClicked() {
      this.setSelectedCategory(
        document.getElementById("selectedCategory").value
      );
      this.setDifficulty(document.getElementById("selectedDifficulty").value);
      this.setType(document.getElementById("selectedType").value);
      this.setNumberOfQuestions(
        document.getElementById("numberOfQuestions").value
      );
      this.loadQuestions().then(() => {
        this.$emit("start-clicked");
      });
    },
  },
  created() {
    this.loadCategories();
  },
};
</script>

<style>
.form {
  display: block;
  width: 60%;
  max-width: 500px;
  margin: auto;
}

.form-control {
  display: block;
  width: 100%;
  height: 45px;
  padding: 0px 15px;
  font-size: 15px;
  color: #1c1d80;
  background-color: white;
  background-image: none;
  border: 2px solid black;
  border-radius: 4px;
}
.form-control-no-ofquestions {
  display: block;
  width: 93.5%;
  height: 50px;
  padding: 0px 15px;
  font-size: 15px;
  color: #1c1d80;
  background-color: white;
  background-image: none;
  border: 2px solid black;
  border-radius: 4px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

#button-placement {
  text-align: center;
  margin-top: 2rem;
}
</style>
