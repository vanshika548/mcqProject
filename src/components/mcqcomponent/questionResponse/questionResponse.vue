<template>
    <ul>
        <li v-for="(res, ind) in questionRespnse.responseSet"
        :value="res"
        :key="index + ind"  >
        <label>
        <input type="radio" :value="res" v-model="selectAnswers[index]" @change="selectQuestion(index,ind )"/>
        {{ res }}</label>
        </li>
    </ul>
</template>

<script> 
 import {QuestionResponse} from './questionResponse'
 export default QuestionResponse;
</script>