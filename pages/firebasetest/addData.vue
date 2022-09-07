<template>
  <div>
    <v-btn @click="addData">追加</v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore'
export default {
  data(){
    return {
      id: '001',
      title: 'テスト'
    }
  },
  methods: {
    addTest(){
      console.log("test")// eslint-disable-line no-console
    },
    async addData(){
      try {
        const db = getFirestore(this.$firebase)
        const docRef = await addDoc(collection(db, 'tasks'), {
          id: this.id,
          title: this.title
        })
        console.log('追加したデータのID:', docRef.id) // eslint-disable-line no-console
      } catch(e) {
        console.error('error:', e) // eslint-disable-line no-console
      }
    }
  }
}
</script>

<style>

</style>
