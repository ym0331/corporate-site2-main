<template>
  <div>
    <ContentsArea :contents="contents"></ContentsArea>
    <SlideArea></SlideArea>
  </div>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";
import SlideArea from "@/components/parts/SlideArea.vue";

export default {
  name: "BusinessPage",
  components: {
    ContentsArea,
    SlideArea
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "Business", name2: "事業内容", components: "BusinessDetail" }
      ]
    };
  }
};
</script>