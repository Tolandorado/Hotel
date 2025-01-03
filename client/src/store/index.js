import { createStore } from 'vuex'
import user from '@/store/modules/user'


// Create a new store instance.
const store = createStore({
    modules: {
        user
      }
})


export default store
