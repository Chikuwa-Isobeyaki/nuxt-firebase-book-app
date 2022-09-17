import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export const state = () => ({
  isLoggedIn: false,
  userUid: '',
  email: ''
})

export const mutations = {
  setLoginState(state, loggedIn){
    state.isLoggedIn = loggedIn
  },
  setUserUid(state, userUid){
    state.userUid = userUid
  },
  setEmail(state, email){
    state.email = email
  }
}

export const actions = {
  async login( {commit}, payload ){
    const auth = getAuth(this.$firebase)
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then( userCredential => {
        commit('setLoginState', true)
        commit('setUserUid', userCredential.user.uid)
        commit('setEmail', userCredential.user.email)
        console.log('ログインOK!!') //eslint-disable-line
        this.$router.push('/book')
      })
      .catch( e => {
        alert(e.message)
        console.error('error:', e) //eslint-disable-line
      })
  },
  async logout( {commit} ){
    const auth = getAuth(this.$firebase)
    await signOut(auth)
    .then( userCredential => {
      commit('setLoginState', false)
      commit('setUserUid', '')
      commit('setEmail', '')
      console.log('ログアウトOK!!') //eslint-disable-line
      this.$router.push('/auth/login')
    })
    .catch( e => {
      alert(e.message)
      console.error('error:', e) //eslint-disable-line
    })
  },
  addUserInfo({ commit }, payload){
    console.log(payload) //eslint-disable-line
    commit('setLoginState', true)
    commit('setUserUid', payload.uid)
    commit('setEmail', payload.email)
  }
}

export const getters = {
  // getLoggedIn(state){
  //   return !!state.isLoggedIn
  // }

  getLoggedIn : state => !!state.isLoggedIn,
  getUserUid: state => state.userUid,
  getEmail: state => state.email
}
