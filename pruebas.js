Vue.component("titulo",{
    template: //html
    `
    <div>
        <h1>numero: {{numero}}</h1>
        <button class="btn btn-success" @click="aumentar">+++</button>
        <hijo></hijo>
    </div>
    `,
    computed:{
        ...Vuex.mapState(["numero"])
    },
    methods: {
        ...Vuex.mapMutations(["aumentar"])
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