<template>
    <div>
        卡片轮播
        <cardSwiper :cardSwiperData="cardSwiperData"/>
    </div>
</template>

<script>
import cardSwiper from '../components/cardSwiper'
export default {
    created(){},
    data(){
        return {
            //轮播数据
      cardSwiperData: [
        {
          img: require('@/assets/img/hpDeatilsXq/banner00.png')
        },
        {
          img: require('@/assets/img/hpDeatilsXq/banner01.png')
        },
        {
          img: require('@/assets/img/hpDeatilsXq/banner02.png')
        }
      ],
        }
    },
    methods:{},
    components:{
        cardSwiper
    },
    filters:{},
}
</script>

<style lang="less" scoped>
div {
    text-align: center;
    
}
</style>
