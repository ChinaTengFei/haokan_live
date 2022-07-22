<template>
  <div>
    <TopComponents />
    <!-- <div class="top-div">
      <span class="newyearl"></span>
      <ul class="index-nav clearfix navindex head-nav">
        <li :class="$route.path == '/' ? 'active' : ''">
          <a href="/">
            <span>热门</span>
          </a>
        </li>

        <li :class="$route.path == '/zuqiu' ? 'active' : ''">
          <a href="/zuqiu">
            <span>足球</span>
          </a>
        </li>
        <li :class="$route.path == '/lanqiu' ? 'active' : ''">
          <a href="/lanqiu">
            <span>篮球</span>
          </a>
        </li>
        <li :class="$route.path == '/tiyu' ? 'active' : ''">
          <a href="/tiyu"> <span>体育</span> </a>
        </li>
        <li :class="$route.path == '/dianjing' ? 'active' : ''">
          <a href="/dianjing">
            <span>电竞</span>
          </a>
        </li>
      </ul>
      <span class="newyearr"></span>
    </div> -->
    <nav>
		      <ul class="index-nav clearfix navindex head-nav">
        <li :class="$route.path == '/' ? 'active' : ''">
          <a href="/">
            <span>热门</span>
          </a>
        </li>

        <li :class="$route.path == '/zuqiu' ? 'active' : ''">
          <a href="/zuqiu">
            <span>足球</span>
          </a>
        </li>
        <li :class="$route.path == '/lanqiu' ? 'active' : ''">
          <a href="/lanqiu">
            <span>篮球</span>
          </a>
        </li>
        <li :class="$route.path == '/tiyu' ? 'active' : ''">
          <a href="/tiyu"> <span>体育</span> </a>
        </li>
        <li :class="$route.path == '/dianjing' ? 'active' : ''">
          <a href="/dianjing">
            <span>电竞</span>
          </a>
        </li>
      </ul>
	</nav>
    <div class="main">
      <div
        class="index-div"
        zssyhqz="54334cl2iNsvtc2m0U2O0O0O258"
        zssyhqzt="80604cl2iNsvtc2m0V2z210"
      >
        <div class="list_wrap_one_wuy list_wrap list_wrap_one" yn="1">
          <nuxt-child />
        </div>
      </div>
      <div class="iosKJ">
        <span class="iostipimg"></span>
        <p>×</p>
        <i></i>
      </div>
    </div>
    <div class="pcrlist">
      <div class="once appbtn hide">
        <i></i>
        <div class="hdiv">
          <p>925</p>
          <p>APP</p>
        </div>
      </div>
      <div class="indexbtn">
        <a href="http://www.515.tv/">
          <i></i>
          <span>回首页</span></a
        >
      </div>
      <div class="refreshbtn" onclick="location.reload()">
        <i></i>
        <span>刷新</span>
      </div>
      <div class="totop" onclick="window.scrollTo(0,0)">
        <i></i>
        <span>回顶部</span>
      </div>
    </div>
    <div class="waplist">
      <div class="once indexwap">
        <a href="/">
          <i></i>
          <p>首页</p>
        </a>
      </div>
      <div class="once refreshwap" onclick="location.reload()">
        <i></i>
        <p>刷新</p>
      </div>
      <div
        class="once totop"
        onclick="window.scrollTo(0,0)"
        style="display: block"
      >
        <i></i>
      </div>
    </div>
    <div class="footer-wap">
      <p>515直播——体育直播网站</p>
      <p>
        免责声明：本平台所有直播信号源均实时采集于互联网并作测试用途，本站不生产、不制作任何信号。
      </p>
    </div>
    <footer>
      <div>
        <span>Copyright©2020 515直播</span><i></i>
        <p>
          免责声明：本平台所有直播信号源均实时采集于互联网并作测试用途，本站不生产、不制作任何信号。
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import TopComponents from "@/components/TopComponents";
import listPage from "./listPage";

export default {
  name: "Home",
  components: { TopComponents, listPage },
  metaInfo() {
    return {
      title: "515直播-JRS直播,足球直播,NBA直播吧,低调看直播",
      meta: [
        {
          name: "keyWords",
          content: "JRS直播,足球直播,低调看直播,NBA直播吧",
        },
        {
          name: "description",
          content:
            "515直播（515.TV）是最好的低调看JRS直播吧，提供足球直播、NBA直播，英超直播、西甲直播、欧洲杯直播。看球就来515.TV直播导航站。",
        },
      ],
    };
  },
  data() {
    return {
      showUl: false,
      scoreInfo: {},
      timer: "",
    };
  },
  created() {
    this._getMatch();
  },
  mounted() {},
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    _getMatch() {
      this.getMatch();
      this.timer = setInterval(() => {
        this.getMatch();
      }, 3000);
    },
    getMatch() {
      // axios
      //   .post(
      //     process.env.VUE_APP_BASE_URL+"/match",
      //     "act=1&sign=cl2iNsvtc2m0U2O0O0O2"
      //   )
      //   .then((res) => {
      //     this.scoreInfo = res.data.result;
      //   });
    },

    selectTab(val) {},
    showSelect() {
      this.showUl = !this.showUl;
    },
    showTheme(value) {
      document.getElementsByTagName("body")[0].id = value;
    },
  },
};
</script>

<script>
export default {
  name: "IndexPage",
};
</script>
