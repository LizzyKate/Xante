export const state = () => ({
  mobileNav: false
})

export const mutations = {
  openNav(state, payload) {
    state.mobileNav = payload
  }
}
