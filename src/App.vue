<template>
  <div id="app">
<!--    <pre>{{ profiles }}</pre>-->
<!--    <div v-for="profile in profiles" :key="profile.id">-->
<!--      {{ profile.bio }}-->
<!--    </div>-->

<!--    <input v-model="form.body" />-->
<!--    <button @click="add">Add item</button>-->
<!--    <ul v-for="item in items" :key="item.$id">-->
<!--      <li>{{ item }}</li>-->
<!--      <li>{{ item.body }}</li>-->
<!--    </ul>-->

    <pre> {{ user.lists }}</pre>
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
          lists: [
            {
              id: '015858a1-2a08-4724-b464-048650e85ce0',
              title: 'shopping'
            },
            {
              id: 'f93fd348-d8fb-4915-a98a-6a0d9f4ee5a8',
              title: 'eating tacos'
            },
            {
              id: 'be72879c-1159-4423-b0b9-65d9721df9c0',
              title: 'making sushi'
            }
          ]
        }
      ]
    })
  },

  computed: {

    user() {
      return User.query()
      .with('lists')
      .find(17)
    }
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
