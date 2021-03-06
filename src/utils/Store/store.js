import Vue from "vue";
import Vuex from "vuex";
import {
  getAllQuestions,
  processFetchedQuestions,
  getCategories,
} from "../fetchQuestions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedCategory: 0,
    numberOfQuestions: 10,
    questions: [],
    difficulty: "",
    categories: [],
    type: "",
  },
  mutations: {
    setSelectedCategory: (state, payload) => {
      state.selectedCategory = payload;
    },
    setNumberOfQuestions: (state, payload) => {
      state.numberOfQuestions = payload;
    },
    setQuestions: (state, payload) => {
      state.questions = payload;
    },
    setDifficulty: (state, payload) => {
      state.difficulty = payload;
    },
    setCategories: (state, payload) => {
      state.categories = payload;
    },
    setType: (state, payload) => {
      state.type = payload;
    },
  },
  actions: {
    async loadQuestions({ state, commit }) {
      const fetchedQuestions = await getAllQuestions(
        state.numberOfQuestions,
        state.selectedCategory,
        state.difficulty,
        state.type
      );
      const processedQustions = processFetchedQuestions(fetchedQuestions);
      commit("setQuestions", processedQustions);
    },
    async loadCategories({ commit }) {
      const fetchCategories = await getCategories();
      commit("setCategories", fetchCategories);
    },
  },
  getters: {
    selectedCategory: (state) => {
      return state.selectedCategory;
    },
    selectedDifficulty: (state) => {
      return state.selectedDifficulty;
    },
    numberOfQuestions: (state) => {
      return state.numberOfQuestions;
    },
    questions: (state) => {
      return state.questions;
    },
    categories: (state) => {
      return state.categories;
    },
    type: (state) => {
      return state.type;
    },
  },
});

export default store;
