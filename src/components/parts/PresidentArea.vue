<template>
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
</template>

<script>
export default {
  name: "PresidentArea",
};
</script>

<style scoped>
.newsList {
  width: 100%;
  margin: 0 auto 40px;
  list-style-type: none;
  align-items: center;
  border-top: 1px solid #b9b9b9;
}
.newsListLink {
  flex-wrap: wrap;
  padding: 25px 0;
  border-bottom: 1px solid #b9b9b9;
  box-sizing: border-box;
  line-height: 1.5rem;
   text-align: justify;
}

.date {
  margin-right: 2rem;
  font-weight: 600;
  color: #002565;
}

a {
  color: #2c3e50;
  text-decoration: none;
  display: flex;
}

a:hover {
  color: #b9b9b9;
}

</style>