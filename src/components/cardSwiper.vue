<!--
 * @Descripttion: 卡片轮播
 * @version: 
 * @Date: 2020-09-02
-->
<!--
 * 使用方法：
    cardSwiperData: Array
-->
<template>
  <div>
    <v-touch
      v-on:swipeleft="onSwipeLeft"
      v-on:swiperight="onSwipeRight"
      tag="div"
    >
      <div class="banner">
        <!-- 第三张 -->
        <div class="bannerItem bannerItem01">
          <img
            v-if="cardIndex == cardSwiperData.length - 2"
            :src="cardSwiperData[0].img"
            alt=""
          />
          <img
            v-else-if="cardIndex == cardSwiperData.length - 1"
            :src="cardSwiperData[1].img"
            alt=""
          />
          <img v-else :src="cardSwiperData[cardIndex + 2].img" alt="" />
        </div>
        <!-- 第二张 -->
        <div class="bannerItem bannerItem02">
          <img
            v-if="cardIndex == cardSwiperData.length - 1"
            :src="cardSwiperData[0].img"
            alt=""
          />

          <img v-else :src="cardSwiperData[cardIndex + 1].img" alt="" />
        </div>
        <!-- 第一张 -->
        <div class="bannerItem bannerItem03">
          <transition name="fade">
            <img
              :class="{ active: animateTouch }"
              :src="cardSwiperData[cardIndex].img"
              alt=""
            />
          </transition>
        </div>
      </div>
    </v-touch>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cardSwiperData: Array
  },
  data() {
    return {
      
      // 轮播索引
      cardIndex: 0,
      timer: null, //定时器
      animateTouch: false
    }
  },
  computed: {
    //上一张
    prevIndex() {
      if (this.cardIndex == 0) {
        this.animateTouch = false
        return this.cardSwiperData.length - 1
      } else {
        this.animateTouch = false
        return this.cardIndex - 1
      }
    },
    //下一张
    nextIndex() {
      if (this.cardIndex == this.cardSwiperData.length - 1) {
        return 0
      } else {
        return this.cardIndex + 1
      }
    }
  },
  watch: {
    // animateTouch: function(val) {
    //   this.animateTouch = false
    // },
    // cardIndex: function(val) {
    //   this.animateTouch = true
    // }
  },
  created() {},
  mounted() {
    // this.runInv()
  },
  beforeUpdate() {},
  updated() {
    // this.animateTouch = false
  },
  methods: {
    gotoPage(index) {
      this.cardIndex = index
      // console.log('this.cardIndex', this.cardIndex)
      // console.log('123123', this.cardSwiperData[this.cardIndex].img)
    },
    //定时器
    runInv() {
      this.timer = setInterval(() => {
        this.animateTouch = true
        this.gotoPage(this.nextIndex)
      }, 2000)
    },
    onSwipeLeft() {
      //左滑动
      // console.log('左滑动')
      this.gotoPage(this.nextIndex)
      this.animateTouch = true
      let time = setTimeout(() => {
        this.animateTouch = false
        clearTimeout(time)
      }, 1000)
    },
    onSwipeRight() {
      //右滑动
      // console.log('右滑动')
      this.gotoPage(this.prevIndex)
      this.animateTouch = true
      let time = setTimeout(() => {
        this.animateTouch = false
        clearTimeout(time)
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
@number: 20;
@size: 750px / @number;
.banner {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  height: 282rem / @size;
  // 轮播小点动画
  @keyframes myclick {
    from {
      width: 95%;
      height: 226rem / @size;
      transition-duration: 1s;
      /*     以下三值为默认值，稍后会详细介绍 */
      transition-property: all;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
    to {
      width: 100%;
      height: 246rem / @size;
    }
  }
  .active {
    animation: myclick 0.3s ease-in;
    animation-fill-mode: forwards;
  }
  .bannerItem {
    position: absolute;
    width: 90%;
    // background-color: #f00;
    img {
      width: 100%;
      height: 246rem / @size;
      box-shadow: 0 0 10rem / @size rgba(5, 60, 129, 0.2);
      transition-duration: 1s;
      /*     以下三值为默认值，稍后会详细介绍 */
      transition-property: all;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
  }
  .bannerItem01 {
    right: 0;
    text-align: right;
    img {
      width: 95%;
      height: 226rem / @size;
    }
  }
  .bannerItem02 {
    right: 5%;
    top: 18rem / @size;
    text-align: right;
    img {
      width: 95%;
      height: 226rem / @size;
    }
  }
  .bannerItem03 {
    top: 36rem / @size;
  }
}
</style>
