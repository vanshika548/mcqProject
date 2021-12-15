<template>
<div>
    <h1>Result Component</h1>
    <table border="1">
        <thead>
            <th>Sr no</th>
            <th>Question Id</th>
            <th>Question Title</th>
            <th>Question Response</th>
        </thead>
        <tbody>
            <tr v-for="(question,index) in reviewAns" :key="index">
                <td>{{index+1}}</td>
                <td>{{question.questionId}}</td>
                <td>{{question.questionTitle}}</td>
                <td>{{question.response}}</td>
            </tr>
        </tbody>
        
    </table>
    <!-- <h1 v-for="(event) in selectAnswers" v-bind:key="event">{{event}}</h1> -->
    
</div>
    
</template>
<script>
import {reviewResponse} from './reviewResponse'
export default reviewResponse
</script>
