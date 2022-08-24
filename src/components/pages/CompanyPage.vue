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
        { name: "President", name2: "社長紹介", components:"President"},
        { name: "CompanyInfo", name2: "会社概要", components:"CompanyInfo" },
        { name: "Access", name2: "アクセス", components:"Access" }
      ]
    };
  }
};
</script>