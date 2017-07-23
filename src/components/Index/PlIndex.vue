<template>
<div class="PlIndex">
    <pl-header></pl-header>
    <div class="PlIndex-main"></div>
    <pl-main></pl-main>
</div>
</template>

<script>
import PlHeader from './Children/PlHeader';
import PlMain from './Children/PlMain';
export default{
    components:{
        PlMain:PlMain,
        PlHeader:PlHeader
    }
}
</script>