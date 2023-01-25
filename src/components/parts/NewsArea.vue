<template>
  <div class="newsList">
  <div name="list" v-for="post in posts.slice(0,3)" :key="post" class="newsListLink">
        <!-- <a :href="post.link"> -->
          <span class="date">{{ moment(post.date).format("YYYY/MM/DD") }}</span>
          <p>{{ post.title.rendered }}</p>
        <!-- </a> -->
    </div>
    </div>
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
      .get("https://www.portfolio-ym.site/wp/wp-json/wp/v2/posts/")
      .then(response => {
        this.posts = response.data;
      }),
      (this.moment = moment);
  }
};
</script>

<style scoped>
.newsList {
  border-top: 1px solid #b9b9b9;
    align-items: center;
}
.newsListLink {
  padding: 20px 0;
  border-bottom: 1px solid #b9b9b9;
  box-sizing: border-box;
  text-align: justify;
  display: flex;
}

.date {
  margin-right: 2rem;
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

</style>