<template>
    <div class="preview">
        <weight-item
            itemName ="nextLeftItem"
            :isPreview="true"/>
    </div> 
</template>

<script>

import WeightItem from '../WeightItem/WeightItem'

export default {
    name: 'NextItemPreview',
    components: {
        WeightItem
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.preview{
  color: white
}
</style>
