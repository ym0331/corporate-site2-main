<template>
  <v-row>
    <v-col v-for="post in posts.slice(0,4)" :key="post" cols="12" sm="6" md="6" lg="6" xl="6">
      <!-- <a :href="post.link"> -->
        <img
          class="featuredmedia"
          :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
          v-motion-fade-visible-once
          :delay="200"
        />
        <p class="postlink">
          <span class="date">{{ moment(post.date).format("YYYY/MM/DD") }}</span>
          {{ post.title.rendered }}
        </p>
      <!-- </a> -->
    </v-col>
    <v-col col="12">
      <router-link to="/works">
        <button>一覧を見る</button>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import moment from "moment";
export default {
  name: "SearchIp",
  data() {
    return {
      posts: []
    };
  },
  created: function() {
    this.axios
      .get("https://www.portfolio-ym.site/wp/wp-json/wp/v2/posts?_embed")
      .then(response => {
        this.posts = response.data;
      }),
      (this.moment = moment);
  }
};
</script>

<style scoped>
.postlink {
  text-align: left;
}

.date {
  margin-right: 10px;
  font-weight: 600;
  color: #002565;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

a:hover {
  color: #b9b9b9;
}

.featuredmedia {
  width: 100%;
  height: 90%;
  overflow: hidden;
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