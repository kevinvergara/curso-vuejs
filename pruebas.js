Vue.component("titulo",{
    template: //html
    `
    <div>
        <h1>numero: {{numero}}</h1>
        <button class="btn btn-success" @click="aumentar">+++</button>
        <hijo></hijo>
        <hr>
        <button class="btn btn-success" @click="getcursos">cargar cursos</button>
        <ul v-for="curso of cursos">
            <li>{{curso.nombre}}</li>
        </ul>
        <hr>
    </div>
    `,
    computed:{
        ...Vuex.mapState(["numero","cursos"])
    },
    methods: {
        ...Vuex.mapMutations(["aumentar"]),
        ...Vuex.mapActions(["getcursos"])
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
        numero: 10,
        cursos: []
    },
    mutations: {
        aumentar(){
            this.state.numero ++;
        },
        llenarcursos(state, cursosa){
            state.cursos = cursosa;
        }
    },
    actions: {
        getcursos: async function ({ commit }) {
            const data = await fetch('data/cursos.json');
            const cursos = await data.json();

            commit('llenarcursos', cursos);
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