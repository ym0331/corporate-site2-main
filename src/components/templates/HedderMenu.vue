<template>
  <header>
    <v-app-bar app dark flat>
      <!-- タブレット以上の表示 -->
      <div class="d-none d-sm-flex">
        <v-toolbar-title class="title">
          <img src="./img/logo.png" alt="ヨシザワ建設株式会社のロゴ" class="logo" />
        </v-toolbar-title>
        <v-tab v-for="item in items" :key="item" :href="item.path">{{ item.title }}</v-tab>
        <v-btn depressed rounded class="contactbtn" color="white" href="/contact">お問い合せ</v-btn>
      </div>

      <!-- スマホの表示 -->
      <div class="d-flex d-sm-none xmheader">
        <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>吉澤ピアノ教室</v-toolbar-title>
      </div>
    </v-app-bar>

    <!-- ナビゲーション(スマホのみ) -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item" :href="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: "HedderMenu",
  data() {
    return {
      items: [
        { title: "事業内容", path: "/business" },
        { title: "施工事例", path: "/works" },
        { title: "会社情報", path: "/company" },
        // { title: "新着情報", path: "/" }
      ],
      drawer: false
    };
  }
};
</script>

<style>
.title {
  text-align: left;
  margin-left: 20px;
}

.xmheader {
  align-items: center;
}
.v-toolbar__content {
  display: block;
}
.logo {
  width: 200px;
}

.contactbtn {
  background-color: #143265;
}
</style>