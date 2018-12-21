<template>
     <my-header class="header" :title="title"></my-header>
</template>
<script>
import Header from '../common/Header'
export default {
      components: {
        'my-header': Header,
    },
    data() {
        return {
            title: 'single select',
        }
    },
}
</script>
<style>

</style>
