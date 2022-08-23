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

h2 .is-big {
  margin-right: 10px;
}

h2 .is-small {
  font-size: 0.6em;
  color: #002565;
}



.text {
  margin: 10px;
  text-align: justify;
}

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
</style>