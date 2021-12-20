<template>
    <div class="content">
      <div class="flex-div">
        <div class="name-content">
          <h1 class="logo">To-do List</h1>
          <p>Make yourself Productive</p>
        </div>
          <form>
              <ul v-for="err in error" :key="err">
                  <li>{{err}}</li>
              </ul>
            <input type="text" placeholder="Email or Phone Number" id="email" ref="email" v-model="userDetails.email" :class="[userDetails.email === '' ? 'red' : '']" />
            <input type="password" placeholder="Password" id="password" v-model="userDetails.password" :class="[userDetails.password==='' ? 'red' : '']">
            <button class="login" @click="signup()">Log In</button>
            <a href="#">Forgot Password ?</a>
            <hr>
            <button class="create-account" @click="signup()">Create New Account</button>
          </form>
      </div>
    </div>
</template>

<script>
import {signup} from './signup'
export default signup
</script>
<style lang="less" src ="./signup.less">
</style>


