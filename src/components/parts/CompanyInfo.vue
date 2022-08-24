<template>
  <div class="companyInfo">
    <v-row v-for="content in contents" :key="content" :id="content" class="companyinfodetail">
      <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="definition">{{ content.definition }}</v-col>
      <v-col cols="12" sm="10" md="10" lg="10" xl="10">{{ content.explanation }}</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  data() {
    return {
      contents: [
        { definition: "事業所名", explanation: "ヨシザワ建設株式会社" },
        { definition: "代表取締役", explanation: "吉澤 太郎" },
        { definition: "設立", explanation: "2018年7月" },
        { definition: "従業員数", explanation: "35名" },
        {
          definition: "所在地",
          explanation: "〒160-0022 東京都新宿区新宿 6-28-7"
        },
        { definition: "TEL", explanation: "03-1234-567" },
        { definition: "事業内容", explanation: "分譲住宅建設・リフォーム" },
        { definition: "資本金", explanation: "８０００万円" }
      ]
    };
  }
};
</script>

<style scoped>
.companyInfo {
  border-top: 1px solid #b9b9b9;
  align-items: center;
}

.companyinfodetail {
  padding: 20px 0;
  border-bottom: 1px solid #b9b9b9;
  box-sizing: border-box;
  text-align: justify;
}

.definition {
  font-weight: 600;
  color: #002565;
}
</style>