<template>
  <div class="wrapper">
    <div class="row">
      <div class="block-text-full">
        <p class="title">{{ Offer.title_1 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="subtitle">{{ Offer.paragraph1.subtitle_1 }}</p>
        <p class="justify">{{ Offer.paragraph1.text_1 }}</p>
        <p class="justify">{{ Offer.paragraph1.text_2 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="subtitle">{{ Offer.paragraph2.subtitle_1 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph2.text_1 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph2.text_2 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph2.text_3 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph2.text_4 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="subtitle">{{ Offer.paragraph3.subtitle_1 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_1 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_2 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_3 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_4 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_5 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph3.text_6 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="subtitle">{{ Offer.paragraph4.subtitle_1 }}</p>
        <p class="justify">{{ Offer.paragraph4.text_1 }}</p>
        <p class="justify">{{ Offer.paragraph4.text_2 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_3 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_4 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_5 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_6 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_7 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph4.text_8 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="subtitle">{{ Offer.paragraph5.subtitle_1 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="center">{{ Offer.paragraph5.text_1 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="justify">{{ Offer.paragraph5.text_2 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_3 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_4 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_5 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_6 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="justify">{{ Offer.paragraph5.text_7 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="center">{{ Offer.paragraph5.text_8 }}</p>
      </div>
      <div class="block-text">
        <p class="justify bold">&#x2022; {{ Offer.paragraph5.text_9 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_10 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_11 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_12 }}</p>
      </div>
      <div class="block-text">
        <p class="justify">{{ Offer.paragraph5.text_13 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_14 }}</p>
        <p class="justify">&#x2022; {{ Offer.paragraph5.text_15 }}</p>
        <p class="justify bold">&#x2022; {{ Offer.paragraph5.text_16 }}</p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="justify">{{ Offer.paragraph5.text_17 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Offer from "../static/texts/Offer.json";
export default {
  data() {
    return {
      Offer,
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-color: #f1f1f1;
}
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5%;
}
.block-text {
  width: 100%;
  text-align: left;
  padding: 0px 30px;
  font-family: "Dosis", sans-serif;
  font-weight: 100;
  font-size: 0.85rem;
}
.block-text-full {
  width: 100%;
  text-align: left;
  padding: 0px 30px;
  font-family: "Dosis", sans-serif;
  font-weight: 100;
  font-size: 0.85rem;
}
.bold {
  font-weight: 700;
}
.justify {
  text-align: justify;
}
.center {
  text-align: center;
}
.title {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}
.subtitle {
  font-size: 0.95rem;
  font-weight: 300;
  text-align: center;
  margin-top: 30px !important;
}
.row-single-item {
  align-items: center !important;
}
@media only screen and (min-width: 1200px) {
  .row {
    flex-direction: row;
  }
  .block-text {
    width: 50%;
    margin-top: 0px;
  }
  .block-text-full {
    margin-top: 0px;
  }
  .image-showcase {
    max-width: 60%;
    border-radius: 5%;
  }
}
@media only screen and (min-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.75rem;
  }
  .block-text {
    font-size: 1.5rem;
  }
  .block-text-full {
    font-size: 1.5rem;
  }
  .row {
    padding: 0 10%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .image-showcase {
    margin: none;
  }
}
</style>
