<template>
  <div>
    <TopComponents/>
    <div class="bifeng_zhishu">
      <div class="bifeng_switch">
        <div class="bfonoff">
          <div isopen="false" class="btnn"></div>
        </div>
      </div>
      <div class="bifeng_zhishu_zhu">
        <div class="bifeng_shuju">
          <p class="bs_fenl_sj bs_fenl_sj_new">
            <span class="xq_fenlei_img"><img src="http://www.515.tv/~static/www/img/fenlei_1.png"> </span>
            <span class="xq_fenlei_name">韩K联&nbsp;&nbsp;19:00 </span>
          </p>
          <p class="bs_time"></p>
          <div class="bs_bt_title">
            <p class="weikan">  大邱FC<span>vs</span> 蔚山现代<span>(韩K联)</span></p>
            <div class="yikaisai yikaisai_new">
              <cite class="ks_zhumc">大邱FC</cite>
              <div class="ks_vs_new_wrap">
                <span class="bs_time_new"></span>
                <span class="ks_vs ks_vs_new">vs</span>
              </div>
              <cite class="ks_kemc">蔚山现代</cite>
            </div>
          </div>
          <div class="bifeng_pei bifeng_pei_new">
            <p class="zhu_peiqiu redyellow_p">
              <span class="jiaoq"><i><img src="http://www.515.tv/~static/www/img/jiao.png"></i> <em>-</em></span>
              <span class="redp"><i><img src="http://www.515.tv/~static/www/img/redpei.png"></i><em>-</em></span>
              <span class="yellowp"><i><img src="http://www.515.tv/~static/www/img/yellow.png"></i><em>-</em></span>
            </p>
            <!-- <p class="bs_befeng"></p> -->
            <p class="ke_peiqiu redyellow_p">
              <span class="yellowp"><em>-</em><i><img src="http://www.515.tv/~static/www/img/yellow.png"></i></span>
              <span class="redp"><em>-</em><i><img src="http://www.515.tv/~static/www/img/redpei.png"></i></span>
              <span class="jiaoq"><em>-</em><i><img src="http://www.515.tv/~static/www/img/jiao.png"></i> </span>
            </p>
          </div>


        </div>
      </div>

      <!--指数 begin-->
      <div class="zhulanzhishu">
        <div class="zhishu">
          <div class="jscs_num oupei_z">
            <span>欧指</span>
            <p class="oz_num"><cite>-</cite><cite>-</cite><cite>-</cite></p>
            <p class="oz_fpan"></p>
          </div>
          <div class="jscs_num yapan_z">
            <span>亚盘</span>
            <p class="oz_num"><cite>-</cite><cite>-</cite><cite>-</cite></p>
            <p class="oz_fpan"></p>
          </div>
          <div class="jscs_num daxiao_z">
            <span>大小盘</span>
            <p class="oz_num"><cite>-</cite><cite>-</cite><cite>-</cite></p>
            <p class="oz_fpan"></p>
          </div>
        </div>
        <!--指数 end-->
      </div>
    </div>
    <Play :args="args"></Play>
  </div>
</template>

<script>
// import Play from "@/components/Play";
import TopComponents from "@/components/TopComponents";
export default {
  components:{TopComponents},
  name: "bofang",
  head() {
    // 07月10日《爱沙甲 帕尔努瓦普鲁斯VS纳尔瓦》爱沙甲直播将在12:00准时在线直播，敬请关注。
  //  《球会友谊 索契VS莫斯科中央陆军》直播看球直播将在准时在线直播，敬请关注
    const title =this.args.title+'|'+this.args.date+'|【在线直播】-515.Tv直播';

    const keyWords = this.args.title;
    const description =
      this.args.date.slice(5, 11)+'《'+this.args.title+'》'+
      this.args.gameName+'直播将在准时'+this.args.date.slice(11, 16)+'在线直播，敬请关注';

      return {
        title:  title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: description
      },
        {
          hid: 'keywords',
          name: 'keywords',
          content: keyWords
        },
      ]
    }
  },
  asyncData({params,query}) {
    return {"args":query}
  }
}
</script>
