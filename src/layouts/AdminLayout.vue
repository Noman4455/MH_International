<template>
  <q-layout view="hHr lpR fFr">
    <q-header class="background_color" style="height: 15vh" elevated>
      <q-toolbar class="row">
        <q-img src="~assets/logo.png" height="90px" width="90px" />
        <q-space />
        <div class="text-h4 text-bold">MH International</div>
        <q-space />
        <div class="q-gutter-x-xl">
          <q-btn
            flat
            v-if="drawerRight == false"
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="menu"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      side="right"
      v-model="drawerRight"
      class="bg-dark"
      show-if-above
      bordered
      :width="400"
      :breakpoint="500"
    >
      <q-scroll-area class="fit q-pa-md">
        <div class="row text-white q-my-md q-py-sm">
          <div class="text-h5 text-bold">Your Perfect Ride Awaits</div>
          <q-space />
          <q-icon
            name="close"
            size="34px"
            class="cursor-pointer"
            @click="close()"
          />
        </div>
        <q-separator class="q-mt-sm" color="white" />
        <div class="text-center q-gutter-y-xs" align="left">
          <div class="q-pt-md">
            <q-btn
              color="white"
              class="full-width q-py-md"
              icon="home"
              flat
              to="/admin"
              label="Home"
            />
          </div>
          <div>
            <q-btn
              color="white"
              class="full-width q-py-md"
              icon="directions_car"
              flat
              to="/adminusedcar"
              label="Sell Cars"
            />
          </div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="bg-primary q-py-md">
      <a href="#" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="container row q-pt-sm">
        <div class="text-h4 text-white">Your Perfect Ride Awaits</div>
        <q-space />
        <div class="q-pt-xs q-gutter-x-md">
          <q-img
            src="~assets/face.png"
            height="30px"
            width="30px"
            class="cursor-pointer"
          />
          <q-img
            src="~assets/instagram.png"
            height="30px"
            width="30px"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",

  setup() {
    const drawerRight = ref(false);
    return {
      drawerRight,
      close() {
        drawerRight.value = false;
      },
    };
  },
  mounted() {
    // Close the drawer by default when the component loads
    this.close();
  },
};
</script>
