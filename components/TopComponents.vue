<template>
  <header>
    <div class="heading"> <h1 style="margin-top: 4px">
      <a href="//www.haokantiyu.com/" title="好看体育"
        ><img
          src="//www.haokantiyu.com/~static/www/img/logo_June.png?r=51"
          alt="好看体育logo"
          style="width: 190px; height: auto; margin-top: 10px"
      /></a>
    </h1></div>
   
  </header>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      showUl: false,
      isActive: 1,
    };
  },
  methods: {
    selectTab(val) {
      this.isActive = val;
    },
    showSelect() {
      this.showUl = !this.showUl;
    },
    showTheme(value) {
      document.getElementsByTagName("body")[0].id = value;
    },
  },
};
</script>
<style>
</style>
