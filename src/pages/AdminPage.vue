<template>
  <q-page>
    <div class="q-py-xl">
      <div class="q-pb-md row q-gutter-x-sm container">
        <div class="col-3 q-py-sm bg-dark text-h4 text-white text-center">
          <u>Images</u>
        </div>
        <div class="col-2 q-py-sm bg-dark text-h4 text-white text-center">
          <u>Car Info</u>
        </div>
        <div class="col-2 q-py-sm bg-dark text-h4 text-white text-center">
          <u>Engine</u>
        </div>
        <div class="col q-py-sm bg-dark text-h4 text-white text-center">
          <u>Featuers</u>
        </div>
        <div class="col-2 q-py-sm bg-dark text-h4 text-white text-center">
          <u>Price</u>
        </div>
      </div>
      <div
        class="row container q-col-gutter-x-sm"
        v-for="item in cars"
        :key="item"
      >
        <div class="col-3">
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            style="height: 30vh"
          >
            <q-carousel-slide
              :name="1"
              img-src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D"
            />
          </q-carousel>
        </div>
        <div class="col-2 flex flex-center">
          <div class="text-subtitle1">{{ item.name }}</div>
          <div class="text-subtitle1">{{ item.year }}</div>
          <div class="text-subtitle1">{{ item.color }}</div>
        </div>
        <div class="col-2 flex flex-center">
          <div class="text-subtitle1">{{ item.type }}</div>
          <div class="text-subtitle1">{{ item.capacity }}</div>
          <div class="text-subtitle1">{{ item.transmission }}</div>
          <div class="text-subtitle1">{{ item.milage }}</div>
        </div>
        <div class="col flex flex-center">
          <div class="text-subtitle1">{{ item.feature }}</div>
          <div class="text-subtitle1">{{ item.feature }}</div>
          <div class="text-subtitle1">{{ item.feature }}</div>
          <div class="text-subtitle1">{{ item.feature }}</div>
        </div>
        <div class="col-2 flex flex-center">
          <div class="text-subtitle1">$ 20000</div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      cars: [
        {
          name: "Audi",
          year: "2020",
          color: "Black",
          type: "Sedan",
          capacity: "5 seats",
          transmission: "Manual",
          milage: "60k miles",
          feature: "Feature",
        },
      ],
    };
  },
};
</script>
