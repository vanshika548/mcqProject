<template>
   <div class="about">
     
    <h1>This is about component..</h1>
    <ul>
      <li><router-link :to="{name : 'About1'}">About1</router-link></li>
      <li><router-link :to="{name : 'About2'}">About2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import "@/components/aboutcomponent/AboutComponent.less";
import AboutComponent from "@/components/aboutcomponent/AboutComponent";
export default {
  name: "about",
  components: {
    AboutComponent
  },
  mounted() {
      console.log('......in about');
  }
};

</script>