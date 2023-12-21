<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="background_color" style="height: 15vh" elevated>
      <q-toolbar class="row">
        <q-img src="~assets/logo.png" height="90px" width="90px" />
        <q-space />
        <div class="q-gutter-x-md q-pt-md">
          <q-btn
            color="info"
            icon="fa-solid fa-house"
            flat
            to="/"
            label="Home"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="info"
            icon="fa-solid fa-car"
            flat
            to="/usecar"
            label="Used Cars"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            icon="fa-solid fa-car-side"
            color="info"
            flat
            to="/newcar"
            label="New Cars"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            icon="fa-brands fa-youtube"
            color="info"
            flat
            to="/video"
            label="Videos"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="info"
            icon="fa-regular fa-id-badge"
            flat
            to="/about"
            label="About"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
          <q-btn
            color="info"
            icon="fa-regular fa-address-book"
            flat
            to="/contact"
            label="Contact"
            class="q-py-md q-px-lg"
            @click="onClick"
          />
        </div>
        <q-space />
        <q-btn
          color="info"
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

    <footer class="bg-info">
      <a href="https://wa.me/+817048053690" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="row container q-col-gutter-md q-pb-lg">
        <div class="col-3"><q-img src="~assets/logo.png" /></div>
        <div class="col-2 q-pt-xl">
          <div class="text-h5 q-pb-md">Company</div>
          <a href="#/"><div class="text-h6 q-mt-sm a">Home</div></a>
          <a href="#/newcar"><div class="text-h6 q-mt-sm a">New Car</div></a>
          <a href="#/usecar"><div class="text-h6 q-mt-sm a">Used Car</div></a>
          <a href="#/video"><div class="text-h6 q-mt-sm a">Videos</div></a>
          <a href="#/about"><div class="text-h6 q-mt-sm a">About</div></a>
          <a href="#/contact"><div class="text-h6 q-mt-sm a">Contact</div></a>
        </div>
        <div class="col-2 q-pt-xl">
          <div class="text-h5 q-pb-md">Services</div>
          <a href="#/newcar"><div class="text-h6 q-mt-sm a">New Car</div></a>
          <a href="#/usecar"><div class="text-h6 q-mt-sm a">Used Car</div></a>
          <a href="#/video"><div class="text-h6 q-mt-sm a">Videos</div></a>
          <a href="#/about"><div class="text-h6 q-mt-sm a">About</div></a>
          <a href="#/contact"><div class="text-h6 q-mt-sm a">Contact</div></a>
        </div>
        <div class="col q-pt-xl">
          <div class="text-h5 q-pb-md">Registration Detail</div>
          <div
            class="bg-primary q-py-lg q-px-md text-center rounded-borders q-mt-md"
          >
            <div class="text-subtitle1 text-info">
              Cars Export License No. From Japanese Government
            </div>
            <div class="text-h6 text-info q-py-md">
              M.H international Co., Ltd
            </div>
            <div class="text-subtitle1 text-info">
              Aichi Public Safety Commision License Number: 541212310900
            </div>
          </div>
        </div>
      </div>
      <q-separator />
      <div class="bg-primary q-py-sm">
        <div class="container row q-pt-sm">
          <div class="text-h4 text-info">Your Perfect Ride Awaits</div>
          <q-space />
          <div class="q-pt-xs q-gutter-x-md">
            <a
              href="https://www.facebook.com/people/MH-international-japan/61554251129140/?mibextid=ZbWKwL"
              target="_blank"
            >
              <q-img
                src="~assets/face.png"
                height="30px"
                width="30px"
                class="cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/mhintjapan/?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D"
              target="_blank"
            >
              <q-img
                src="~assets/instagram.png"
                height="30px"
                width="30px"
                class="cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div class="text-h6 text-info text-center">
          Copyright © 2023 - All Rights Reserved
        </div>
      </div>
    </footer>
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


<style lang="scss">
.a {
  text-decoration: none;
  color: #4e4945;
}
.a:hover {
  font-weight: bold;
  text-decoration: underline;
}
</style>
