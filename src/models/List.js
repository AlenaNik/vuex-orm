import { Model } from '@vuex-orm/core';
import User from './User'

export default class List extends Model {
    static entity = 'lists';
    static fields() {
        return {
            id: this.attr(null),
            body: this.attr(''),
            user_id: this.attr(null),
            // relationships
            user: this.belongsTo(User, 'user_id')
        }
    }
}