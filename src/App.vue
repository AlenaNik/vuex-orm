<template>
  <div id="app">
    <p>Clean</p>

    <h1>{{ user.name }}</h1>

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
import Item from './models/Item'

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

    Item.insert({
      data: {
        id: 17,
        name: 'alena',
        email: 'alena@gmail.com'
      }
    })

    Profile.insert({
      data: {
        id: 13,
        bio: 'bio text',
        life_goal: 'be awesome',
        // needs to match up user if
        user_id: 17
      }
    })
  },

  computed: {

    user() {
     return Item.find(17)
    },

    items() {
      return Item.all()
    }
  },

  methods: {
    // add() {
    //   Item.insert({ data: this.form })
    //   console.log(Item)
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
