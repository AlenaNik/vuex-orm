import { Model } from '@vuex-orm/core';
import Item from './Item'

export default class Profile extends Model {

    static entity = 'profiles';

    static fields() {
        return {
            id: this.increment(),
            bio: this.attr(''),
            life_goal: this.attr(''),
            user_id: this.attr(null),

            // relationships

            user: this.belongsTo(Item, 'user_id')
        }
    }
}