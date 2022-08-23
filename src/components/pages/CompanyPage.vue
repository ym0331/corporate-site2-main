<template>
    <ContentsArea :contents="contents"></ContentsArea>
</template>

<script>
import ContentsArea from "@/components/templates/ContentsArea.vue";

export default {
  name: "CompanyPage",
  components: {
    ContentsArea,
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "President", name2: "社長紹介"},
        { name: "CompanyInfo", name2: "会社概要" },
        { name: "Access", name2: "アクセス" }
      ]
    };
  }
};
</script>