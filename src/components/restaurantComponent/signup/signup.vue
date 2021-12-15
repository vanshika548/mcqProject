<template>
    <div class="info">
        <div class="info1">
            <label>Enter Name : </label>
            <input type="text">
        </div>
        <div class="info2" >
            <label>Enter Email : </label>
            <input type="text">
        </div>
        <div class="info3">
            <label>Enter Password : </label>
            <input type="text">
        </div>
        <button class="btn"> Signup</button>
    </div>
</template>
<script>
import {signup} from './signup'
export default signup
</script>
<style lang="less" src ="./signup.less">
</style>


