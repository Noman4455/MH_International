<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="background_color" style="height: 15vh" elevated>
      <q-toolbar class="row">
        <q-img src="~assets/logo.png" height="90px" width="90px" />
        <q-space />
        <div class="q-gutter-x-lg">
          <q-btn
            color="white"
            icon="home"
            flat
            label="Home"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="white"
            icon="directions_car"
            flat
            label="Used Cars"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            icon="fa-solid fa-car-side"
            color="white"
            flat
            label="New Cars"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            icon="smart_display"
            color="white"
            flat
            label="Videos"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="white"
            icon="fa-brands fa-blogger-b"
            flat
            label="Blog"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="white"
            icon="fa-regular fa-address-book"
            flat
            label="Contact"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
        </div>
        <q-space />
        <q-btn
          color="white"
          icon="person"
          to="/login"
          flat
          label="Admin"
          class="q-py-md q-px-lg"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  setup() {
    return {};
  },
};
</script>
