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
import Business from "@/components/parts/BusinessArea.vue";
import Works from "@/components/parts/WorkArea.vue";

export default {
  name: "MainContents",
  props: {
   contents: Object
  },
  components: {
    News,
    Business,
    Works
  }
};
</script>
