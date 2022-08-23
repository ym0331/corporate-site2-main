<template>
    <v-row>
      <v-col cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-img src="@/../public/img/businessindex.jpg"></v-img>
      </v-col>
      <v-col cols="12"  sm="6" md="6" lg="6" xl="6" class="textarea">
        <h3>安心して暮らせる<br>お家をつくりたい</h3>
        <p class="text">どこまでも一途にお客様のニーズに応え、暮らしに寄り添ったサービスを提供することを約束いたします。</p>
        <button>詳しく見る</button>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "BusinessArea"
};
</script>

<style scoped>
button {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
  border-radius: 10px;
  background-color: #143265;
  color: #fff;
  box-shadow: 0 5px 0 rgba(161, 158, 139, 0.3);
  transition: 0.3s;
  box-sizing: border-box;
  border: none;
}

button:hover {
  box-shadow: none;
  transform: translate3d(0, 5px, 0);
}

.textarea {
  position: relative;
  margin: auto;
  padding: 0 10% 0;
}

h3 {
  margin: 10px;
  font-size: 1.75em;
}

.text {
  margin: 20px;
  text-align: justify;
}
</style>