<template>
  <q-page class="bg-grey-4">
    <div class="container">
      <q-carousel swipeable animated v-model="slide" thumbnails infinite>
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

    <div class="q-mt-xl bg-white container">
      <div class="q-pt-sm bg-dark"></div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="text-h5 q-mt-xl text-bold col-5"><u>Car Details</u></div>
        <div class="row q-pl-xl">
          <div class="col-6 row">
            <div class="col-5 q-pl-xl q-gutter-y-sm">
              <div class="text-h6">Model Name:</div>
              <div class="text-h6">Year:</div>
              <div class="text-h6">Condition:</div>
              <div class="text-h6">Exterior Color:</div>
            </div>
            <div class="col-7 q-pl-md q-gutter-y-sm">
              <div class="text-h6">Honda Civic 1.8</div>
              <div class="text-h6">2023</div>
              <div class="text-h6">New</div>
              <div class="text-h6">Red</div>
            </div>
          </div>
          <q-separator
            vertical
            color="dark"
            class="q-pa-none"
            style="margin-right: 50px"
          />
          <div class="col row">
            <div class="col-5 q-pl-xl q-gutter-y-sm">
              <div class="text-h6">Milage per KM:</div>
              <div class="text-h6">Engine Type:</div>
              <div class="text-h6">Capacity:</div>
              <div class="text-h6">Transmission:</div>
            </div>
            <div class="col-7 q-pl-xl q-gutter-y-sm">
              <div class="text-h6">20 km</div>
              <div class="text-h6">Petrol</div>
              <div class="text-h6">1800 cc</div>
              <div class="text-h6">Automatic</div>
            </div>
          </div>
        </div>
        <div class="text-h5 q-mt-xl text-bold col-5">
          <u>Description & Features</u>
        </div>
        <div class="row q-pl-xl">
          <div class="col-6 row">
            <div class="col-5 q-pl-xl q-gutter-y-sm">
              <div class="text-h6">Description:</div>
            </div>
            <div class="col-7 q-pl-md q-gutter-y-sm">
              <div class="text-h6 q-pr-md">
                Condition New. just 1000 KM Drive
              </div>
            </div>
          </div>
          <q-separator
            vertical
            color="dark"
            class="q-pa-none"
            style="margin-right: 50px"
          />
          <div class="col row">
            <div
              class="row col-5 q-pl-xl q-gutter-y-sm"
              v-for="item in feature"
              :key="item"
            >
              <q-icon name="radio_button_checked" class="q-mt-lg q-pr-sm" />
              <div class="text-h6 q-pt-sm">{{ item.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-py-lg"></div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      feature: [
        {
          title: "Air Condition",
        },
        {
          title: "Climate Control",
        },
        {
          title: "Front Camera",
        },
        {
          title: "Cruise Control",
        },
        {
          title: "Rear Speaker",
        },
        {
          title: "Alloy Rim",
        },
        {
          title: "Sun Roof",
        },
        {
          title: "Heated Seats",
        },
      ],
    };
  },
};
</script>
