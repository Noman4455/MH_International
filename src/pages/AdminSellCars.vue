<template>
  <q-page class="bg-grey-4">
    <div class="q-pt-xl"></div>
    <div class="bg-white q-pb-xl container">
      <div class="q-pt-sm bg-dark"></div>

      <div class="text-h4 text-bold text-center q-py-lg">
        Upload an Ad with 2 Easy Steps
      </div>
      <div class="row flex flex-center q-pt-lg">
        <div class="row q-col-gutter-md q-pr-xl">
          <q-img src="~assets/car.png" height="60px" width="60px" />
          <div class="text-h6">Enter Car Details</div>
        </div>
        <div class="row q-col-gutter-md q-pl-xl">
          <q-img src="~assets/upload.png" height="60px" width="60px" />
          <div class="text-h6">Upload Car Photoes</div>
        </div>
      </div>
    </div>
    <div class="q-my-xl container bg-white">
      <div class="q-pt-sm bg-dark"></div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="text-h5 q-py-lg text-bold"><u>Car Details</u></div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Model Name:</div>
          </div>
          <div class="col-5">
            <q-input
              v-model="text"
              outlined
              type="text"
              label="E.g: Honda Civic"
            />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Brand / Company:</div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: Honda" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Make Year:</div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: 2023" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Condition:</div>
          </div>
          <div class="col-5">
            <q-select outlined :options="condition" label="Select Type" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6" align="right">Exterior Color:</div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: Red" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6" align="right">Milage per Liter (Km):</div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: 20" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6" align="right">Price ($):</div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: 10000" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6" align="right">Add Description:</div>
          </div>
          <div class="col-5">
            <q-input
              v-model="text"
              outlined
              label="E.g: Honda Civic 1.8...."
              type="textarea"
            />
          </div>
        </div>
      </div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="text-h5 q-pb-lg text-bold">
          <u>Additional Information</u>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Engine Type:</div>
          </div>
          <div class="col-5">
            <q-select outlined :options="engine" label="Select Type" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">
              Engine Capacity (cc):
            </div>
          </div>
          <div class="col-5">
            <q-input v-model="text" outlined type="text" label="E.g: 1800" />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Transmission:</div>
          </div>
          <div class="col-5">
            <q-select
              outlined
              :options="transmission"
              label="Select Transmission"
            />
          </div>
        </div>
        <div class="row q-col-gutter-x-md">
          <div class="col-3 q-pt-sm">
            <div class="text-h6 q-pt-xs" align="right">Features:</div>
          </div>
          <div class="row col-9 q-pt-md q-pb-lg">
            <div class="col-4">
              <div>
                <q-checkbox v-model="teal" label="ABS" color="primary" />
              </div>
              <div>
                <q-checkbox v-model="teal" label="Air Bags" color="primary" />
              </div>
              <div>
                <q-checkbox v-model="teal" label="Alloy Rims" color="primary" />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Air Conditioning"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox v-model="teal" label="FM Radio" color="primary" />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Cruise Control"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox v-model="teal" label="Cool Box" color="primary" />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Climate Control"
                  color="primary"
                />
              </div>
            </div>
            <div class="col-4">
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Front Speakers"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Rear Seat Entertainment"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Rear Speakers"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Rear AC Cents"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Power Steering"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Power Mirror"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Power Windows"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Front Camera"
                  color="primary"
                />
              </div>
            </div>
            <div class="col-4">
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Heated Seats"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Immobilizer Key"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Keyless Entry"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Navigation System"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Power Locks"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Rear Camera"
                  color="primary"
                />
              </div>
              <div>
                <q-checkbox v-model="teal" label="Sun Roof" color="primary" />
              </div>
              <div>
                <q-checkbox
                  v-model="teal"
                  label="Steering Switches"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-white">
      <div class="q-pt-sm bg-dark"></div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="text-h5 q-pt-lg q-pb-md text-bold">
          <u>Upload Photoes</u>
        </div>
        <div style="border: 3px dashed #4e4945; height: 50vh; margin: 0px 20px">
          <div class="flex flex-center q-pt-lg">
            <q-input
              @update:model-value="
                (val) => {
                  files = val;
                }
              "
              multiple
              filled
              bg-color="grey-4"
              type="file"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="q-py-lg container" align="right">
      <q-btn
        color="primary"
        icon="send"
        class="q-px-xl q-py-sm"
        label="Submit"
      />
    </div>
  </q-page>
</template>


<script>
import { ref } from "vue";

export default {
  name: "IndexPage",
  setup() {
    return {
      model: ref(null),
      engine: ["Petrol", "Diesel", "LPG", "CNG", "Hybrid", "Electric"],
      transmission: ["Manual", "Automatic"],
      condition: ["Used", "New"],
      teal: ref(true),
      files: ref(null),
    };
  },
};
</script>

