<template>
  <!-- <v-row >
    <v-col v-for="item in items" :key="item" class="slideshow d-flex child-flex">
      <v-img :src="item" class="content"></v-img>
    </v-col>
  </v-row>-->

  <!-- <div class="wrap">
    <ul class="slideshow">
        <li class="content">tomato</li>
        <li class="content">orange</li>
        <li class="content">blue</li>
        <li class="content">green</li>
    </ul>
    <ul class="slideshow">
        <li class="content">tomato</li>
        <li class="content">orange</li>
        <li class="content">blue</li>
        <li class="content">green</li>
    </ul>
    <ul class="slideshow">
        <li class="content">tomato</li>
        <li class="content">orange</li>
        <li class="content">blue</li>
        <li class="content">green</li>
    </ul>
  </div>-->

  <!-- <div class="slider d-flex">
    <div v-for="item in items" :key="item" class="slider-wrap child-flex">
      <div class="slide">
        <v-img :src="item" class="content"></v-img>
      </div>
      <div class="slide">
        <v-img :src="item" class="content"></v-img>
      </div>
            <div class="slide">
        <v-img :src="item" class="content"></v-img>
      </div>
    </div>
  </div> -->


    <div class="wrap">
    <ul class="slideshow" v-for="item in items" :key="item" >
        <img :src="item" class="content">
    </ul>
    <ul class="slideshow" v-for="item in items" :key="item" >
        <img :src="item" class="content">
    </ul>
    <ul class="slideshow" v-for="item in items" :key="item" >
        <img :src="item" class="content">
    </ul>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: 30vh;
  /* overflow: hidden; */
  position: relative;
}
.slider-wrap {
  animation: scroll 20s infinite linear 1s both;
  width: calc(250px * 6);
  height: 100%;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 3));
  }
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide {
  width: 250px;
  height: 100%;
  text-align: center;
  padding: 0 10px;
}

.wrap {
  display: flex;
  align-items: center;
  height: 340px;
  overflow: hidden;
}
.slideshow {
  display: flex;
}
.content {
  width: 300px;
  height: 300px;
}
.content:nth-child(1) {
  background-color: tomato;
}
.content:nth-child(2) {
  background-color: orange;
}
.content:nth-child(3) {
  background-color: blue;
}
.content:nth-child(4) {
  background-color: green;
}
.slideshow {
  display: flex;
  animation: loop-slide 20s infinite linear 1s both;
}
@keyframes loop-slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>