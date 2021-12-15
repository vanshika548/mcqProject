<template>
  <div style="position: relative">
    <header class="uk-modal-header uk-navbar-container uk-navbar-nav">Header section</header>
    <SampleComponentView message="text from parent view...." key = '' user_role="{APP}" />
    <footer class="uk-modal-footer uk-position-bottom footer-section">Footer Section</footer>
  </div>
</template>

<script lang="ts">
import SampleComponentView from "@/components/samplecomponent/SampleComponentView.vue";
import APP_CONST from "@/constants/AppConst";
import config from "./../config";
export default {
  name: "home",
  components: {
    SampleComponentView
  }
};
</script>
<style>
.footer-section {
  margin-bottom: -64px;
}
</style>