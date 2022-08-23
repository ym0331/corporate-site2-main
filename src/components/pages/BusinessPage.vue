<template>
  <v-container>
    <h2>
      <p class="is-big">Business</p>
      <p class="is-small">事業内容</p>
    </h2>

    <v-row class="businessarea">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <v-img src="@/../public/img/business1.jpg"></v-img>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="textarea">
        <h3>
          <p>Architecture</p>
          <p class="is-small">建築</p>
        </h3>
        <p class="text">分譲住宅を建設する事業を行っています。</p>
        <router-link to="/works">
          <button>施工事例</button>
        </router-link>
      </v-col>
    </v-row>

    <v-row class="businessarea">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="textarea">
        <h3>
          <p>Renovation</p>
          <p class="is-small">リフォーム</p>
        </h3>
        <p class="text">住宅のリフォームを行っています。</p>
        <router-link to="/works">
          <button>施工事例</button>
        </router-link>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <v-img src="@/../public/img/business2.jpg"></v-img>
      </v-col>
    </v-row>

    <!-- 画像エリア -->
  </v-container>
</template>

<script>
// import CarouselView from "@/components/parts/CarouselView.vue";

export default {
  name: "MainContents",
  components: {},
  data() {
    return {
      visible: false,
      contents: [
        { name: "News", name2: "新着情報" },
        { name: "business", name2: "事業内容" },
        { name: "Access", name2: "アクセス" },
        { name: "Works", name2: "施工事例" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.businessarea {
  margin-bottom: 30px;
}

.textarea {
  position: relative;
  margin: auto;
  padding: 0 10% 0;
  text-align: center;
}

h3 {
  margin-bottom: 10px;
  font-size: 1.75em;
}

h3 .is-small {
  font-size: 0.6em;
  color: #002565;
}

.text {
  text-align: justify;
  margin: 0 0 20px 0;
  display: inline-block;
}
</style>
