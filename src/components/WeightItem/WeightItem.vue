<template>
    <div class="item"
    :class="{'hidden': !appState.isStarted}">
        <span class="text">
            {{appState[this.itemName].weight}}
        </span>
    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'WeightItem',

    props: {
        itemName: String,
        isPreview: {
            type: Boolean,
            default: false
        }

    },
    computed: {
        ...mapState([
            'appState'
        ]),

        itemStyle: function () {
            if(this.appState[this.itemName].form === 'triangle') {
                return {
                    width: '0',
                    height: '0',
                    borderTop: '0 solid transparent',
                    borderRightWidth: this.isPreview ? '3em' : this.appState[this.itemName].weight * 10 + 'px',
                    borderRightColor: 'transparent',
                    borderRightStyle: 'solid',

                    borderBottomWidth: this.isPreview ? 3 * 1.73 + 'em': this.appState[this.itemName].weight * 17.3 + 'px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: this.appState[this.itemName].color,

                    borderLeftWidth: this.isPreview ? '3em' :this.appState[this.itemName].weight * 10 + 'px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: 'transparent',

                }
            }
            if(this.appState[this.itemName].form === 'rectangle') {
                return {
                    width: this.isPreview ? '3em' :this.appState[this.itemName].weight * 10 + 'px',
                    height: this.isPreview ? '3em' :this.appState[this.itemName].weight * 10 + 'px',
                    backgroundColor: this.appState[this.itemName].color
                }
            }
            if(this.form === 'circle') {
                return {
                    width: this.isPreview ? '3em' :this.appState[this.itemName].weight * 10 + 'px',
                    height: this.isPreview ? '3em' :this.appState[this.itemName].weight * 10 + 'px',
                    borderRadiusLeft: '50% 50% 50% 50%',
                    backgroundColor: this.appState[this.itemName].color
                }
            }
            return {}
        }
    },

}
</script>

<style scoped>
    .text{
        display: flex;
        margin: auto;
    }
.hidden {
    display: none;
}
.item{
    height: 50px;
    width: 50px;
    background: red;
    color: white
}
</style>
