<template>
<div class="PlIndex">
    <pl-header></pl-header>
    <div class="PlIndex-main"></div>
    <pl-main></pl-main>
</div>
</template>

<script>
import PlHeader from './PlHeader';
import PlMain from './PlMain';
export default{
    components:{
        PlMain:PlMain,
        PlHeader:PlHeader
    }
}
</script>