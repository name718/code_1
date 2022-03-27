import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        id:'',
        account:'',
        name:'',
        avatar:'',
        token:localStorage.token,
    },
    mutations:{
        SET_TOKEN:(state, token) => {
            state.token = token;
        },
        SET_ACCOUNT:(state,account) => {
            state.account = account;
        },
        SET_NAME:(state,name) => {
            state.name = name;
        },
        SET_AVATAR:(state, avatar) => {
            state.avatar = avatar;
        },
        SET_ID:(state, id) => {
            state.id = id;
        }
    },
    actions:{
        register({commit},user) {
            return new Promise((resolve, reject) => {
                register(user.account,user.nickname,user.password).then((data) => {
                    if(data.success){
                        commit('SET_TOKEN',data.data)
                        localStorage.token = data.data;
                        resolve();
                    }else{
                        reject(data.msg);
                    }
                }).catch(error => {
                    reject(error);
                })
            })
        }
    }
})