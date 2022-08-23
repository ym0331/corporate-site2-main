<template>
  <div>
    <transition-group tag="ul" name="list">
      <v-container v-for="content in contents" :key="content" :id="content">
        <h2>
          <p class="is-big">{{ content.name }}</p>
          <p class="is-small">{{ content.name2 }}</p>
        </h2>
          <component :is="content.name"></component>
      </v-container>
    </transition-group>
  </div>
</template>

<script>
import News from "@/components/parts/NewsArea.vue";
import business from "@/components/parts/BusinessArea.vue";
import works from "@/components/parts/WorkArea.vue";
export default {
  name: "MainContents",
  components: {
    News,
    business,
    works
  },
  data() {
    return {
      visible: false,
      contents: [
        { name: "News", name2: "新着情報" },
        { name: "business", name2: "事業内容" },
        { name: "works", name2: "施工事例" }
      ]
    };
  }
};
</script>
