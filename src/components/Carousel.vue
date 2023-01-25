<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="4000"
  >
    <div class="carousel-indicators indi-top">
      <div
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></div>
      <div
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></div>
      <div
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="'./assets/' + photos[0]" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-md-block">
          <h5>{{ captions[0] }}</h5>
          <p>{{ descriptions[0] }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="'./assets/' + photos[1]" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-md-block">
          <h5>{{ captions[1] }}</h5>
          <p>{{ descriptions[1] }}</p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="'./assets/' + photos[2]" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-md-block">
          <h5>{{ captions[2] }}</h5>
          <p>{{ descriptions[2] }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    photos: Array,
    captions: Array,
    descriptions: Array,
  },
};
</script>
<style scoped>
#carouselExampleCaptions {
  max-width: 500px;
}
.carousel-indicators {
  top: 0%;
}
.carousel-caption {
  color: #fff !important;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.carousel-inner {
  border-radius: 5%;
}
.carousel-indicators div {
  width: 100%;
  height: 2px;
  transition: 0.5s;
  background-color: #fff;
  opacity: 1 !important;
  margin-top: -5px;
}
.carousel-indicators .active {
  height: 5px;
  background-color: #000;
}
</style>
