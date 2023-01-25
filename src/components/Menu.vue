<template>
  <div
    class="menu"
    :class="[
      getMenu.isIn ? 'menuAnimIn' : '',
      getMenu.isOut ? 'menuAnimOut' : '',
    ]"
  >
    <div class="top">
      <router-link @click="turnMenuOff" to="/oferta">
        <p class="menu-item" :class="oferta ? 'underline' : ''">OFERTA</p>
        <LineVue />
      </router-link>
      <router-link @click="turnMenuOff" to="/cennik">
        <p class="menu-item" :class="cennik ? 'underline' : ''">CENNIK</p>
        <LineVue />
      </router-link>
      <router-link @click="turnMenuOff" to="/portfolio">
        <p class="menu-item" :class="portfolio ? 'underline' : ''">PORTFOLIO</p>
        <LineVue />
      </router-link>
    </div>
    <div class="bottom">
      <span class="socials">
        <a href="https://www.facebook.com/profile.php?id=100015322933578">
          <img src="../static/icons/square-facebook.svg" alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="../static/icons/teams.svg" alt="" />
        </a>
        <a href="https://instagram.com/izabelamikolajewska?igshid=ZDdkNTZiNTM=">
          <img src="../static/icons/instagram.svg" alt="" />
        </a>
      </span>
      <span class="socials">
        <a href="https://www.instagram.com/">
          <img src="../static/icons/discord.svg" alt="" />
        </a>
        <a href="https://join.skype.com/invite/CkjJwqjdGOwL">
          <img src="../static/icons/skype.svg" alt="" />
        </a>
        <a href="https://wa.me/message/7AIPPCXCJWNTL1">
          <img src="../static/icons/square-whatsapp.svg" alt="" />
        </a>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import LineVue from "./Line.vue";

export default {
  components: {
    LineVue,
  },
  methods: {
    ...mapActions(["setMenu"]),
    turnMenuOff() {
      window.scrollTo({ top: 0, behavior: "instant" });
      this.setMenu(false);
    },
  },
  computed: {
    ...mapGetters(["getMenu"]),
    oferta() {
      return this.$route.path == "/oferta" ? true : false;
    },
    cennik() {
      return this.$route.path == "/wyksztalcenie" ? true : false;
    },
    portfolio() {
      return this.$route.path == "/portfolio" ? true : false;
    },
  },
};
</script>
<style scoped>
@keyframes menuAnimationIn {
  0% {
    right: -100%;
  }
  100% {
    right: 0%;
  }
}
@keyframes menuAnimationOut {
  0% {
    right: 0%;
  }
  100% {
    right: -100%;
  }
}
.menu {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: #f1f1f1;
  right: -100%;
  top: 0%;
  display: flex;
  padding-top: 100px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: -1;
}
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu-item {
  font-size: 2.5rem;
  font-family: "Dosis", sans-serif;
  font-weight: 600;
  margin-top: 30px !important;
}
.menuAnimIn {
  right: -100%;
  animation-name: menuAnimationIn;
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
}
.menuAnimOut {
  right: 0%;
  animation-name: menuAnimationOut;
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
}
.socials img {
  width: 38px;
  margin: 10px;
}
.bottom {
  display: flex;
  flex-direction: column;
}
</style>
