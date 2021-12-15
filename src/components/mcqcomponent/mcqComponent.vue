<template>
    <div>
       
        <div class="content-container">
      <div class="panel-left question-container-left" style="width : 70%" >
        <h2>Questionnaire</h2>
        <div class="container-inner" >
          <div class="question-section" v-for="(question,   index) in data" :key="index">
            <div v-if="question.isShow">
              <h4></h4>
            <p>
              {{ question.questionTitle }}
            </p>
            
            <!-- <ul>
              <li v-for="(res, ind) in question.responseSet"
                :value="res"
                :key="index + ind"  >
                <label>
                <input type="radio" :value="res" v-model="selectAnswers[index]" @change="selectQuestion(index,ind )"/>
                {{ res }}</label>
                </li>
            </ul> -->
            <qustion-response :questionRespnse="question" :index="index" :selectAnswers="selectAnswers" @currentSelection="selectQuestion" ></qustion-response>
            <!-- <div class="question-footer">
              <div class="footer-left">Question {{index+1}} of {{data.length}}</div>

              <div class="footer-right">
                <button class="transparent-button" :class="index === 0 ? 'disableClass' : ''"  @click="previousQuestion(index)">Previous</button>
                <button class="primary-button" :class="index === (data.length-1) ? 'disableClass' : ''"  @click="nextQuestion(index)">Next</button>
              </div>
            </div> -->

            <qustion-footer :index="index" :data="data" @anyPreviousIndex="anyPreviousIndex" @anyNextIndex="anyNextIndex" :selectAnswers="selectAnswers"></qustion-footer>
            
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- <div v-if="someCondtion">
            //when the condition suffice
        </div>
        <div v-else-if="doSomeOtherChecks">
            //put your other conditions over here
        </div>
        <div v-else>
            else block
        </div> -->
    </div>

</template>

<script> 
 import {MCQComponent} from './mcqComponent'
 export default MCQComponent;
</script>
<style lang="less" src="./style.less"></style>