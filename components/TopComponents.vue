<template>
    <header>
      <div class='head-main'>
        <span class='head_main_img'><img src='/img/logon.png' alt='515直播logo'></span>
<!--        <div @click='showSelect' class='zhti_qiehuan_wrap'>-->
<!--          <p class='zhti_qiehuan_top'>-->
<!--            <span>绿色主题</span>-->
<!--            <img src='/img/zhutx.png'>-->
<!--          </p>-->
<!--          <ul v-if='showUl' class='zhti_qiehuan' show='1'>-->
<!--            <li @click="showTheme('green')" value='green'>绿色主题</li>-->
<!--            <li @click="showTheme('red')" value='red'>红色主题</li>-->
<!--            <li @click="showTheme('yellow')" value='yellow'>黄色主题</li>-->
<!--            <li @click="showTheme('blue')" value='blue'>蓝色主题</li>-->
<!--          </ul>-->
<!--        </div>-->
      </div>
    </header>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      showUl: false,
      isActive: 1
    }
  },
  methods: {

    selectTab(val){
      this.isActive=val
    },
    showSelect() {
      this.showUl = !this.showUl
    },
    showTheme(value) {
      document.getElementsByTagName('body')[0].id = value
    }
  }
}
</script>
<style>
</style>
