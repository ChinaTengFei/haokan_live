<!--  -->
<template>
  <!-- <div style="background:#191919;">
    <div class="main" style="background:#191919;">
      <div class="team">
        <div>
          <span>{{ args.leftName }}</span>
          <span class="gamescore" v-if="ball.mh.home_first_part"
          ><em
          >{{ ball | homeTotalscore }} : {{ ball | awayTotalscore }}</em
          ></span
          >
          <span class="vs" v-else>vs</span>
          <span>{{ args.rightName }}</span>
        </div>
        <div class="handicap" v-if="params.type == 1">
          <div>
            <span>欧指</span>
            <span
            ><cite class="">{{ pankou["2"][0] || "-" }}</cite
            ><cite>{{ pankou["2"][1] || "-" }}</cite
            ><cite class="">{{ pankou["2"][2] || "-" }}</cite></span
            >
          </div>
          <div>
            <span>亚盘</span>
            <span
            ><cite class="">{{ pankou["1"][0] || "-" }}</cite
            ><cite>{{ pankou["1"][1] || "-" }}</cite
            ><cite class="">{{ pankou["1"][2] || "-" }}</cite></span
            >
          </div>
          <div>
            <span>大小盘</span>
            <span
            ><cite class="">{{ pankou["3"][0] || "-" }}</cite
            ><cite>{{ pankou["3"][1] || "-" }}</cite
            ><cite class="">{{ pankou["3"][2] || "-" }}</cite></span
            >
          </div>
        </div>
        <table class="handicap1" v-if="params.type == 2">
          <thead>
          <tr>
            <th scope="col" class="td1"><div>主队/客队</div></th>
            <th scope="col" class="tdb">1</th>
            <th scope="col" class="tdb">2</th>
            <th scope="col" class="tdb">3</th>
            <th scope="col" class="tdb">4</th>
            <th scope="col" class="tdb">OT</th>
            <th scope="col">全场</th>
            <th scope="col">欧指</th>
            <th scope="col">让分</th>
            <th scope="col">总分</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="td1">
              <div>{{ gameInformation.leftName }}</div>
            </td>
            <td class="tdb">{{ ball.mh.home_first_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.home_second_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.home_thirdly_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.home_fourthly_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.home_addtime_part || 0 }}</td>
            <td class="tdb">{{ ball | homeTotalscore }}</td>
            <td>{{ ball.s.p["2"][0] || "-" }}</td>
            <td>
          <tr class="tr1">
            <td>
              {{
                ball.s.p["1"][1]
                  ? ball.s.p["1"][1] == "0"
                  ? ""
                  : ball.s.p["1"][1]
                  : "-"
              }}
            </td>
            <td>
              {{
                ball.s.p["1"][0]
                  ? ball.s.p["1"][0] == "0"
                  ? ""
                  : ball.s.p["1"][0]
                  : "-"
              }}
            </td>
          </tr>
          </td>

          <td>
            <tr class="tr1">
              <td>
                {{ ball.s.p["3"][1] ? "大" + ball.s.p["3"][1] : "-" }}
              </td>
              <td>{{ ball.s.p["3"][0] || "-" }}</td>
            </tr>
          </td>
          </tr>
          <tr>
            <td class="td1">
              <div>{{ gameInformation.rightName }}</div>
            </td>
            <td class="tdb">{{ ball.mh.away_first_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.away_second_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.away_thirdly_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.away_fourthly_part || 0 }}</td>
            <td class="tdb">{{ ball.mh.away_addtime_part || 0 }}</td>
            <td class="tdb">{{ ball | awayTotalscore }}</td>
            <td>{{ ball.s.p["2"][2] || "-" }}</td>
            <td>
          <tr class="tr1">
            <td>
              {{
                ball.s.p["1"][3]
                  ? ball.s.p["1"][3] == "0"
                  ? ""
                  : ball.s.p["1"][3]
                  : "-"
              }}
            </td>
            <td>
              {{
                ball.s.p["1"][2]
                  ? ball.s.p["1"][2] == "0"
                  ? ""
                  : ball.s.p["1"][2]
                  : "-"
              }}
            </td>
          </tr>
          </td>

          <td>
            <tr class="tr1">
              <td>
                {{ ball.s.p["3"][1] ? "大" + ball.s.p["3"][1] : "-" }}
              </td>
              <td>{{ ball.s.p["3"][2] || "-" }}</td>
            </tr>
          </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="contest" v-if="params.status == 3">
        <p>比赛还未开赛，暂无好友分享</p>
      </div>
      <div class="result" v-if="params.status == 3">
        <div class="nation">
          <img />
          <span>{{ gameInformation.leftName }}</span>
        </div>
        <div class="vscenter">
          <div class="time">
            {{ gameInformation.sname }} {{ gameInformation.time1 }}
          </div>
          <div class="vs1">VS</div>
          <div class="started">未开赛</div>
        </div>
        <div class="nation">
          <img />
          <span>{{ gameInformation.rightName }}</span>
        </div>
      </div>
    </div>
    <div class="main-two">
      <iframe
        v-if="this.args.iframe_link"
        :src="this.args.iframe_link"
        width="100%"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        type="application/x-shockwave-flash"
        allowScriptAccess="sameDomain"
        quality="high"
        allow="autoplay"
        scrolling="no"
        border="0"
        frameborder="no"/>
      <div class="signalcall">
        <input
          type="text"
          :value="'http://www.515.tv/live/' + gameInformation.item.playid"
          id="linkInput"
          class="lianjie"
        />
        <button id="copybtn">复制</button>
      </div>
    </div>
    <div class="footer-wap">
      <p>好看体育——体育直播网站</p>
      <p>
        免责声明：本平台所有直播信号源均实时采集于互联网并作测试用途，本站不生产、不制作任何信号。
      </p>
    </div>
    <footer>
      <div>
        <span>Copyright©2020 好看体育</span><i></i>
        <p>
          免责声明：本平台所有直播信号源均实时采集于互联网并作测试用途，本站不生产、不制作任何信号。
        </p>
      </div>
    </footer>
    <div class="pcrlist">
      <div class="once appbtn hide">
        <i></i>
        <div class="hdiv">
          <p>925</p>
          <p>APP</p>
        </div>
      </div>
      <div class="indexbtn">
        <a href="/">
          <i></i>
          <span>回首页</span></a
        >
      </div>
      <div class="refreshbtn" onclick="location.reload()">
        <i></i>
        <span>刷新</span>
      </div>
    </div>
  </div> -->
  <div class="pre-content wrap">
        <h3>
                  {{ gameInformation.rightName }}   {{ args.leftName }} VS {{ args.rightName }}
                    </h3>
        <p class="timeP" data-type="1" data-date="1658403000">比赛时间：{{date}}</p>
        
        <div class="zbvideo-box clearfix">
            <div class="video-div fl" data-isonelocal="0" data-link="aHR0cHM6Ly93d3cua3RlMS50di9yb29tLzQzNDAwNQ%3D%3D" data-name="足球直播（外部）" data-limit="0">
            <iframe
        v-if="this.args.iframe_link"
        :src="this.args.iframe_link"
        width="100%"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        type="application/x-shockwave-flash"
        allowScriptAccess="sameDomain"
        quality="high"
        allow="autoplay"
        scrolling="no"
        border="0"
        frameborder="no"/>
            </div>

           <footer>
      <div>
        <span>Copyright©2020 好看体育</span><i></i>
        <p>
          免责声明：本平台所有直播信号源均实时采集于互联网并作测试用途，本站不生产、不制作任何信号。
        </p>
      </div>
    </footer>

        </div>
        

        
    </div>
</template>

<script>
// import axios from "axios";
export default {
  metaInfo() {
    const title =`${this.args.title}|${this.args.date}|【在线直播】-好看体育-世界杯直播_足球直播_NBA直播-好看的体育直播吧`;
    const keyWords = `${this.args.title}`;
    const description =
      `${this.args.date && this.args.date.slice(5, 11)}《${this.args.title}》${this.args.gameName}直播将在准时${this.args.date &&
      this.args.date.slice(11, 16)}在线直播，敬请关注`;
    return {
      title,
      meta: [
        {
          name: "keyWords",
          content: keyWords,
        },
        {
          name: "description",
          content: description,
        },
      ],
    };
  },
  filters: {
    homeTotalscore(ball) {
      if (!ball.mh.home_first_part) return 0;
      const {
        home_first_part,
        home_addtime_part,
        home_second_part,
        home_thirdly_part,
        home_fourthly_part,
      } = ball.mh;
      return (
        home_first_part * 1 +
        home_addtime_part * 1 +
        home_second_part * 1 +
        home_thirdly_part * 1 +
        home_fourthly_part * 1
      );
    },
    awayTotalscore(ball) {
      if (!ball.mh.away_addtime_part) return 0;
      const {
        away_addtime_part,
        away_first_part,
        away_second_part,
        away_thirdly_part,
        away_fourthly_part,
      } = ball.mh;
      return (
        away_addtime_part * 1 +
        away_first_part * 1 +
        away_second_part * 1 +
        away_thirdly_part * 1 +
        away_fourthly_part * 1
      );
    },
  },
  props:["args"],
  data() {
    return {
      scoreObj: {},
      params: {},
      gameInformation: {
        item: {},
      },
      ball: {
        mh: {},
        s: {
          y: {
            "1": [],
            "2": [],
            "3": [],
          },
          p: {
            "1": [],
            "2": [],
            "3": [],
          },
        },
      },
      time: "",
      pankou: { "1": [], "2": [], "3": [] },
      timer: "",
      item:"",
      date:""
    };
  },

  created() {
    this.title = this.$route.query.title;
this.date = this.$route.query.date;
    this.getList();
  },
  methods: {
    getList() {
      this.getMatch();
      this.timer = setInterval(() => {
        this.getMatch();
      }, 3000);
    },
    getMatch() {
      // if (this.params.status == 3 || this.params.status == 2) {
      //   const t0 = +new Date(this.gameInformation.time);
      //   const t1 = +new Date();
      //   if (t0 < t1) {
      //     this.params.status = 2;
      //     const time = Math.floor((t1 - t0) / 1000 / 60);
      //     this.time = time > 90 ? "90+" : time;
      //   }
      // }
      // axios
      //   .post(
      //     "http://8.218.116.109/api/match",
      //     `act=2&cid=${this.item.id}&sign=cl2iNsvtc2m0U2O0O0O2`
      //   )
      //   .then((res) => {
      //     if (res.status == 200) {
      //       this.scoreObj = res.data.mh || {};
      //       if (this.gameInformation.aw) {
      //         this.gameInformation.dt = this.scoreObj.home_score;
      //         this.gameInformation.vz = this.scoreObj.away_score;
      //         this.ball = res.data;
      //         this.pankou = res.data.s
      //           ? res.data.s.d
      //             ? res.data.s.d
      //             : { "1": [], "2": [],  "3": [] }
      //           : { "1": [], "2": [],"3": [] };
      //       }
      //     }
      //   });
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.main {
  margin-top: 0;
  height: fit-content;
  padding-bottom: 0 !important;
}
footer {
  border-top: 0 !important;
}

.team {
  width: 100%;
  margin: 0 auto;
  background-color: #3d3d44;
  padding: 15px 0;
  text-align: center;
  overflow: hidden;
  max-width: 960px;
  color: rgb(232, 230, 227);
  font-size: 23px;
  line-height: 20px;
  font-weight: 700;
}
.handicap {
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  margin-top: 10px;
  color: var(--darkreader-inline-color) !important;
  font-size: 14px;
}
.handicap1 {
  /* background-color : #FFFFFF; */
  margin: 0 auto;
  color: #bdbebe;
  font-size: 12px;
  font-weight: 400;
  width: calc(100% - 20px);
  margin: 0 10px;
  margin-top: 10px;
}
.handicap1 thead th,
.handicap1 tbody > tr > td {
  border: 1px solid rgb(113, 105, 93);
}
.tdb {
  border: 0 !important;
  border-bottom: 1px solid rgb(113, 105, 93) !important;
  border-top: 1px solid rgb(113, 105, 93) !important;
}

.handicap > div span:first-of-type {
  margin-right: 10px;
}

.team .vs {
  margin: 0 10px;
}
.contest {
  display: flex;
  font-size: 16px;
  width: 100%;
  margin: 0 auto;
  background-color: #1f2122;
  padding: 15px 0;
  text-align: left;
  overflow: hidden;
  max-width: 960px;
  color: #df685a;
  box-sizing: border-box;
  padding-left: 30px;
}
.result {
  display: flex;
  align-items: center;
  max-width: 960px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  height: 461px;
  color: #e4e2df;
  background-color: #000000;
}
.nation {
  font-size: 22px;
}
.vscenter {
  margin: 0 80px;
  color: #a7a096;
}
.vscenter .time {
  font-size: 14px;
}
.vscenter .vs1 {
  font-size: 20px;
  text-align: center;
  margin: 30px 0;
}
.vscenter .started {
  background-color: #a82521;
  padding: 6px 20px;
  border-radius: 6px;
  width: fit-content;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
}
.tr1 {
  display: flex;
  justify-content: space-around;
}
@media screen and (min-width: 750px) {
  .tr1 td {
    flex: 1;
  }
  .indexbtn {
    display: block;
  }
  body {
    background: #191919 !important;
  }
  footer {
    background: #ffffff !important;
    color: #7e7e7e;
    border-top: 0px;
  }
  .main-two {
    background: #26262b !important;
    color: #dddddd;
  }
}

@media screen and (max-width: 750px) {
  .team {
    font-size: 15px;
  }
  .vscenter {
    margin: 0 !important ;
    color: #a7a096;
  }
  .nation {
    font-size: 16px !important;
    width: 110px;
  }
  .td1 div {
    width: 3em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .tdb {
    padding: 0 4px;
  }

  .tr1 {
    justify-content: space-between;
    padding: 0 4px;
  }
  .contest {
    padding-left: 10px;
    font-size: 14px;
  }
  .waplist {
    bottom: 10rem;
  }
  iframe {
    height: 35rem;
  }
}

.waplist .indexwap {
  display: block;
}
.biaoti {
  font-size: 22px;
  font-weight: 500;
  line-height: 36px;
  padding-left: 10px;
  width: 96%;
  padding-top: 16px;
}
iframe {
  background-color: #26262b;
}
.gamescore {
  font-size: 23px;
  color: #00bcb4;
  font-weight: 600;
  margin: 0 12px;
}
</style>

