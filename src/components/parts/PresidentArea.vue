<template>
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <v-img src="@/../public/img/president.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <h3>仕事を通してあなたの生活を守りたい</h3>
        <div class="presidenttext">
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
.presidenttext {
    text-align: justify;
}

.presidentName {
  margin-top: 10px;
  text-align: right;
}
</style>
