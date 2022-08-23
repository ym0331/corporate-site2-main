<template>
    <ContentsArea :contents="contents"></ContentsArea>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";

export default {
  name: "HomeView",
  components: {
    ContentsArea,
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "News", name2: "新着情報"},
        { name: "Business", name2: "事業内容" },
        { name: "Works", name2: "施工事例" }
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