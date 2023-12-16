<template>
  <q-page>
    <div class="background_color" style="height: 100vh">
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

    <div class="margin bg-white q-py-xl q-mb-lg container rounded-borders">
      <div class="row flex flex-center q-py-lg">
        <div class="text-h3 text-bold text-center text-primary col-12">
          About
        </div>
        <div class="q-pt-xs bg-primary col-2"></div>
      </div>
      <div class="row q-py-lg">
        <div class="col-6 q-px-lg">
          <div class="text-subtitle1 text-primary" align="justify">
            Embarking on the quest for your dream car at an affordable price
            demands strategic planning and resourceful exploration. Start by
            delving into reputable online platforms, including certified
            pre-owned car websites, where well-maintained vehicles often come
            with warranties, ensuring peace of mind in your purchase. Auction
            sites can also be a goldmine, offering a diverse range of vehicles
            at competitive prices. Beyond local dealerships, consider widening
            your search to regions with lower demand for specific models,
            enabling more favorable deals.
            <br />
            <br />
            To enhance your chances of an affordable acquisition, keep an eye on
            seasonal promotions and clearance sales at dealerships. These events
            can present opportunities to snag your dream car at a fraction of
            the cost. With persistence, a discerning eye, and adept negotiation
            skills, the journey to owning your dream car becomes a gratifying
            reality. Don't overlook private sellers, who may be more flexible on
            pricing. Thoroughly research the market value of your desired car
            model to negotiate confidently and secure a fair deal.
          </div>
        </div>
        <div class="col-6 text-center">
          <div class="q-pa-md">
            <q-img
              src="https://images.unsplash.com/photo-1547038577-da80abbc4f19?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="400px"
              width="420px"
              style="border-radius: 50%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary q-py-lg gt-xs">
      <div class="text-h3 text-center q-pt-xl q-pb-md text-white text-bold">
        How We Do
      </div>
      <div class="row container q-py-xl q-col-gutter-y-md text-center">
        <div class="row container q-py-md q-col-gutter-y-md text-center">
          <div class="col-6 col-md-3">
            <q-img src="~assets/selection1.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">1. Selection</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/discussion.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">
              2. Discussion
            </div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/finalized.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">3. Finalized</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/delivered.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">4. Delivered</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl">
      <div class="row flex flex-center">
        <div class="text-h3 text-bold text-center text-primary col-12 q-pt-xl">
          Car Brands
        </div>
        <div class="col-3 q-pt-xs bg-primary"></div>
      </div>
      <div class="q-my-xl">
        <div class="row q-col-gutter-lg">
          <div
            class="col-3 flex flex-center row"
            v-for="item in list"
            :key="item"
          >
            <div
              class="bg-grey-4 flex flex-center col-12"
              style="border-radius: 50%; width: 100px; height: 100px"
            >
              <q-img :src="item.img" height="70px" width="70px" />
            </div>
            <div class="text-h6 q-pt-sm text-primary col-12 text-center">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary q-py-xl">
      <div class="row container">
        <div class="col-6 flex flex-center">
          <div class="text-h3 text-bold text-center text-white col-12">
            Coming Soon
          </div>

          <div class="row q-gutter-x-md">
            <div
              class="bg-black q-pa-sm row cursor-pointer"
              style="height: 40px; width: 130px; border-radius: 5px"
            >
              <q-img src="~assets/android.png" height="27px" width="22px" />
              <div
                class="text-white q-pl-sm"
                style="margin-top: -5px; font-size: 10px"
              >
                <div>GET IT ON</div>
                <div class="text-subtitle1 text-bold" style="margin-top: -5px">
                  Google Play
                </div>
              </div>
            </div>
            <div
              class="bg-black q-pa-sm row cursor-pointer"
              style="height: 40px; width: 150px; border-radius: 5px"
            >
              <q-img src="~assets/apple.png" height="27px" width="22px" />
              <div
                class="text-white q-pl-sm"
                style="margin-top: -5px; font-size: 10px"
              >
                <div>DOWNLOAD ON THE</div>
                <div class="text-subtitle1 text-bold" style="margin-top: -5px">
                  App Store
                </div>
              </div>
            </div>
            <div
              class="bg-black q-pa-sm row cursor-pointer"
              style="height: 40px; width: 140px; border-radius: 5px"
            >
              <q-img src="~assets/huawei.png" height="27px" width="22px" />
              <div
                class="text-white q-pl-sm"
                style="margin-top: -5px; font-size: 10px"
              >
                <div>EXPLORE IT ON</div>
                <div class="text-subtitle1 text-bold" style="margin-top: -5px">
                  App Gallery
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 text-center">
          <q-img src="~assets/mobile.png" height="auto" width="200px" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import car1 from "../assets/alfa.png";
import car2 from "../assets/audi.png";
import car3 from "../assets/bmw.png";
import car4 from "../assets/chevrolt.png";
import car5 from "../assets/ferrari.png";
import car6 from "../assets/ford.png";
import car7 from "../assets/honda.png";
import car8 from "../assets/hyundai.png";
import car9 from "../assets/kia.png";
import car10 from "../assets/lamborghini.png";
import car11 from "../assets/lexus.png";
import car12 from "../assets/madza.png";
import car13 from "../assets/mercedes.png";
import car14 from "../assets/mitsubishi.png";
import car15 from "../assets/peugeot.png";
import car16 from "../assets/porsche.png";

export default {
  name: "IndexPage",
  setup() {
    return {
      list: [
        {
          img: car1,
          title: "Alfa Romeo",
        },
        {
          img: car2,
          title: "Audi",
        },
        {
          img: car3,
          title: "BMW",
        },
        {
          img: car4,
          title: "Chevrolt",
        },
        {
          img: car5,
          title: "Ferrari",
        },
        {
          img: car6,
          title: "Ford",
        },
        {
          img: car7,
          title: "Honda",
        },
        {
          img: car8,
          title: "Hyundai",
        },
        {
          img: car9,
          title: "Kia",
        },
        {
          img: car10,
          title: "Lamborghini",
        },
        {
          img: car11,
          title: "Lexus",
        },
        {
          img: car12,
          title: "Mazda",
        },
        {
          img: car13,
          title: "Mercedes",
        },
        {
          img: car14,
          title: "Mitsubishi",
        },
        {
          img: car15,
          title: "Peugeot",
        },
        {
          img: car16,
          title: "Porsche",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.margin {
  margin-top: -10vh;
}
</style>
