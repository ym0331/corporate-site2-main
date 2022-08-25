<template>
    <ContentsArea :contents="contents"></ContentsArea>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";

export default {
  name: "BusinessPage",
  components: {
    ContentsArea
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