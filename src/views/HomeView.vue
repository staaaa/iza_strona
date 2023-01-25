<template>
  <div class="wrapper">
    <div class="row first">
      <div class="carousel-wrapper">
        <p class="header">VAN W AKCJI:</p>
        <CarouselVue
          :photos="photos"
          :captions="captions"
          :descriptions="descriptions"
        />
      </div>
      <div class="block-text">
        <p class="title">Dzień dobry, dobry wieczór, hej, cześć!</p>
        <p class="justify">
          Mam na Imię Izabela i pragnę Was powitać na stronie
          <span class="bold">„Rozmawianie w Vanie”</span>. Przychodzę do Was z
          ofertą wsparcia w poszukiwaniu Waszej drogi zawodowej, edukacyjnej,
          życiowej. Jeśli szukacie zmiany, szeroko rozumianej zmiany- zarówno
          pod względem zawodowym jak i tej związanej z życiem codziennym,
          wsparcia w redagowaniu dokumentów aplikacyjnych - stworzeniu,
          podpowiedzi jak je sporządzić, przygotowania się do rozmowy
          rekrutacyjnej lub zwykłej ludzkiej rozmowy, to właśnie u mnie to
          wszystko znajdziecie. Zapraszam serdecznie do zapoznania się z ofertą,
          którą dla Was przygotowałam.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="title">Kim jestem?</p>
        <p class="justify">
          Na początek się przedstawię, mgr Izabela Mikołajewska, doradca
          zawodowy, specjalista ds. personalnych, rekrutacji, zarządzania
          talentami, pedagog, oligofrenopedagog, coach, nauczyciel wychowania
          fizycznego oraz trener ręcznej. Jestem człowiekiem, który lubi dzielić
          się wiedzą i pomagać zdobywać ją innym. Aktualnie pracownik oświaty na
          pełnym etacie - bo lubię ludzi, młodzież i pracę z nimi. Prowadzę
          indywidualne poradnictwo zawodowe oraz sesje coachingowe online za
          pomocą wideokomunikatorów, Współpracuję także z Zakładami Pracy
          Chronionej i wspieram osoby z niepełnosprawnością tworząc z nimi
          Indywidualne Programy Rehabilitacji. Moje życie jest otwarte na
          zmiany, zmiany są ważne i potrzebne do samorozwoju. Dzięki zmianom
          doświadczamy i uczymy się nowych umiejętności, samych siebie i
          przekraczamy granice, których do tej pory nie chcieliśmy przekroczyć.
        </p>
      </div>
    </div>
    <div class="row row-single-item">
      <img src="../static/images/trip1.jpg" class="image-showcase" />
    </div>
    <div class="row">
      <div class="block-text-full">
        <p class="title">Jak się odbywają spotkania?</p>
        <p class="justify">
          Mam dla Was ofertę jakiej jeszcze nie było. Oprócz spotkań online za
          pomocą wideokomunikatorów ( Whastapp, Teams, Messenger, Discord,
          Google Meet), możecie porozmawiać ze mną w
          <span class="bold">Vanie</span>. To jest coś z czym się osobiście nie
          spotkałam do tej pory.
          <span class="bold"
            >Van - który ma na imię Elton, jest własnoręcznie zbudowanym
            kampervanem na bazie VW LT 35.</span
          >
          Skąd taki pomysł? Van jest zbudowany z myślą o podróżowaniu bez
          ograniczeń. Jest to dom na kółkach, dzięki, któremu poznawanie świata
          jest łatwiejsze. Vanlife to styl życia do którego się przygotowuję w
          każdej sferze życia. Elton wykorzystywany jest tylko wtedy, kiedy
          jedzie w nieznane. Stąd też urodził się pomysł, aby poznawać w nim nie
          tylko świat ale też ludzi. Chcę korzystać z niego częściej, przy
          okazji łącząc lekkość i całkowity luz vanlifu z procesem wsparcia dla
          ludzi. Nie jest to gabinet z fotelami uszakami, kwiatami, mądrymi
          książkami i sentencjami w ramkach. To zupełnie inne ale bardzo
          przytulne miejsce, które pozwoli Wam poczuć się jak w podróży przez
          własne życie - i te zawodowe i te edukacyjne.
          <span class="bold">Rozmawianie w Vanie</span> z pewnością będzie
          ciekawym doświadczeniem, które zostawi w Was wspomnieniai uszyte na
          miarę możliwości zbudowane na Waszych zasobach. Podczas
          <span class="bold">Rozmawiania w Vanie</span>, poczęstuję herbatą,
          kawą, usiądziecie w wygodnym fotelu i tak będziemy rozmawiać przez 60
          minut sesji. Lokalizacja spotkań to pojęcie względne - będziemy ją
          ustalać indywidualnie - gabinet na kołach ma wiele lokalizacji.
        </p>
      </div>
    </div>
    <div class="row row-single-item">
      <img src="../static/images/trip2.jpg" class="image-showcase" />
    </div>
  </div>
</template>

<script>
import CarouselVue from "../components/Carousel.vue";
import LineVue from "../components/Line.vue";

export default {
  data() {
    return {
      photos: ["van1.jpg", "van2.jpg", "van3.jpg"],
      captions: [
        "Van w drodze",
        "Siedziba firmy",
        "Elton w naturalnym środowisku",
      ],
      descriptions: ["", "", ""],
    };
  },
  components: {
    CarouselVue,
    LineVue,
  },
};
</script>

<style scoped>
.carousel-wrapper {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header {
  font-size: 1rem;
  font-family: "Dosis", sans-serif;
  font-weight: 500;
}
.carousel-wrapper > img {
  width: 100%;
  height: auto;
}
.title {
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}
.subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  margin-top: 30px !important;
}
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
.row-single-item {
  align-items: center !important;
}
.first {
  align-items: flex-start;
}
.block-text {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  padding: 0px 30px;
  font-family: "Dosis", sans-serif;
  font-weight: 100;
  font-size: 1rem;
}
.block-text-full {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  padding: 0px 30px;
  font-family: "Dosis", sans-serif;
  font-weight: 100;
  font-size: 1rem;
}
.justify {
  text-align: justify;
}
.bold {
  font-weight: 700;
}
.image-showcase {
  max-width: 80%;
  border-radius: 5%;
  margin-top: 20px;
}
@media only screen and (min-width: 1200px) {
  .row {
    flex-direction: row;
  }
  .carousel-wrapper {
    width: 50%;
  }
  .block-text {
    width: 50%;
    margin-top: 0px;
  }
  .block-text-full {
    margin-top: 0px;
  }
  .first {
    align-items: center;
  }
  .image-showcase {
    max-width: 60%;
    border-radius: 5%;
  }
}
@media only screen and (min-width: 768px) {
  .title {
    font-size: 2rem;
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
  .header {
    display: initial;
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
