// mutations
const mutations = {
  setCurrentUser (state, user) {
    if (user && user.userInfo && user.userInfo.userName) {
      // currentUser.orgId = user.organizationStructures[0].orgId
      state.currentUser.userName = user.userInfo.userName
      state.currentUser.chineseName = user.userInfo.chineseName
      state.currentUser.regIp = user.userInfo.regIp
      state.currentUser.lastLoginIp = user.userInfo.lastLoginIp
      state.currentUser.lastLoginTime = user.userInfo.lastLoginTime
      state.currentUser.email = user.userInfo.email
      state.currentUser.mobile = user.userInfo.mobile
      state.currentUser.status = user.userInfo.status
      state.currentUser.rules = user.rules
      if (user.userInfo.status === 'A') {
        state.currentUser.isAdmin = true
      } else {
        state.currentUser.isAdmin = false
      }
    } else {
      state.currentUser.orgId = ''
      state.currentUser.userName = ''
      state.currentUser.chineseName = ''
      state.currentUser.regIp = ''
      state.currentUser.lastLoginIp = ''
      state.currentUser.lastLoginTime = ''
      state.currentUser.email = ''
      state.currentUser.mobile = ''
      state.currentUser.status = ''
      state.currentUser.isAdmin = false
      state.currentUser.rules = []
    }
  },
  sidebarToggleBtn (state) {
    if (state.sidebarToggle === false) {
      state.sidebarToggle = true
    } else {
      state.sidebarToggle = false
    }
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  adminAlert (state, adminAlert) {
    state.adminAlert = adminAlert
  }
}

export default mutations
