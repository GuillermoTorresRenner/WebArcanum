<template>
  <q-page class="q-mx-xl container">
    <div class="q-col-gutter-md row items-center q-mt-xl">
      <div class="col text-center">
        <q-img
          src="../assets/ImagenPrincipal.png"
          class="col-sm-12 justify-center"
        />
      </div>
    </div>

    <h4 class="text-accent text-center q-my-xl">Así comienzamos la historia</h4>

    <q-parallax :height="300" :speed="3">
      <template v-slot:media>
        <img src="../assets/cerveceria.jpeg" />
      </template>

      <div class="row justify-center">
        <img src="../assets/Logo.png" style="width: 30%" />
      </div>
    </q-parallax>
    <h2 class="text-primary text-center q-my-xl">Nuestras Cervezas</h2>
    <!-- Descripción de productos  -->
    <div class="q-col-gutter-md row items-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA PAPISA - WEISSBIER" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA EMPERATRIZ - IRISH RED" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA JUSTICIA - SCOTTISH ALE" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA ESTRELLA - BELGIAN BLONDE" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA LUNA - MILKY STOUT" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label="EL SOL - DORADA PAMPEANA" to="/" flat />
          </div>
        </q-img>
      </div>
    </div>
    <h2 class="text-primary text-center q-my-xl">Nuestras Kombuchas</h2>
    <!-- Descripción de productos  -->
    <div class="q-col-gutter-md row items-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA PAPISA - WEISSBIER" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA EMPERATRIZ - IRISH RED" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA JUSTICIA - SCOTTISH ALE" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA ESTRELLA - BELGIAN BLONDE" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA LUNA - MILKY STOUT" to="/" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label="EL SOL - DORADA PAMPEANA" to="/" flat />
          </div>
        </q-img>
      </div>
    </div>
    <h2 class="text-primary text-center q-my-xl">Nuestro Sake</h2>
    <!-- Descripción de productos  -->
    <div class="q-col-gutter-md row items-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/1.jpg" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA PAPISA - WEISSBIER" to="/" flat />
          </div>
        </q-img>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
</script>
