<template>
  <q-page>
    <div class="bg-img"></div>
    <div
      class="margin border bg-white q-my-xl container rounded-borders"
      style="margin-bottom: 100px"
    >
      <div class="text-h3 text-bold text-center text-primary q-py-lg q-mt-xl">
        About
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

    <div class="bg-primary q-py-xl">
      <div class="text-h3 text-center q-pt-lg q-pb-md text-info text-bold">
        How We Do
      </div>
      <div class="row container q-py-xl q-col-gutter-y-md text-center">
        <div class="row container q-py-md q-col-gutter-y-md text-center">
          <div class="col-6 col-md-3">
            <q-img src="~assets/selection1.png" height="70px" width="70px" />
            <div class="text-h5 text-info text-bold q-pt-md">1. Selection</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/discussion.png" height="70px" width="70px" />
            <div class="text-h5 text-info text-bold q-pt-md">2. Discussion</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/finalized.png" height="70px" width="70px" />
            <div class="text-h5 text-info text-bold q-pt-md">3. Finalized</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/delivered.png" height="70px" width="70px" />
            <div class="text-h5 text-info text-bold q-pt-md">4. Delivered</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container bg-white q-my-xl q-pb-xl rounded-borders q-pa-md">
      <div class="text-h3 text-primary text-bold text-center q-py-lg">
        Our Featuers
      </div>
      <q-video
        src="https://www.youtube.com/embed/D-f0yVjYBRQ?si=z8unvstd6UD56Ev-"
        style="height: 500px"
      />
    </div>

    <!-- <div class="bg-primary q-my-xl">
      <div class="container q-px-xl">
        <div class="text-h3 text-bold q-py-xl text-center text-info">
          Company Review
        </div>

        <div
          class="row q-col-gutter-lg q-pb-lg"
          v-for="item in details"
          :key="item"
        >
          <div class="q-pl-xl q-ml-xl col-3 row">
            <div class="text-h6 text-info">{{ item.company }}</div>
            <q-space />
            <div class="text-h6 text-info">:</div>
          </div>
          <div class="col-5">
            <div class="text-h6 text-info">{{ item.detail }}</div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container q-pb-xl q-pt-lg q-my-xl">
      <div class="text-h3 text-primary q-pb-xl text-bold text-center q-py-lg">
        Expert Guidance & Tips on Used Cars
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-4" v-for="item in guidance" :key="item">
          <q-img :src="item.img" height="250px" />
          <div class="q-pa-md box">
            <div class="text-h6 text-primary text-bold">
              {{ item.title }}
            </div>
            <div class="text-subtitle1 text-primary" align="justify">
              {{ item.decs }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary">
      <div class="q-py-xl">
        <div class="row container">
          <div class="col-6 flex flex-center">
            <div class="text-h3 text-bold text-center text-info col-12">
              Coming Soon
            </div>

            <div class="row q-gutter-x-md">
              <div
                class="bg-black q-pa-sm row cursor-pointer"
                style="height: 40px; width: 130px; border-radius: 5px"
              >
                <q-img src="~assets/android.png" height="27px" width="22px" />
                <div
                  class="text-info q-pl-sm"
                  style="margin-top: -5px; font-size: 10px"
                >
                  <div>GET IT ON</div>
                  <div
                    class="text-subtitle1 text-bold"
                    style="margin-top: -5px"
                  >
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
                  class="text-info q-pl-sm"
                  style="margin-top: -5px; font-size: 10px"
                >
                  <div>DOWNLOAD ON THE</div>
                  <div
                    class="text-subtitle1 text-bold"
                    style="margin-top: -5px"
                  >
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
                  class="text-info q-pl-sm"
                  style="margin-top: -5px; font-size: 10px"
                >
                  <div>EXPLORE IT ON</div>
                  <div
                    class="text-subtitle1 text-bold"
                    style="margin-top: -5px"
                  >
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
      <q-separator />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      guidance: [
        {
          img: "https://media.istockphoto.com/id/518308224/photo/buying-new-car-at-car-showroom.webp?b=1&s=170667a&w=0&k=20&c=4YpDowtgNOCp3t8dxhdsh6aogaa5WHQhEASn-uAe_as=",
          title: "Navigating the Process of Buying a Used Car.",
          decs: "Acquiring a car can be an overwhelming endeavor, considering that a vehicle represents a substantial investment for many individuals. Often ranking as the largest or second-largest financial commitment in their lives, it is no wonder that prudence is recommended, particularly when dealing with the acquisition of a pre-owned or used car.",
        },
        {
          img: "https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHVzZWQlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
          title: "Essential Actions After Buying a Used Car.",
          decs: "Delving into the process of acquiring a used car requires meticulous examination of its exterior, interior, and engine. Post-purchase, dealing with a pre-owned, potentially older model introduces additional considerations. In this article, I share personal insights on buying a used car and navigating the post-purchase phase.",
        },
        {
          img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlZCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
          title: "Mistakes to Avoid When Purchasing a Used Car.",
          decs: "Owning a car is a common dream, but not everyone can afford a brand new one. The practical solution is opting for used cars. A significant advantage of used vehicles is their affordability. Purchasing from friends or relatives provides added familiarity, and existing market presence allows for comprehensive knowledge about a specific model's specifications.",
        },
      ],
      details: [
        {
          company: "Company",
          detail: "M.H International Co. Ltd",
        },
        {
          company: "Owner",
          detail: "M. Waleed",
        },
        {
          company: "Phone",
          detail: "+817048053690",
        },
        {
          company: "E-mail",
          detail: "contact@mhintjapan.com",
        },
        {
          company: "Whatsapp",
          detail: "+817048053690",
        },
        {
          company: "Business",
          detail: "Exporter, Dealer",
        },
        {
          company: "Licence No.",
          detail: "541212310900",
        },
      ],
    };
  },
});
</script>


<style lang="scss">
.bg-img {
  background-image: url("../assets/about_bg.png");
  height: 65vh;
}
</style>
