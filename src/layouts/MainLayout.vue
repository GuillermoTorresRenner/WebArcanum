<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary" reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="ocultarMenu"
          color="negative"
        />
        <a href="/" class="q-my-sm">
          <img src="../assets/Logo.png" width="40" class="q-ml-md"
        /></a>
        <q-btn
          color="negative"
          label="El Alquimista"
          class="q-mx-md"
          size="sm"
          text-color="secondary"
          to="/el-alquimista"
        >
        </q-btn>
        <div class="ocultarBarra">
          <q-btn
            color="negative"
            label="Nuestras Cervezas"
            size="sm"
            text-color="secondary"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/cervezas/la-papisa">
                  <q-item-section>LA PAPISA - Weissbier</q-item-section>
                </q-item>
                <q-item clickable to="/cervezas/la-emperatriz">
                  <q-item-section>LA EMPERATRIZ - Irish Red</q-item-section>
                </q-item>
                <!-- <q-item clickable to="/cervezas/la-justicia">
                  <q-item-section>LA JUSTICIA - Scottish Ale</q-item-section>
                </q-item> -->
                <q-item clickable to="/cervezas/la-estrella">
                  <q-item-section>LA ESTRELLA - Belgian Blonde</q-item-section>
                </q-item>
                <q-item clickable to="/cervezas/la-luna">
                  <q-item-section>LA LUNA - Milky Stout</q-item-section>
                </q-item>
                <q-item clickable to="/cervezas/el-sol">
                  <q-item-section>EL SOL - Dorada Pampeana</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            color="negative"
            label="Nuestra Kombucha"
            class="q-mx-md"
            size="sm"
            text-color="secondary"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/kombuchas/algiz1">
                  <q-item-section>Cúrcuma, Cedrón y Maqui</q-item-section>
                </q-item>
                <q-item clickable to="/kombuchas/algiz2">
                  <q-item-section
                    >Frutilla, Arándanos y Hierba Buena</q-item-section
                  >
                </q-item>
                <q-item clickable to="/kombuchas/algiz3">
                  <q-item-section
                    >Jengibre, Limón y Hierba Buena</q-item-section
                  >
                </q-item>
                <q-item clickable to="/kombuchas/algiz4">
                  <q-item-section>Piña y Lúṕulo</q-item-section>
                </q-item>
                <q-item clickable to="/kombuchas/algiz5">
                  <q-item-section>Pomelo y Albahaca</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <!-- <q-btn
            color="negative"
            label="Nuestro Sake"
            size="sm"
            text-color="secondary"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/el-sol">
                  <q-item-section>GAIKOKU - Nigorizake</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn> -->
        </div>

        <q-btn
          label="contacto"
          @click="onClick"
          class="q-mx-md"
          size="sm"
          color="negative"
          text-color="secondary"
          to="/contacto"
        />
        <!-- carro de compras -->
        <!-- <q-btn
          icon="ion-cart "
          @click="onClick"
          class=""
          size="sm"
          color="negative"
          text-color="secondary"
              /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      width="200"
      color="secondary"
      class="ocultarMenu"
    >
      <q-list class="">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer elevated class="bg-primary" reveal>
      <q-toolbar>
        <strong class="text-caption text-negative">Nuestras Redes</strong>
        <q-btn
          color="negative"
          icon="ion-logo-instagram"
          @click="insta"
          class=""
          flat
        />
        <q-btn color="negative" icon="ion-logo-facebook" @click="face" flat />
        <q-btn color="negative" icon="ion-mail" @click="mail" class="" flat />
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="ion-logo-whatsapp"
        fab-mini
        dense
        color="green"
        tool
        @click="whatsapp"
      >
        <q-tooltip
          transition-show="rotate"
          transition-hide="rotate"
          class="bg-accent"
          >Chatea con Nosotros</q-tooltip
        >
      </q-btn>
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    cat: " CERVEZAS",
    title: "LA PAPISA",
    caption: "Weissbier",
    link: "/cervezas/la-papisa",
  },
  {
    title: "LA EMPERATRIZ",
    caption: "Irish Red",
    link: "/cervezas/la-emperatriz",
  },
  // {
  //   title: "LA JUSTICIA",
  //   caption: "Scotish Ale",
  //   link: "/cervezas/la-justicia",
  // },
  {
    title: "LA ESTRELLA",
    caption: "Belgian Blonde",
    link: "/cervezas/la-estrella",
  },
  {
    title: "LA LUNA",
    caption: "Milky Stout",
    link: "/cervezas/la-luna",
  },
  {
    title: "EL SOL",
    caption: "Dorada Pampeana",
    link: "/cervezas/el-sol",
  },
  {
    cat: "KOMBUCHAS",
    title: "Cúcuma, Cedrón y Maqui",
    caption: "Algiz 1",
    link: "/kombuchas/algiz1",
  },
  {
    title: "Frutilla, Arándano y Hierba Buena",
    caption: "Algiz 2",
    link: "/kombuchas/algiz2",
  },
  {
    title: "Jengibre, Limón y Hierba Buena",
    caption: "Algiz 3",
    link: "/kombuchas/algiz3",
  },
  {
    title: "Piña y Lúpulo",
    caption: "Algiz 4",
    link: "/kombuchas/algiz4",
  },
  {
    title: "Pomelo y Albahaca",
    caption: "Algiz 5",
    link: "/kombuchas/algiz5",
  },
  // {
  //   cat: "SAKE",
  //   title: "GAIKOKU",
  //   caption: "Nigorizake",
  //   link: "https://github.com/quasarframework",
  // },

  {
    title: "CONTACTO",
    unico: true,
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      insta() {
        window.open("https://www.instagram.com/cerveceriarcanum/", "_blank");
      },
      face() {
        window.open(
          "https://www.facebook.com/profile.php?id=100075290310369",
          "_blank"
        );
      },
      mail() {
        window.open("mailto:cerveceriarcanum@gmail.com", "_blank");
      },
      whatsapp() {
        window.open(
          "https://api.whatsapp.com/send?phone=+56964281840&text=Hola%20Cervecería%20Arcanum!",
          "_blank"
        );
      },
    };
  },
});
</script>
<style>
@media screen and (min-width: 821px) {
  .ocultarMenu {
    display: none;
  }
}
@media screen and (max-width: 820px) {
  .ocultarBarra {
    display: none;
  }
}
</style>
