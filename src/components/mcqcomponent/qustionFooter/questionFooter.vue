<template>
    <div class="question-footer">
        <div class="footer-left">Question {{index+1}} of {{data.length}}</div>

        <div class="footer-right">
        <button class="transparent-button" :class="index === 0 ? 'disableClass' : ''"  @click="previousIndex(index)">Previous</button>
        <button class="primary-button" :class="index === (data.length-1) ? 'disableClass' : ''"  @click="nextIndex(index)">Next</button>
        <button class="primary-button" :class="index <=8 ? 'disableClass' : ''" @click="changeRoute() " >View Result</button>
        </div>
    </div>
</template>

<script> 
 import {QuestionFooter} from './questionFooter'
 export default QuestionFooter;
</script>