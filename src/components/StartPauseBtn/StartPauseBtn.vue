<template>
    <button class="button" @click="emitStartPauseBtnClick">
        <svg v-if="appState.isPaused"
            width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/>
        </svg>
        <svg v-if="!appState.isPaused"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"/>
        </svg>
    </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'StartPauseBtn',
    computed: {
        ...mapState([
            'appState'
        ])
    },
    methods: {
        emitStartPauseBtnClick: function() {
            this.$store.dispatch('APP_STARTED_PAUSED')
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	background-color:#44c767;
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
}
button:hover {
	background-color:#5cbf2a;
}
button:active {
	position:relative;
	top:1px;
}
</style>
