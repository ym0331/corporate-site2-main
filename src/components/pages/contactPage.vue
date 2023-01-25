<template>
  <div>
    <h2>問い合わせ</h2>
    <label for="name">名前：</label>
    <input id="name" type="text" v-model="name" />
    <br />
    <br />
    <label for="comment">問い合わせ内容：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <button @click="sendContact">送信</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CompanyPage",

  data() {
    return {
      name: "",
      comment: ""
    };
  },
  created() {
    axios.get('/contacts'
    )
  },
  methods: {
    sendContact() {
      axios.post('/contacts', {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      });
      this.name = '';
      this.comment = '';
    }
  }
};
</script>

<style scoped>
textarea,
input {
  border: 1px solid #000;
}
</style>