<template>
  <div>
    <ListPage :listdata="netData.live_item"/>
  </div>
</template>


<script>
// import ListPage from "~/components/listPage";

export default {
  name: 'HomeChild',
  // components: {ListPage},
  async asyncData({$axios}) {
    const netData = await $axios.post(
      process.env.VUE_APP_BASE_URL + "/index",
      `s=0&t=1&a=0&g=1`)

    if (netData.status === 200) {
      return {"netData":netData.data}
    } else {
      return Promise.reject(netData)
    }
  }

}


</script>
