import { createStore } from 'vuex';

import CoachesModule from './modules/coaches/index.js';

import requestsModule from './modules/requests/index.js';

const store = createStore({

    modules : {
        coaches: CoachesModule,
        requests: requestsModule,
    },

    state(){
        return {
            userId : 'c3'
        }
    } ,

    getters : {
        getUserId(state){
            return state.userId;
        }
    }

})

export default store;