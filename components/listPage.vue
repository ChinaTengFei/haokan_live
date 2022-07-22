<template>
  <div>
    <div v-if="listDatas" class="list_content">

      <div v-for="(item, index) in listDatas" :key="index">
        <p v-if="item.segmdate" class="date-p">
          <i></i>
          {{ item.segmdate }}
        </p>


        <a
          :class="{ bgc1: item.isTop == '1' }"
          class="clearfix" style="border-bottom: 1px solid #eee"
          :href="'/bofang?iframe_link='+item.iframeLink+
          '&leftName='+item.leftName+
          '&title='+item.a+
          '&gameName='+item.gameName+
          '&rightName='+item.rightName+
          '&date='+item.date">

          <section :class="{ zhiding: item.isTop === '1' }" class="clearfix jiabifeng"

                   wuyd="">
            <!-- <div v-if="item.ms" class="changci" style="display: block;">
              {{ item.ms }}
              <cite class="noks"></cite>
            </div> -->

            <!-- <div v-if="[item.playId] && scoreObj[[item.matchId]]" class="bifeng" style="display: block;">
              <em class="zq_zdf no">{{ scoreObj[item.matchId].dt }}</em> : <em
              class="zq_kdf no">{{ scoreObj[[item.matchId]].vz }}</em>
              VS
            </div> -->
           
            <!-- <p v-else class="vsp" style="color: #999">VS</p> -->
             <!-- <div class="vsp">
               <p>{{ item.leftName }}
             </div> -->
                 <div class=" zhudui ">
              <!-- <span>
                <img :src="item.leftImg" alt class>
              </span> -->
              {{ item.a.split(" ")[0] }} 
            
            </div>
            <div class=" zhudui " :style="{
                  'fontWeight':(comparedate(item.date)?'bold':'')
                }" >
              <!-- <span>
                <img :src="item.leftImg" alt class>
              </span> -->
              {{ item.leftName }} VS {{ item.rightName }}
            
            </div>
            <div class="center">
              <p class="eventtime_wuy eventtime"><span class="feleimg" :class="item.gameType == 1?'football':'basketball'">
                 
									</span>
                <span>
                 
                  <i>{{ item.isTop === "0" ? item.date.split(" ")[1].slice(0, 5) : item.date.slice(5, 16) }}</i>
                </span>
                 <!-- <em>{{item.gameName}}</em> -->
              </p>
              <p :class="{
                  zb_green: comparedate(item.date),
                }" class="video"><i class="video-icon"></i><span>视频直播</span></p>
            </div>
            <!-- <div class="team kedui">
              <span>

              <img :src="item.rightImg" alt class>
              </span>
              <p>{{ item.rightName }}</p>
            </div> -->
          </section>

        </a>
      </div>
    </div>
    <div v-else class="list_content">
      <div class="no-data">
        <div class="zwsig"></div>
        <p>当前暂无数据</p>
      </div>
    </div>
    <div
      v-if="listDatas && listDatas.length > 0 && more"
      @click="loadMore"
      class="clcik_more"
    >
      点击加载更多>>
    </div>
    <div  v-if="listDatas && listDatas.length > 0 && !more" class="clcik_more">
      没有更多数据了
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  props: {
    listdata:[]
  },
  data() {
    return {
      more: true,
      listDatas: this.listdata,
      page: 1,
      scoreObj: {},
    };
  },
  beforeMount() {
    this.initData()
    this.getMatch()
  },

  methods: {
    parseMatch(data) {
      if(!this.listDatas){
        return
      }
      this.scoreObj = data ? (data["1"] ? data["1"] : {}) : {};

      this.listDatas.forEach((item) => {
        let matchData = this.scoreObj[item.matchId]

        if (matchData) {
          const t0 = +new Date(item.date);
          const t1 = +new Date();
          if (t0 < t1) {
            const time = Math.floor((t1 - t0) / 1000 / 60);
            item.ms = time > 90 ? "90+" : time;

          }
        }
      });
    },
    getMatch() {
      this.timer = setInterval(() => {
        axios
          .post(
            "https://kgeqiu.com/api/match",
            "act=1&sign=cl2iNsvtc2m0U2O0O0O2"
          )
          .then((res) => {
            this.scoreInfo = res.data.result;
            this.parseMatch(res.data.result)
          });
      }, 3000);
    },
    loadMore() {
      this.page++;
      this.getData();
    },
    initData(){
      if (!this.listDatas) {
        return
      }
      const listDatas1 = this.listDatas.filter((v) => v.isTop === "1");
      const listDatas2 = this.listDatas.filter((v) => v.isTop !== "1");

      this.listDatas = [...listDatas1, ...listDatas2];
      let date = "";
      // 置顶时间判断
      this.listDatas.forEach((v) => {
        if (v.isTop === "0") {
          const date1 = v.date.split(" ")[0];
          if (date !== date1) {
            date = date1;
            v.segmdate = date;
          }
        }
      })
    },
    getData() {
      axios
        .post(
          "https://kgeqiu.com/api/index",
          `s=0&t=1&a=${this.type}&g=${this.page}`
        )
        .then((response) => {

          if (response.data.messs) {
            this.more = false;
            return;
          }

          this.listDatas.push(...response.data.live_item);
          const listDatas1 = this.listDatas.filter((v) => v.m == "1");
          const listDatas2 = this.listDatas.filter((v) => v.m != "1");

          this.listDatas = [...listDatas1, ...listDatas2];
          console.log('ssssssss',this.listDatas)
          let date = "";
          // 置顶时间判断
          this.listDatas.forEach((v) => {
            if (v.isTop === "0") {
              const date1 = v.date.split(" ")[0];
              if (date !== date1) {
                date = date1;
                v.segmdate = date;
              }
            }
          })
        })
    },
    comparedate(date1) {
      let date = new Date(date1);
      let now = new Date();
      return date.getTime() < now.getTime();
    },
    jumpPlay(item) {
      let path = "/bofang";
      this.$router.push({
        path:path,
        query: {
          iframe_link: item.iframeLink,
          leftName: item.leftName,

          title: item.a,
          gameName: item.gameName,
          date: item.date,
          rightName: item.rightName,
        }
      });
    },
  },
};
</script>
