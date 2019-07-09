Vue.component("hijo",{
    template://html
    `
    <div class="py-5 bg-success">
        <h4>componente hijo: {{numero}}</h4>
        <h4>nombre prm: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: "kevin"
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
});