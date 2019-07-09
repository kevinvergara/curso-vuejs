Vue.component("titulo",{
    template: //html
    `
    <div>
        <h1>numero: {{numero}}</h1>
        <hijo></hijo>
    </div>
    `,
    computed:{
        ...Vuex.mapState(["numero"])
    }
});

Vue.component("hijo",{
    template: //html
    `
    <div>
        <button class="btn btn-success" @click="$store.commit('aumentar')">+</button>
        <h1>numero {{$store.state.numero}}</h1>
    </div>
    `
});

const store = new Vuex.Store({
    state: {
        numero: 10
    },
    mutations: {
        aumentar(){
            this.state.numero ++;
        }
    }
});


const app = new Vue({
    el: '#app',
    data: {
        titulo: "hola de variables"
    },
    store: store
});