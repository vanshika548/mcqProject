<template>
    <div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
      <div class="uk-grid">
          <h1  class="uk-heading-small uk-width-3-3@m">Lorem ipsum dolor {{message}}</h1>
      </div>
      <table border="1">
          <tr v-for="result in results" v-bind:key="result.id">
            <td>{{ result.id }}</td>
            <td>{{ result.userId }}</td>
            <td>{{ result.title }}</td>
          </tr>
      </table>
      <div class="uk-grid">
        <div class="uk-width-medium-3-4 uk-row-first">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
          <span>{{getScreenText("LABEL_EMAIL")}}</span>
          <input type="text" class="uk-input"/>
          </div>
          <br>
          <div>
          <span>{{getScreenText("LABEL_PASSWORD")}}</span>
          <input type="password" class="uk-input"/>
          </div>
        </div>
      </div>
      <br>
      <br>
        <div class="uk-button-group">
            <button class="uk-button uk-button-default "  v-on:click.prevent="handleComponentButtonClick">{{getScreenText('LABEL_SUBMIT')}}</button>
            <button class="uk-button uk-button-default uk-margin-left" v-on:click.prevent="handleComponentButtonClick">{{getScreenText('LABEL_OK')}}</button>
            <button class="uk-button uk-button-primary uk-margin-left" v-on:click.prevent="handleComponentButtonClick">Button-3</button>
            <button class="uk-button uk-button-danger uk-margin-left" v-on:click.prevent="handleComponentButtonClick">Button-4</button>
        </div>
        
          
      </div>
    
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import "@/components/samplecomponent/SampleComponent.less";
import {SampleComponent} from '@/components/samplecomponent/SampleComponent';
export default SampleComponent;

</script>

<style scoped lang='less'>
table, td, th {
  border: 1px solid black;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  height: 50px;
}
</style>