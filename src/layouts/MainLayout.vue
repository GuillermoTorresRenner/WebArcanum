<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-secondary" reveal>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="ocultarMenu"
        />
        <a href="/">
          <img src="../assets/Logo.png" width="40" class="q-ml-md"
        /></a>
        <div class="ocultarBarra">
          <q-btn color="primary" label="El Aquelarre" class="q-mx-md" size="sm">
          </q-btn>
          <q-btn color="primary" label="Nuestras Cervezas" size="sm">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/la-papisa">
                  <q-item-section>LA PAPISA - Weissbier</q-item-section>
                </q-item>
                <q-item clickable to="/la-emperatriz">
                  <q-item-section>LA EMPERATRIZ - Irish Red</q-item-section>
                </q-item>
                <q-item clickable to="/la-justicia">
                  <q-item-section>LA JUSTICIA - Scottish Ale</q-item-section>
                </q-item>
                <q-item clickable to="/la-estrella">
                  <q-item-section>LA ESTRELLA - Belgian Blonde</q-item-section>
                </q-item>
                <q-item clickable to="/la-luna">
                  <q-item-section>LA LUNA - Milky Stout</q-item-section>
                </q-item>
                <q-item clickable to="/el-sol">
                  <q-item-section>EL SOL - Dorada Pampeana</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            color="primary"
            label="Nuestra Kombucha"
            class="q-mx-md"
            size="sm"
          >
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/el-sol">
                  <q-item-section>Algiz -1</q-item-section>
                </q-item>
                <q-item clickable to="/el-sol">
                  <q-item-section>Algiz -2</q-item-section>
                </q-item>
                <q-item clickable to="/el-sol">
                  <q-item-section>Algiz -3</q-item-section>
                </q-item>
                <q-item clickable to="/el-sol">
                  <q-item-section>Algiz -4</q-item-section>
                </q-item>
                <q-item clickable to="/el-sol">
                  <q-item-section>Algiz -5</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="primary" label="Nuestro Sake" size="sm">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable to="/el-sol">
                  <q-item-section>GAIKOKU - Nigorizake</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-btn
          label="contacto"
          @click="onClick"
          class="q-mx-md"
          size="sm"
          color="primary"
        />
        <q-btn
          icon="ion-cart "
          @click="onClick"
          class=""
          size="sm"
          color="primary"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      width="200"
      color="primary"
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

    <q-footer elevated class="bg-secondary" reveal>
      <q-toolbar>
        <strong class="text-caption text-primary">Nuestras Redes</strong>
        <q-btn
          color="primary"
          icon="ion-logo-instagram"
          @click="insta"
          class=""
          flat
        />
        <q-btn color="primary" icon="ion-logo-facebook" @click="face" flat />
        <q-btn color="primary" icon="ion-mail" @click="mail" class="" flat />
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
        color="positive"
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
    title: "EL AQUELARRE",
    unico: true,
    link: "https://quasar.dev",
  },
  {
    cat: " CERVEZAS",
    title: "LA PAPISA",
    caption: "Weissbier",
    link: "https://github.com/quasarframework",
  },
  {
    title: "LA EMPERATRIZ",
    caption: "Irish Red",
    link: "https://chat.quasar.dev",
  },
  {
    title: "LA JUSTICIA",
    caption: "Scotish Ale",
    link: "https://forum.quasar.dev",
  },
  {
    title: "LA ESTRELLA",
    caption: "Belgian Blonde",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "LA LUNA",
    caption: "Milky Stout",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "EL SOL",
    caption: "Dorada Pampeana",
    link: "https://awesome.quasar.dev",
  },
  {
    cat: "KOMBUCHAS",
    title: "ALGIZ",
    caption: "1",
    link: "https://github.com/quasarframework",
  },
  {
    title: "ALGIZ",
    caption: "2",
    link: "https://github.com/quasarframework",
  },
  {
    title: "ALGIZ",
    caption: "3",
    link: "https://github.com/quasarframework",
  },
  {
    title: "ALGIZ",
    caption: "4",
    link: "https://github.com/quasarframework",
  },
  {
    title: "ALGIZ",
    caption: "5",
    link: "https://github.com/quasarframework",
  },
  {
    cat: "SAKE",
    title: "GAIKOKU",
    caption: "Nigorizake",
    link: "https://github.com/quasarframework",
  },
  {
    title: "TIENDA",
    unico: true,
    link: "https://awesome.quasar.dev",
  },
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
