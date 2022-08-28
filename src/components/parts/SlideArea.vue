<template>
  <ul class="slider">
    <li v-for="item in items" :key="item">
      <img :src="item" />
    </li>
  </ul>
</template>

<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";

export default {
  data() {
    return {
      items: [
        "/img/constructionExample1.jpg",
        "/img/constructionExample2.jpg",
        "/img/constructionExample3.jpg",
        "/img/constructionExample4.jpg",
        "/img/constructionExample5.jpg",
        "/img/constructionExample6.jpg"
      ]
    };
  },
  mounted: function() {
    $(".slider").slick({
      arrows: false, //左右の矢印はなし
      autoplay: true, //自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 0, //自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
      speed: 10000, //スライドのスピード。初期値は300。
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      pauseOnHover: false, //オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
      pauseOnFocus: false, //フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
      cssEase: "linear", //動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
      slidesToShow: 4, //スライドを画面に4枚見せる
      slidesToScroll: 1, //1回のスライドで動かす要素数
      responsive: [
        {
          breakpoint: 769, //モニターの横幅が769px以下の見せ方
          settings: {
            slidesToShow: 2 //スライドを画面に2枚見せる
          }
        },
        {
          breakpoint: 426, //モニターの横幅が426px以下の見せ方
          settings: {
            slidesToShow: 1.5 //スライドを画面に1.5枚見せる
          }
        }
      ]
    });
  }
};
</script>

<style scoped>
.slider {
  margin-bottom: 50px;
}

.slider img {
  width: 100%; /*スライダー内の画像を横幅100%に*/
  height: auto;
  padding: 0 10px;
}

/*slickのJSで書かれるタグ内、スライド左右の余白調整*/

.slider .slick-slide {
  margin: 0 10px; /*スライド左右の余白調整*/
}
</style>