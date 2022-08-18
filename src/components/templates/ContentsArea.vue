<template>
  <div>
    <!-- <CarouselView /> -->
    <!-- <v-img src="/img/piano.jpg"></v-img> -->
    <transition-group tag="ul" name="list">
      <li v-for="content in contents" :key="content" :id="content">
        <!-- <div v-motion-pop-visible> -->
        <div>
          <h2><p class="is-big">{{ content.name }}</p><p class="is-small">{{ content.name2 }}</p></h2>
          <component :is="content.name"></component>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
// import CarouselView from "@/components/parts/CarouselView.vue";

import Access from "@/components/parts/AcessArea.vue";
import News from "@/components/parts/NewsArea.vue";
import business from "@/components/parts/BusinessArea.vue";
export default {
  name: "MainContents",
  components: {
    Access,
    // CarouselView,
    News,
    business
  },
  data() {
    return {
      visible: false,
      contents: [
        {name:"News", name2:"新着情報"},
        {name:"business", name2:"事業内容"},
        {name:"Access", name2:"アクセス"},
        {name:"Works", name2:"施工事例"},
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
}

.is-big {
  margin-right: 10px;
}

.is-small {
  font-size: 0.6em;
  color: #002565;
}
</style>
