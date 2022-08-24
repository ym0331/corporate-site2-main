<template>
  <div tag="ul" name="list">
    <v-container v-for="content in contents" :key="content" :id="content">
      <h2>
        <p class="is-big">{{ content.name2 }}</p>
        <p class="is-small">{{ content.name }}</p>
      </h2>
      <component :is="content.components"></component>
    </v-container>
  </div>
</template>

<script>
import News from "@/components/parts/NewsArea.vue";
import Business from "@/components/parts/BusinessArea.vue";
import Works from "@/components/parts/WorkArea.vue";
import President from "@/components/parts/PresidentArea.vue";
import CompanyInfo from "@/components/parts/CompanyInfo.vue";
import Access from "@/components/parts/AcessArea.vue";
import Contact from "@/components/parts/ContactArea.vue";
import WorksPage from "@/components/parts/WorksPage.vue";

export default {
  name: "MainContents",
  props: {
    contents: Object
  },
  components: {
    News,
    Business,
    Works,
    President,
    CompanyInfo,
    Access,
    Contact,
    WorksPage
  },
  created: function() {
    console.log(this.contents);
  }
};
</script>

<style>
.text {
  margin: 10px;
  text-align: justify;
}
</style>