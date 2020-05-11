<template>
  <div class="banner-comp">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <template v-for="(item, index) in banners">
        <b-carousel-slide
          :key="index"
          :caption="item.caption"
          :text="item.text"
          :img-src="item.src"
        >
          <h1>{{ item.text }}</h1>
        </b-carousel-slide>
      </template>
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="banners[3]"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>-->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Banner',
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState({
      banners: (state) => state.home.banners
    })
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
