<template>
  <div>
    ログイン
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          label="メールアドレス"
        />
        <v-text-field
          v-model="password"
          label="パスワード"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="logIn"
        >ログイン</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          text
          to="./register"
        >ユーザー登録</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods :{
    logIn() {
      const auth = getAuth(this.$firebase)
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then( userCredential => {
        console.log( userCredential.user ) //eslint-disable-line
        console.log('ログインOK') //eslint-disable-line
      })
      .catch( e => {
        alert(e.message)
        console.error('error:', e) //eslint-disable-line
      } )
    }
  }
}
</script>

<style>

</style>
