<template>
  <q-page>
    <div class="bg-img flex flex-center"></div>
    <div
      class="container bg-white q-pa-md q-mb-xl margin border rounded-borders"
    >
      <div class="text-h3 text-primary text-center q-py-xl text-bold">
        Browse Available Used Cars
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

    <div class="container q-py-md q-pr-md">
      <div class="text-h3 text-primary text-center q-pt-md q-pb-xl text-bold">
        Available Cars
      </div>
      <div class="row q-gutter-md">
        <div class="col cursor-pointer" v-for="item in carsList" :key="item">
          <a href="#/cardetail" class="a">
            <q-img :src="item.imgUrl" height="180px" />
            <div class="box">
              <div class="row q-px-md q-pt-md">
                <div class="text-h6 text-bold text-primary">
                  {{ item.title }}
                </div>
                <q-space />
                <div class="text-subtitle1">{{ item.price }}</div>
              </div>
              <div class="row q-px-md q-pb-md">
                <div class="text-subtitle1 text-primary">
                  {{ item.capicity }}
                </div>
                <q-space />
                <div class="text-subtitle1">{{ item.year }}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="container q-py-xl q-pr-md">
      <div class="text-h3 text-primary text-center q-pt-md q-pb-xl text-bold">
        Top-Rated Cars Across Various Categories
      </div>
      <Carousel
        class="gt-sm"
        :itemsToShow="5"
        :wrapAround="true"
        :transition="500"
      >
        <Slide v-for="item in list" :key="item">
          <div class="">
            <q-card class="my-card" style="width: 200px">
              <img :src="item.src" />
              <div class="text-h6 text-bold text-primary">{{ item.title }}</div>
            </q-card>
          </div>
        </Slide>
      </Carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";

import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import img1 from "../assets/list1.png";
import img2 from "../assets/list2.png";
import img3 from "../assets/list3.png";
import img4 from "../assets/list4.png";

import type1 from "../assets/type1.png";
import type2 from "../assets/type2.png";
import type3 from "../assets/type3.png";
import type4 from "../assets/type4.png";
import type5 from "../assets/type5.png";
import type6 from "../assets/type6.png";
import type7 from "../assets/type7.png";
import type8 from "../assets/type8.png";
import type9 from "../assets/type9.png";

const list = [
  {
    src: type1,
    title: "Vans",
  },
  {
    src: type2,
    title: "Electric Vehicals (EV)",
  },
  {
    src: type3,
    title: "Hybrid",
  },
  {
    src: type4,
    title: "Hatchback",
  },
  {
    src: type5,
    title: "Coups",
  },
  {
    src: type6,
    title: "Wagons",
  },
  {
    src: type7,
    title: "Sedan",
  },
  {
    src: type8,
    title: "Suv",
  },
  {
    src: type9,
    title: "Trucks",
  },
];

export default defineComponent({
  name: "IndexPage",
  name: "AutoPlay",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    return {
      list,
      carsList: [
        {
          imgUrl: img1,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          year: "2021",
        },
        {
          imgUrl: img2,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          year: "2021",
        },
        {
          imgUrl: img3,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          year: "2021",
        },
        {
          imgUrl: img4,
          title: "Honda City",
          price: "$25,000",
          capicity: "1200 CC",
          year: "2021",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.bg-img {
  background-image: url("../assets/bg_car.jpg");
  height: 65vh;
}

// Carousal Section
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
// Carousal Section

.course-img {
  border-radius: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
.course-img:hover {
  transform: scale(1.05);
}
.my-news-card {
  cursor: pointer;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
}
.my-news-card:hover {
  color: rgb(126, 126, 212);
  transform: scale(1.05);
}
.icon {
  cursor: pointer;
}
.icon:hover {
  color: rgb(66, 64, 64);
}
.f-list {
  cursor: pointer;
}
.f-list:hover {
  color: rgb(66, 64, 64);
  text-decoration: underline;
}
.f-info {
  cursor: pointer;
}
.a {
  text-decoration: none;
  color: #4e4945;
}
</style>
