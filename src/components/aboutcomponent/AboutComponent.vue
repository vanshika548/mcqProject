<template>
   <div  class="about">
    <h1>This is about component..</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import "@/components/aboutcomponent/AboutComponent.less";
import  AboutComponent  from '@/components/aboutcomponent/AboutComponent';
export default AboutComponent

</script>

<style scoped >
.app{
  background-color:black
}

</style>
