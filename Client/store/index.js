export const actions = {
  nuxtServerInit({ commit }, { req }) {
    global.console.log('生命周期---- nuxtServerInit')
  }
}
