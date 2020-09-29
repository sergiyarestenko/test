<template>
    <main class="table" ref="table">
        <div class="table-inner"
        :style="{width: appState.size * 10 + 'px', height: appState.size * 10 + 'px'}">
            <teeter-trotter/>
        </div>
    </main>
</template>

<script>
import TeeterTrotter from '../TeeterTrotter/TeeterTrotter'


import { mapState } from 'vuex'


export default {
    name: 'AppTable',

    components: {
        TeeterTrotter
    },
    computed: {
        ...mapState([
            'appState'
        ])
    },
    data: function (){
        return{
            size: 200
        }
    },
    methods: {
        setTableSize: function() {

            this.$store.dispatch('SET_TABLE_SIZE', Math.min(this.getTableWidth(), this.getTableHeight()))
        },
        getTableWidth: function() {
            return this.$refs.table.clientWidth
        },
        getTableHeight: function() {
            return this.$refs.table.clientHeight

        }
    },
    mounted() {
        this.$nextTick(function() {
            window.addEventListener('resize', this.setTableSize);
            this.setTableSize()
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setTableSize);
    }

}
</script>

<style scoped>
.table{
    height:100%;
    width: 100%;
    background: grey;
    padding-left: 50px;
    padding-right: 50px;
}
.table-inner{
    margin: auto;
    background: white;
    height:100%;
    width: 100%;
}
</style>
