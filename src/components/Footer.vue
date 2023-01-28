<template>
  <div class="wrapper">
    <Line />
    <div class="inner-wrapper">
      <div class="column">
        <h1>KONTAKT</h1>
        <h2 class="mail" @click="copyToClipboard">
          mikolajewskaizabela@gmail.com
        </h2>
        <h2 class="number">667891689</h2>
        <div class="clipboard">Adres skopiowano do schowka.</div>
      </div>
      <div class="column">
        <h1>SOCIALE</h1>
        <span>
          <a href="https://www.facebook.com/profile.php?id=100015322933578">
            <img src="../static/icons/square-facebook.svg" alt="" />
          </a>
          <a href="https://teams.live.com/l/invite/FEAIES5cSp4Hcoo5wE">
            <img src="../static/icons/teams.svg" alt="" />
          </a>
          <a
            href="https://instagram.com/izabelamikolajewska?igshid=ZDdkNTZiNTM="
          >
            <img src="../static/icons/instagram.svg" alt="" />
          </a>
        </span>
        <span>
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
      <div class="column">
        <h1>TWÓRCY</h1>
        <h2 class="creators">
          <a target="_blank" href="https://github.com/staaaa">
            STANISŁAW BOZYCH
          </a>
        </h2>
        <h2 class="creators">
          <a target="_blank" href="http://jakubcierocki.pl/">
            JAKUB CIEROCKI
          </a>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import Line from "./Line.vue";
export default {
  components: {
    Line,
  },
  methods: {
    copyToClipboard() {
      let textToCopy = "mikolajewskaizabela@gmail.com";
      document.querySelector(".clipboard").classList.add("initial-display");
      setTimeout(() => {
        document
          .querySelector(".clipboard")
          .classList.remove("initial-display");
      }, 2000);
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(textToCopy);
      } else {
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  height: auto;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.inner-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 33%;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
}
.mail {
  cursor: pointer;
}
.creators {
  font-size: 0.7rem;
}
h1 {
  font-size: 1.5rem;
  font-family: "Dosis";
}
h2 {
  font-size: 1.25rem;
  font-family: "Dosis";
}
img {
  max-height: 50%;
  width: 30px;
  margin: 3px;
}
.clipboard {
  position: absolute;
  bottom: 325px;

  background-color: #f1f1f1;
  border: 2px solid black;
  padding: 10px;
  border-radius: 20px;
  font-family: "Dosis";
  font-weight: 700;
  font-size: 0.8rem;
  opacity: 0;
  transition: all 0.5s;
}
.initial-display {
  opacity: 1;
  transition: all 0.5s;
}
@media screen and (min-width: 768px) {
  .clipboard {
    bottom: 115px;
  }
  .inner-wrapper {
    flex-direction: row;
  }
  .clipboard {
    font-size: 0.9rem;
  }
}
@media screen and (min-width: 1200px) {
  .clipboard {
    font-size: 1.2rem;
  }
  .creators {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
}
</style>
