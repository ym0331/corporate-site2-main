<template>
  <div class="full">
    <div class="img01"></div>
    <div class="img02"></div>
    <div class="img03"></div>
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";

export default {
  mounted: function() {
    $(".full").slick({
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1500,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false
    });
  }
};
</script>

<style scoped>
.full div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 88vh;
  margin: 0;
}
.full div.img01 {
  background-image: url("../../../public/img/mainvisual1.jpg");
}
.full div.img02 {
  background-image: url("../../../public/img/mainvisual2.jpg");
}
.full div.img03 {
  background-image: url("../../../public/img/mainvisual3.jpg");
}
</style>