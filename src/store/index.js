import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Item from '../models/Item'
import Profile from '../models/Profile'

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Item);
database.register(Profile);

export default new Vuex.Store({

  plugins: [VuexORM.install(database)]

})
