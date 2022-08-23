<template>
  <v-container>
    <h2>
      <p class="is-big">president</p>
      <p class="is-small">社長紹介</p>
    </h2>

    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <v-img src="@/../public/img/president.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="textarea">
        <h3>仕事を通してあなたの生活を守りたい</h3>
        <div class="text">
          当社は「安全第一」・「顧客満足」を経営の基本理念としております。
          <br />この理念のもと、確かな技術力を武器に、より品質の高い建造物とサービスを提供するため、社員一同が日々創意工夫しながら頑張っております。
          <br />また、社員の働く環境を整備し、安心安全の職場づくりを目指すことで、従業員の方々のより良いライフプランを構築していくことも心がけております。
          <p class="presidentName">代表取締役社長 吉澤太郎</p>
        </div>
      </v-col>
    </v-row>

    <h2>
      <p class="is-big">Company Info</p>
      <p class="is-small">会社概要</p>
    </h2>
      <v-row
        v-for="content in contents"
        :key="content"
        :id="content"
        class="companyinfodetail"
      >
        <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="definition">{{ content.definition }}</v-col>
        <v-col cols="12" sm="10" md="10" lg="10" xl="10">{{ content.explanation }}</v-col>
      </v-row>
    <h2>
      <p class="is-big">Access</p>
      <p class="is-small">アクセス</p>
    </h2>
    <Access></Access>
  </v-container>
</template>

<script>
import Access from "@/components/parts/AcessArea.vue";

export default {
  definition: "ConpanyPage",
  components: {
    Access
  },
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
.presidentName {
  margin-top: 10px;
  text-align: right;
}

.text {
  margin: 10px;
  text-align: justify;
}

.companyinfo {
  width: 100%;
  margin: 0 auto 40px;
  list-style-type: none;
  align-items: center;
  border-top: 1px solid #b9b9b9;
}

.companyinfodetail {
  flex-wrap: wrap;
  padding: 25px 0;
  border-bottom: 1px solid #b9b9b9;
  box-sizing: border-box;
  line-height: 1.5rem;
  text-align: justify;
}

.definition {
  font-weight: 600;
  color: #002565;
}
</style>