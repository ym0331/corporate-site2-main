<template>
  <v-row>
    <v-col
      v-for="post in posts"
      :key="post"
      cols="12"
      sm="6"
      md="6"
      lg="6"
      xl="6"
    >
      <a :href="post.link">
        <img
          class="featuredmedia"
          :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url"
        />
        <p class="postlink">
          <span class="date">{{ moment(post.date).format("YYYY/MM/DD") }}</span>
          {{ post.title.rendered }}
        </p>
      </a>
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
</style>