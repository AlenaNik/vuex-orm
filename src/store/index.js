import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from '../models/User'
import Profile from '../models/Profile'

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Profile);

export default new Vuex.Store({

  plugins: [VuexORM.install(database)]

})
