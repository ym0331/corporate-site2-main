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
        { name: "Contact", name2: "お申し込み", components:"Contact"},
      ]
    };
  }
};
</script>