<template>
  <q-page class="q-mx-xl container">
    <div class="q-col-gutter-md row items-center q-mt-xl">
      <div class="col text-center">
        <q-img
          src="../assets/ImagenPrincipal.png"
          class="col-sm-12 justify-center"
          width="75%"
        />
      </div>
    </div>

    <div class="row justify-center q-my-xl">
      <q-img
        src="../assets/Logo.png"
        spinner-color="primary"
        spinner-size="82px"
        width="20%"
      />
    </div>
    <h2 class="text-primary text-center q-my-xl">Nuestras Cervezas</h2>
    <!-- Descripción de productos  -->
    <div class="q-col-gutter-md row justify-center items-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img
          src="../assets/productos/cervezas/papisa/etiqueta.png"
          width="50%"
        >
          <div class="absolute-bottom text-center">
            <q-btn
              label=" LA PAPISA - WEISSBIER"
              to="/cervezas/la-papisa"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img
          src="../assets/productos/cervezas/emperatriz/etiqueta.png"
          width="50%"
        >
          <div class="absolute-bottom text-center">
            <q-btn
              label=" LA EMPERATRIZ - IRISH RED"
              to="/cervezas/la-emperatriz"
              flat
            />
          </div>
        </q-img>
      </div>
      <!-- <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/Luna1.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label=" LA JUSTICIA - SCOTTISH ALE"
              to="/cervezas/la-justicia"
              flat
            />
          </div>
        </q-img>
      </div> -->
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img
          src="../assets/productos/cervezas/estrella/etiqueta.png"
          width="50%"
        >
          <div class="absolute-bottom text-center">
            <q-btn
              label=" LA ESTRELLA - BELGIAN BLONDE"
              to="/cervezas/la-estrella"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/etiqueta.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA LUNA - MILKY STOUT" to="/cervezas/la-luna" flat />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/sol/etiqueta.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label="EL SOL - DORADA PAMPEANA"
              to="/cervezas/el-sol"
              flat
            />
          </div>
        </q-img>
      </div>
    </div>
    <h2 class="text-primary text-center q-my-xl">Nuestras Kombuchas</h2>
    <!-- Descripción de productos  -->
    <div class="row items-center justify-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center q-mb-md">
        <q-img src="../assets/productos/kombuchas/Algiz1.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label=" Algiz 1 - Cúrcuma, cedrón y maqui"
              to="/kombuchas/algiz1"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center q-mb-md">
        <q-img src="../assets/productos/kombuchas/Algiz2.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label="Algiz 2 - Frutilla, arándano y hierba buena"
              to="/kombuchas/algiz2"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center q-mb-xl">
        <q-img src="../assets/productos/kombuchas/Algiz3.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label="Algiz 3 - Jengibre, limón y hierba buena"
              to="/kombuchas/algiz3"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center q-mb-md">
        <q-img src="../assets/productos/kombuchas/Algiz4.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label="Algiz 4 - Piña y lúpulo"
              to="/kombuchas/algiz4"
              flat
            />
          </div>
        </q-img>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center q-mb-md">
        <q-img src="../assets/productos/kombuchas/Algiz5.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn
              label="Algiz 5- Pomelo y albahaca"
              to="/kombuchas/algiz5"
              flat
            />
          </div>
        </q-img>
      </div>
    </div>
    <!-- <h2 class="text-primary text-center q-my-xl">Nuestro Sake</h2>

    <div class="q-col-gutter-md row items-center">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 text-center">
        <q-img src="../assets/productos/cervezas/luna/Luna1.png" width="50%">
          <div class="absolute-bottom text-center">
            <q-btn label=" LA PAPISA - WEISSBIER" to="/" flat />
          </div>
        </q-img>
      </div>
    </div> -->
    <br />
    <br />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
</script>
