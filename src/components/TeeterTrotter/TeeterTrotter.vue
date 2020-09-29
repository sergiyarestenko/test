<template>
    <div class="container"
        >
        <div class="balance"
        :style="balanceStyle"/>
        <div class="base"
        :style="baseStyle"/>
        <div class="left-item">
            <weight-item itemName ="currLeftItem"/>
        </div>
        <left-item
            v-for="item in leftItems"
            :key="item.id"
        />

        <div class="right-item"
        :style="rightItemStyle">
            <weight-item itemName ="rightItem"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import WeightItem from '../WeightItem/WeightItem'
import LeftItem from '../LeftItem/LeftItem'

export default {
    name: 'AppTable',
    components: {
        WeightItem,
        LeftItem
    },
    computed: {
        ...mapState([
            'appState'
            ]),
        ...mapGetters([
            'appStarted'
        ]),

        bending: function() {
            if(!this.isRightItemFallen) {
                return 0
            }
            if(!this.leftMomentum && this.rightMomentum) {
                return this.maxDeg
            }
            if(this.leftMomentum === this.rightMomentum) {
                return 0
            }
            if(this.leftMomentum > this.rightMomentum) {
                return this.rightMomentum/this.leftMomentum * this.maxDeg * -1
            }
            if(this.leftMomentum < this.rightMomentum) {
                return this.leftMomentum/this.rightMomentum * this.maxDeg
            }
            return 0
        },


        balanceStyle: function() {
            return `transform:rotate(${this.bending}deg); width: ${this.appState.size * 8}px; left: ${this.appState.size}px; top: ${this.appState.size * 8}px;`
        },
        baseStyle: function() {
            return `top: ${this.appState.size * 8}px; border-width: 0 ${this.appState.size}px ${this.appState.size}px ${this.appState.size}px`

        },
        rightItemStyle: function () {
            return {
                left: this.appState.size * (4 + this.appState.rightItem.position) + 'px',
                top: this.rightItemTopPosition + 'px',
                transform: `rotate(${this.bending}deg)`
            }
        }
    },
    watch: {
        appStarted: function() {
            this.onAppStart()
        },
        bending: function() {
            this.correctRightItemPosition()
        }
    },
    data: function() {
        return{
            maxDeg: 17,
            itemWeightLength: 10,
            rightItemPositionLength: 4,
            itemFormArr:['triangle', 'circle', 'rectangle'],
            itemColorArr: ['red', 'blue', 'green', 'grey', 'aqua'],
            isRightItemFallen: false,
            rightItemTopPosition: 0,
            leftMomentum: 0,
            rightMomentum: 0,
            moveInterval: null,
            leftItems: []
        }
    },
    methods: {
        getRandomInt: function(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        generateItem: function (isRightItem = false) {
            const item = {
                weight: this.getRandomInt(this.itemWeightLength) + 1,
                form: this.itemFormArr[this.getRandomInt(this.itemFormArr.length)],
                color: this.itemColorArr[this.getRandomInt(this.itemColorArr.length)],
            }
            if(isRightItem) {
                item.position = this.getRandomInt(this.rightItemPositionLength) + 1
            }
            return item
        },
        onAppStart: function() {
            this.rightItemTopPosition = this.appState.size
            this.$store.dispatch('SET_RIGHT_ITEM', this.generateItem(true))
            this.$store.dispatch('SET_NEXT_LEFT_ITEM', this.generateItem())
            this.$store.dispatch('SET_CURR_LEFT_ITEM')
            this.$store.dispatch('SET_NEXT_LEFT_ITEM', this.generateItem())
            this.moveRightItem()
        },
        moveRightItem: function() {
            this.rightMomentum = this.appState.rightItem.weight * this.appState.rightItem.position
            this.moveInterval = setInterval(()=> {
                if(this.rightItemTopPosition >= this.appState.size * 8) {
                    this.clearTimer()
                    this.isRightItemFallen = true
                }else {
                    this.rightItemTopPosition += this.appState.size
                }

            },1000)


        },
        clearTimer: function() {
            clearTimeout(this.moveInterval)
            this.moveInterval = null
        },
        correctRightItemPosition: function () {
            const length = this.appState.size * this.appState.rightItem.position
            const height = length * Math.sin(this.bending * Math.PI / 180)
            this.rightItemTopPosition = this.appState.size * 8 + height

        },
        startLeftItem: function() {


        },
        keyDownListener: function(e) {
            if(e.key.toLowerCase() === "arrowdown") {
                this.startLeftItem()
            }

        },
        calculateMomentumDiff: function() {

        }
    },
    mounted() {
        window.addEventListener('keydown', this.startLeftItem);

    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.startLeftItem);

    },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container{
    height:100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content:  flex-end;
    position: relative;
    border: 1px solid aqua;
}
.balance {
    background: red;

    height: .2em;
    width: 80%;
    position: absolute;
    z-index: 2;

}
.base {

position: absolute;
left: 50%;
transform: translateX(-50%);
width: 0;
height: 0;
border-style: solid;
border-width: 0 5em 5em 5em;
border-color: transparent transparent #007bff transparent;

}

.start-line{
    position: absolute;
    top: 3em;
    background: red;
    height: .1em;
    left: 50%;
    transform: translateX(-50%);
}
.left-item, .right-item{
    position: absolute;
    transition: .5s
}

.left-item {
    top: 5em;
    left: 10em;
}

.right-item {
    transform: translate(-50%, -100%);
}
</style>
