import axios from "axios";

export const state = () => ({
  list: [],
  totalScore: 0,
  currentQuestionId: null,
  questionEnd: false
});

export const getters = {
  getCurrentQuestion: (state) => (filters) => {
    return state.list.filter((item) => filters.question.id === item.id);
  },
  getTotalQuestions: (state) => (filters) => {
    return state.list.length;
  },
  getTotalScore: (state) => (filters) => {
    return state.totalScore;
  },
  getNextQuestionId: (state) => (filters) => {
    const nextIndex = state.list.findIndex(
      (item) => item.id === state.currentQuestionId
    );
    if (!(nextIndex === state.list.length - 1)) {
      return state.list[nextIndex + 1].id;
    } else {
      return null;
    }
  },
  getCurrentQuestionIndex: (state) => (filters) => {
    return state.list.findIndex((item) => item.id === state.currentQuestionId);
  }
};

export const actions = {
  async getQuestions({ dispatch, commit }) {
    const { data, status } = await axios.get(
      "https://zrtrw-8000.sse.codesandbox.io/questions"
    );
    console.log(data);
    commit("loadQuestions", data);
    dispatch("setCurrentQuestionId", {
      id: data.length > 0 ? data[0].id : null
    });
  },
  setCurrentQuestionId({ commit }, { id }) {
    commit("setCurrentQuestionId", id);
  },
  endOfQuestions({ commit }) {
    commit("setQuestionsEnd");
  },
  restartQuiz({ commit }) {}
};

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
      id: Date.now()
    });
  },
  loadQuestions(state, payload) {
    state.list = [...payload, ...state.list];
  },
  setCurrentQuestionId(state, id) {
    state.currentQuestionId = id;
  },
  setQuestionsEnd(state) {
    state.questionEnd = true;
  }
};
