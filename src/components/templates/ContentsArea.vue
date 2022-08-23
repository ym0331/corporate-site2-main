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
import President from "@/components/parts/PresidentArea.vue";
import CompanyInfo from "@/components/parts/CompanyInfo.vue";
import Access from "@/components/parts/AcessArea.vue";

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
    Access
  },
  created: function() {
console.log(this.contents)
  }
};
</script>

<style>
.presidentName {
  margin-top: 10px;
  text-align: right;
}

.text {
  margin: 10px;
  text-align: justify;
}

.companyinfo {
  width: 100%;
  margin: auto 0;
  list-style-type: none;
  align-items: center;
  border-top: 1px solid #b9b9b9;
}

.companyinfodetail {
  flex-wrap: wrap;
  padding: 25px 0;
  border-bottom: 1px solid #b9b9b9;
  box-sizing: border-box;
  line-height: 1.5rem;
  text-align: justify;
}

.definition {
  font-weight: 600;
  color: #002565;
}
</style>