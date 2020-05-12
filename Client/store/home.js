export const state = () => ({ menuList: [], productInfo: {}, banners: [] })

export const mutations = {
  setMenuList(state, value) {
    state.menuList = value
    // this.$print('vuex mutation ,我是自定义插件pTest')
  },
  setProductInfo(state, value) {
    state.productInfo = value
  },
  setBanners(state, value) {
    state.banners = value
  }
}

export const actions = {
  setMenu({ commit }, menus) {
    commit('setMenu', menus)
  }
}
