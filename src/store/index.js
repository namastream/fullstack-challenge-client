import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/api'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    pages: [],
    currentUser: null,
    currentPage: null,
    currentPageComments: []
  },
  mutations: {
    [types.SET_USERS](state, users) {
      state.users = users
    },
    [types.SET_CURRENT_USER](state, currentUser) {
      state.currentUser = currentUser
    },
    [types.SET_PAGES](state, pages) {
      state.pages = pages
    },
    [types.SET_CURRENT_PAGE](state, currentPage) {
      state.currentPage = currentPage
    },
    [types.SET_CURRENT_PAGE_COMMENTS](state, currentPageComments) {
      state.currentPageComments = currentPageComments
    }
  },
  actions: {
    async loadUsers({commit}) {
      const users = await Api.getMentionableUsers()
      commit(types.SET_USERS, users)
    },
    async loadUser({commit}, userId) {
      const user = await Api.getUser(userId)
      commit(types.SET_CURRENT_USER, user)
    },
    async loadPages({commit}) {
      const pages = await Api.getPages()
      commit(types.SET_PAGES, pages)
    },
    async loadPage({commit}, pageId) {
      const page = await Api.getPage(pageId)
      commit(types.SET_CURRENT_PAGE, page)
    },
    async loadPageComments({commit}, pageId) {
      const pageComments = await Api.getPageComments(pageId)
      commit(types.SET_CURRENT_PAGE_COMMENTS, pageComments)
    }
  },
  getters: {
    users: state => state.users,
    currentUser: state => state.currentUser,
    pages: state => state.pages,
    currentPage: state => state.currentPage,
  }
})
