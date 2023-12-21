<template>
  <q-page>
    <div class="bg-img flex flex-center"></div>
    <div class="container bg-white border margin rounded-borders q-pl-md">
      <div class="text-h3 text-primary text-bold text-center q-pt-xl q-pb-md">
        Contact
      </div>
      <div class="row q-col-gutter-x-md">
        <div class="col q-gutter-y-sm text-primary">
          <div class="text-h5 q-py-md text-bold">
            M.H International Co., Ltd.
          </div>
          <div class="row">
            <q-icon name="place" size="24px" class="q-pr-md" />
            <div class="text-subtitle1">
              No. 101-1, 4-chome, Higashiki-machi, <br />
              Nakagawa-ku, Nagoya City
            </div>
          </div>
          <div class="text-subtitle1">
            <q-icon name="phone" size="24px" class="q-pr-md" />
            +817048053690
          </div>
          <div class="text-subtitle1">
            <q-icon name="mail" size="24px" class="q-pr-md" />
            contact@mhintjapan.com
          </div>
          <!-- <div class="text-subtitle1">
            <q-icon name="tag" size="24px" class="q-pr-md" />
            541212310900
          </div> -->
        </div>

        <form
          action="https://formspree.io/f/xeqbwrra"
          method="POST"
          class="col-7 q-pr-lg"
        >
          <div class="row q-col-gutter-x-lg q-pt-md">
            <div class="col-6">
              <input
                type="text"
                class="input_style"
                placeholder="Name"
                name="Name"
                required
              />
            </div>
            <div class="col-6">
              <input
                type="text"
                class="input_style"
                placeholder="Phone"
                name="Phone"
                required
              />
            </div>
          </div>
          <div class="q-pt-sm">
            <textarea
              placeholder="Message"
              class="input_style"
              rows="2"
              name="Message"
              required
              style="padding-top: 8px"
            ></textarea>
          </div>
          <div class="text-right" style="margin-right: -10px">
            <q-btn
              color="primary"
              type="submit"
              icon="send"
              no-caps
              label="Send"
              class="q-px-md q-py-sm q-mb-md"
            />
          </div>
        </form>
      </div>
    </div>

    <div class="container q-py-xl q-mb-md q-pr-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27829535.476947255!2d115.67251012400378!3d31.629466781538394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2s!4v1703090300107!5m2!1sen!2s"
        width="101%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </q-page>
</template>


<script>
export default {
  setup() {},
};
</script>



<style lang="scss">
.bg-img {
  background-image: url("../assets/contact_bg.png");
  height: 65vh;
}

.input_style {
  border: 1px solid rgb(196, 191, 191);
  width: 100%;
  // height: 90px;
  border-radius: 5px;
  padding-top: 0px;
  padding-left: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
