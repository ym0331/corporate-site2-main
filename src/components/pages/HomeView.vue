<template>
  <main>
    <MainVisual></MainVisual>
    <ContentsArea :contents="contents"></ContentsArea>
  </main>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";
import MainVisual from "@/components/parts/MainVisual.vue";

export default {
  name: "HomeView",
  components: {
    ContentsArea,
    MainVisual
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "News", name2: "新着情報", components: "News" },
        { name: "Business", name2: "事業内容", components:"Business" },
        { name: "Works", name2: "施工事例", components:"Works" }
      ]
    };
  }
};
</script>

<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>