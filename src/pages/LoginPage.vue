<template>
  <q-page class="background_color flex flex-center">
    <div
      class="bg_clr text-white q-gutter-md text-center"
      style="padding: 10px 80px 50px 80px; width: 50%"
    >
      <q-img src="~assets/profile.jpeg" height="150px" width="150px" />
      <q-input
        v-model="email"
        outlined
        bg-color="white"
        label-color="black"
        type="text"
        class="q-ma-md"
        label="Email"
      />
      <q-input
        v-model="password"
        outlined
        bg-color="white"
        label-color="black"
        type="password"
        class="q-ma-md"
        label="Password"
      />
      <q-btn icon="login" label="Login" class="q-pa-md q-mt-lg" to="/admin" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>


<style lang="scss">
.bg_clr {
  background-color: #4e4945;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 5px #4e4945;
}
</style>
