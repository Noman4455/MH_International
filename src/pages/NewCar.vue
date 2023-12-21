<template>
  <q-page>
    <div class="bg-img"></div>
    <div
      class="container bg-white q-pa-md q-mb-xl margin border rounded-borders"
    >
      <div class="text-h3 text-primary text-center q-py-xl text-bold">
        Browse Available New Cars
      </div>
      <div class="row q-col-gutter-x-md">
        <div class="col-6">
          <q-input
            v-model="text"
            outlined
            type="text"
            placeholder="E.g: 2023"
            label="Make Year"
          />
        </div>
        <div class="col-6">
          <q-input
            v-model="text"
            placeholder="E.g: Honda"
            outlined
            type="text"
            label="Brand/Company"
          />
        </div>
      </div>
      <div class="text-right q-pt-md">
        <q-btn
          color="primary"
          icon="send"
          label="Search"
          no-caps
          @click="onClick"
        />
      </div>
    </div>
    <div class="container q-pt-md q-pr-md">
      <div class="text-h3 text-primary text-center q-pt-md q-pb-xl text-bold">
        Available Cars
      </div>
      <div class="row q-gutter-md">
        <div class="col cursor-pointer" v-for="item in carsList" :key="item">
          <q-img :src="item.imgUrl" height="180px" />
          <div class="box">
            <div class="row q-px-md q-pt-md">
              <div class="text-h6 text-bold text-primary">{{ item.title }}</div>
              <q-space />
              <div class="text-subtitle1">{{ item.price }}</div>
            </div>
            <div class="row q-px-md q-pb-md">
              <div class="text-subtitle1 text-primary">{{ item.capicity }}</div>
              <q-space />
              <div class="text-subtitle1">{{ item.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl">
      <div class="text-h3 text-bold text-center text-primary q-pt-lg">
        Car Brands
      </div>
      <div class="q-my-xl">
        <div class="row q-col-gutter-lg">
          <div
            class="col-3 flex flex-center row"
            v-for="item in list"
            :key="item"
          >
            <div
              class="bg-grey-4 flex flex-center col-12 cursor-pointer"
              style="border-radius: 50%; width: 100px; height: 100px"
            >
              <q-img :src="item.img" height="70px" width="70px" />
            </div>
            <div
              class="text-h6 q-pt-sm text-primary col-12 text-center text-bold"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-info q-pb-md">
      <div class="bg-primary q-pa-xl text-subtitle1" align="justify">
        Embark on a seamless car-buying journey with MH International.
        Effortlessly discover a wide range of new cars within your budget on our
        platform. Our find new cars section simplifies the process of choosing
        your dream car. As a leading automotive platform, MH International keeps
        you updated on new car launches worldwide. Stay informed about the
        latest vehicles from top manufacturers like Honda, Toyota, Suzuki, Kia,
        Hyundai, and Proton.
        <br /><br />

        If you're uncertain about your vehicle choice, browse our car videos,
        read insightful reviews on our blog. When it's time to sell, experience
        a hassle-free process by checking the car details absolutely free on MH
        International. Tailor your search by navigating through Cars By Make,
        Cars by Category, and Cars by Body Type sections. Discover popular,
        upcoming, and newly launched cars in our Featured New Cars section.
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import img1 from "../assets/list1.png";
import img2 from "../assets/list2.png";
import img3 from "../assets/list3.png";
import img4 from "../assets/list4.png";

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

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      carsList: [
        {
          imgUrl: img1,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          type: "Petrol",
        },
        {
          imgUrl: img2,
          title: "BMW",
          price: "$45,000",
          capicity: "1800 CC",
          type: "Petrol",
        },
        {
          imgUrl: img3,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          type: "Petrol",
        },
        {
          imgUrl: img4,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          type: "Petrol",
        },
      ],
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
});
</script>


<style lang="scss">
.bg-img {
  background-image: url("../assets/new_bg.png");
  height: 65vh;
}
</style>
