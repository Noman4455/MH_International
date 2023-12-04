<template>
  <q-page>
    <div class="background_color" style="height: 85vh">
      <div class="row">
        <div class="col-5 flex flex-center">
          <q-img
            src="~assets/main.png"
            height="300px"
            width="500px"
            style="margin-top: 20%"
          />
        </div>
        <div class="col-7 q-my-auto q-pt-xl">
          <div class="text-h3 q-pt-xl q-mt-lg text-center text-white text-bold">
            Where to Get Your Dream Car
          </div>
          <div class="text-h3 q-mt-md text-center text-white text-bold">
            Affordably and Easily.
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
