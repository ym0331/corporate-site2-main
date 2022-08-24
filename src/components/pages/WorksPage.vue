<template>
    <ContentsArea :contents="contents"></ContentsArea>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";

export default {
  name: "WorksPage",
  components: {
    ContentsArea,
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "Works", name2: "施工事例", components:"WorksPage"}
      ]
    };
  }
};
</script>