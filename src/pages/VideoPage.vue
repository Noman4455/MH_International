<template>
  <q-page>
    <div class="bg-img flex flex-center"></div>
    <div class="container bg-white border margin rounded-borders q-pa-md">
      <div class="text-h3 text-primary text-bold text-center q-pt-xl q-pb-lg">
        Our Featuers
      </div>
      <q-video
        src="https://www.youtube.com/embed/D-f0yVjYBRQ?si=z8unvstd6UD56Ev-"
        style="height: 500px"
      />
    </div>

    <div class="container q-my-xl">
      <div class="text-h3 q-pt-xl q-py-lg text-primary text-bold">
        Experts Reviews
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in videoList" :key="item">
          <q-video :src="item.video" style="height: 300px" />
        </div>
      </div>
    </div>

    <div class="container q-my-xl">
      <div class="text-h3 q-pt-xl q-py-lg text-primary text-bold">
        Tips & Instructions
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in videoList" :key="item">
          <q-video :src="item.video" style="height: 300px" />
        </div>
      </div>
    </div>

    <div class="container q-my-xl">
      <div class="text-h3 q-pt-xl q-py-lg text-primary text-bold">
        Success Stories
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in videoList" :key="item">
          <q-video :src="item.video" style="height: 300px" />
        </div>
      </div>
    </div>

    <div class="container q-my-xl">
      <div class="text-h3 q-pt-xl q-py-lg text-primary text-bold">
        Newly Launched Reviews
      </div>
      <div class="row q-col-gutter-lg">
        <div class="col-4" v-for="item in videoList" :key="item">
          <q-video :src="item.video" style="height: 300px" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      videoList: [
        {
          video:
            "https://www.youtube.com/embed/tArC9-RHmU4?si=DkDPEVCVvrsfPSQq",
        },
        {
          video:
            "https://www.youtube.com/embed/ekgUjyWe1Yc?si=y2czu7bp6tG64BHZ",
        },
        {
          video:
            "https://www.youtube.com/embed/PkkV1vLHUvQ?si=ikeSmdkQurx7iJGu",
        },
        {
          video:
            "https://www.youtube.com/embed/ekgUjyWe1Yc?si=y2czu7bp6tG64BHZ",
        },
        {
          video:
            "https://www.youtube.com/embed/PkkV1vLHUvQ?si=ikeSmdkQurx7iJGu",
        },
        {
          video:
            "https://www.youtube.com/embed/tArC9-RHmU4?si=DkDPEVCVvrsfPSQq",
        },
      ],
    };
  },
});
</script>



<style lang="scss">
.bg-img {
  background-image: url("../assets/video_bg.png");
  height: 65vh;
}
</style>
