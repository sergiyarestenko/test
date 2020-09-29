<template>
        <div class="left-item"
        :style="itemStyle">
            <weight-item itemName ="currLeftItem"/>
        </div>
</template>

<script>
import WeightItem from '../WeightItem/WeightItem'


export default {
    name: 'LeftItem',
    components: {
        WeightItem
    },
    props: {
        item: Object
    },
    computed: {
        itemStyle: function() {
            return ''
        }
    },
    methods: {
        moveLeftItemToLeft: function() {

        },
        moveLeftItemToRight: function() {

        }
    },

}
</script>

