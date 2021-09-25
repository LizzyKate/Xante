export const state = () => ({
  visible: false,
  search_dropdown: false,
  third_dropdown: false,
  fourth_dropdown: false,
  fifth_dropdown: false,
  sixth_dropdown: false
})
export const mutations = {
  // { key: "search_dropdown", value: true}
  visibility(state, payload) {
    if (payload) {
      Object.keys(state).forEach(e => {
        state[e] = false
      })
    }
    state[payload.key] = payload.value
  },
  dropAllVisibility(state) {
    Object.keys(state).forEach(e => {
      state[e] = false
    })
  }
}
