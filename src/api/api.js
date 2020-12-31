import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
})

async function getMentionableUsers() {
  const mentionableUsers = await api.get('users/mentionable/')
  return mentionableUsers.data
}

async function getUser(userId) {
  const mentionableUsers = await api.get(`users/${userId}/`)
  return mentionableUsers.data
}

async function getPages() {
  const pages = await api.get('pages/')
  return pages.data
}

async function getPage(pageId) {
  const pages = await api.get(`pages/${pageId}/`)
  return pages.data
}

async function getPageComments(pageId) {
  const pageComments = await api.get(`pages/${pageId}/comments/`)
  return pageComments.data
}

async function postPageComment(pageId, parentCommentId, comment) {
  const payload = {
    page_id: pageId,
    parent_comment_id: parentCommentId,
    comment: comment
  }
  const newComment = await api.post(`pages/${pageId}/comments/`, payload)
  return newComment.data
}

export default { getMentionableUsers, getUser, getPages, getPage, getPageComments, postPageComment }
