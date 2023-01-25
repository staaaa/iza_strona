<template>
  <div class="wrapper">
    <router-link to="/" @click="scroll">
      <img src="../static/images/icon.jpg" class="ikonka" alt="" />
    </router-link>
    <div class="left">
      <router-link to="/" @click="scroll">
        <p class="nav-header">Izabela Mikołajewska</p>
      </router-link>
    </div>
    <div class="right">
      <span class="navigation">
        <router-link to="/oferta" @click="scroll">
          <p class="menu-item" :class="oferta ? 'underline' : ''">OFERTA</p>
        </router-link>
        <router-link to="/cennik" @click="scroll">
          <p class="menu-item" :class="cennik ? 'underline' : ''">CENNIK</p>
        </router-link>
        <router-link to="/portfolio" @click="scroll">
          <p class="menu-item" :class="portfolio ? 'underline' : ''">
            PORTFOLIO
          </p>
        </router-link>
      </span>
      <img
        class="menu"
        src="../static/icons/bars-solid.svg"
        alt=""
        @click="menuOn"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    oferta() {
      return this.$route.path == "/oferta" ? true : false;
    },
    cennik() {
      return this.$route.path == "/cennik" ? true : false;
    },
    portfolio() {
      return this.$route.path == "/portfolio" ? true : false;
    },
    ...mapGetters(["getMenu"]),
  },
  methods: {
    ...mapActions(["setMenu"]),
    menuOn() {
      if (this.getMenu.isIn == false) {
        this.setMenu(true);
      } else this.setMenu(false);
    },
    scroll() {
      window.scrollTo({ top: 0, behavior: "instant" });
    },
  },
};
</script>
<style scoped>
* {
  user-select: none;
}
.wrapper {
  position: fixed;
  font-family: "Dosis", sans-serif;
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #f1f1f1;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
.left {
  width: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  flex-direction: row;
  color: #101010;
}
.right {
  width: 30%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 20px;
}
img {
  max-height: 50%;
  width: 20px;
}
.menu {
  cursor: pointer;
}
.navigation {
  display: none;
}
.socials {
  display: none;
}
@media only screen and (min-width: 768px) {
  .left {
    font-size: 2rem;
  }
  .right img {
    width: 44px;
    margin: 0px 10px;
  }
  .socials img {
    width: 28px;
  }
}
@media only screen and (min-width: 965px) {
  .socials {
    display: initial;
  }
  .navigation {
    display: flex;
  }
  .navigation a {
    margin: 0 10px;
    font-size: 1.5rem;
  }
  .menu {
    display: none;
  }
  .left {
    width: 35%;
  }
  .right {
    width: 65%;
  }
}
.underline {
  text-decoration: underline;
}
.ikonka {
  width: 80px;
  height: 80px;
  max-height: 100%;
}
</style>
