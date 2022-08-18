<template>
  <div>
    <!-- <vue-element-loading color="#f2602d" ring :active="isActive" :is-full-screen="true"/> -->
    <v-app>
      <HedderMenu />
      <v-main>
        <router-view />
      </v-main>
      <FotterMenu />
    </v-app>
  </div>
</template>

<script>
import HedderMenu from "@/components/templates/HedderMenu.vue";
import FotterMenu from "@/components/templates/FotterMenu.vue";
export default {
  name: "App",
  components: {
    HedderMenu,
    FotterMenu
}
  //   data: () => ({
  //     isActive: true
  //   }),
  // mounted: function () {
  //   this.$nextTick(function () {
  //     this.isActive = false;
  //   })
  // }
};
</script>

<style>
h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
  display: flex;
  align-items: baseline;
}

.is-big {
  margin-right: 10px;
}

.is-small {
  font-size: 0.6em;
  color: #002565;
}
</style>