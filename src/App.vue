<template>
  <div id="app">
    <p>Clean</p>

    <h1>{{ profiles }}</h1>

<!--    <input v-model="form.body" />-->
<!--    <button @click="add">Add item</button>-->
<!--    <ul v-for="item in items" :key="item.$id">-->
<!--      <li>{{ item }}</li>-->
<!--      <li>{{ item.body }}</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
import Profile from './models/Profile'
import User from './models/User'

export default {
  name: 'App',
  data() {
    return {
      form: {
        body: ''
      }
    }
  },

  beforeMount() {

    User.insert({
      data: [
        {
          id: 17,
          name: 'alena',
          email: 'alena@gmail.com',
          profile: {
            id: 13,
            bio: 'bio text',
            life_goal: 'be awesome',
            // needs to match up user if
            // user_id: 17
          }
        },
        {
          id: 18,
          name: 'shannon',
          email: 'shannon@gmail.com',
          profile: {
            id: 14,
            bio: 'bio text',
            life_goal: 'be awesome too',
            // needs to match up user if
            // user_id: 17
          }
        }
      ]
    })
  },

  computed: {

    profiles() {
     return Profile.query()
      .with('user')
      .get()
    },
  },

  methods: {
    // add() {
    //   User.insert({ data: this.form })
    //   console.log(User)
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
