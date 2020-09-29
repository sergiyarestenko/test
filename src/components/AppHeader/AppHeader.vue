<template>
    <header class="header">
        <next-item-preview/>
        <start-pause-btn/>
    </header>
</template>

<script>
import NextItemPreview from '../NextItemPreview/NextItemPreview'
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn'

export default {
    name: 'AppHeader',
    components: {
        NextItemPreview,
        StartPauseBtn
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.header{
    justify-content: space-between;
    height: 4em;
    width: 100%;
    flex-shrink: 0;
    background: red;
}
</style>
