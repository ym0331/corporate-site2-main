<template>
  <div>
    <div class="contact_text_area">
      <p>
        お問い合わせありがとうございます。
        <br />当社について、疑問やご質問がある方は、ご遠慮なくお問い合わせください。
        <br />以下の個人情報ついてに同意及び必要事項をご入力の上、「送信」ボタンを押してください。
      </p>
    </div>
    <form action="sample.cgi" method="post">
      <dl>
        <dt>
          <label for="name">
            お名前
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="text" id="name" v-model="contactData.name" />
        </dd>
        <dt>
          <label for="email">
            メールアドレス
            <span class="required">必須</span>
          </label>
        </dt>
        <dd>
          <input type="email" id="email" v-model="contactData.email" />
        </dd>

        <dt>
          <label for="message">お問合せ内容</label>
        </dt>
        <dd>
          <textarea
            name="message"
            cols="50"
            rows="5"
            id="message"
            placeholder="ご質問・ご連絡事項などありましたらこちらに入力してください"
          ></textarea>
        </dd>

        <dt>個人情報の取り扱いについて</dt>
        <dd class="consent_form">
          <strong>個人情報の取り扱いについて</strong>
          <div>
            <p>ヨシザワ建設株式会社は、個人情報の保護に関する法令等を遵守するとともに、社会的責務であると考え、以下にプライバシーポリシーを定め、全ての役員、社員、協働者に周知し、徹底を図ることにより、個人情報の適正な取り扱いに努めてまいります。</p>
          </div>
        </dd>
      </dl>

      <p class="consent_chk">
        <input type="checkbox" id="consent" v-model="contactData.consent" />
        <label for="consent">「個人情報の取り扱いについて」同意する</label>
      </p>
      <v-container class="contact_btn_area">
        <v-row justify="center">
          <v-col xs="12">
            <input type="submit" class="submit contact_btn" />
          </v-col>
          <v-col xs="12">
            <input type="reset" class="reset contact_btn" />
          </v-col>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      contactData: {
        name: "",
        sex: "女",
        age: "",
        guardian: "",
        email: "",
        date: "",
        consent: false
      }
    };
  }
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ffffff;
  display: inline-block;
  text-shadow: 1px 1px 1px #002565, -1px 1px 1px #002565, 1px -1px 1px #002565,
    -1px -1px 1px #002565, 1px 0px 1px #002565, 0px 1px 1px #002565,
    -1px 0px 1px #002565, 0px -1px 1px #002565;
}

.contact_text_area {
  margin: 20px 0;
}

dt {
  font-size: 1.25rem;
}

.required {
  color: white;
  background-color: #002565;
  border-radius: 10px;
  font-weight: normal;
  font-size: 0.9rem;
  margin-left: 10px;
  padding: 0 7px 1px;
  white-space: nowrap;
}

dd {
  margin-bottom: 15px;
}

input[type="text"],
input[type="date"],
input[type="email"],
input[type="number"],
textarea {
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 1.12em;
}

input:focus,
textarea:focus {
  border-color: #002565;
  outline: 0;
}

input[type="radio"] {
  margin-right: 10px;
}

label {
  margin-right: 30px;
  font-size: 1.12em;
}

input[type="checkbox"] {
  width: auto;
}

.consent_form_area {
  margin-bottom: 30px;
}

.consent_form p strong {
  font-weight: 600;
}
.consent_form {
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid #d7d7d7;
  padding: 20px;
  height: 150px;
}

.consent_chk {
  text-align: center;
  margin-bottom: 20px;
}

/* 同意・リセットボタン */
.v-col {
  flex-grow: 0;
}

.contact_btn_area {
  text-align: center;
}

.contact_btn {
  text-align: center;
  width: 200px;
  height: 3em;
  font-size: 1em;
  border-radius: 5px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
  box-sizing: border-box;
  border: none;
  box-shadow: 0px 2px 5px 0px rgb(75 81 83 / 0.15);
}

/* 送信ボタン */
.submit {
  background-color: #002565;
  color: #fff;
  border: 1px solid #002565;
}
.submit:hover {
  background-color: #fff;
  color: #002565;
}

/* リセットボタン */
.reset {
  background-color: #e5e5e5;
  color: #282828;
}

.reset:hover {
  background-color: #efefef;
}
</style>