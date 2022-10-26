<template>
  <q-page class="q-mx-xl">
    <h4 class="text-center text-accent q-mt-xl">
      Algiz 3 - Kombucha de jengibre, limón y hierba buena
    </h4>
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          height="500px"
        >
          <q-carousel-slide class="text-center" :name="1">
            <q-img
              src="../../assets/productos/kombuchas/Algiz3.png"
              width="35%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="2">
            <q-img
              src="../../assets/productos/kombuchas/Kombuchas.jpg"
              width="100%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="3">
            <q-img src="../../assets/productos/pack.png" width="35%"
          /></q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h4 text-grey q-mb-md">
              Arma tu 6-Pack personalizado
            </div>
            <p>
              En Cervecería Arcanum trabajamos con packs de 6 unidades de
              cerveza para realizar envios mediante nuestros colaboradores.
            </p>
            <p>
              Te invitamos a armar tu 6-pack personalizado con las kombuchas de
              tu elección. El precio de cada kombucha dentro de un 6-pack es de
              <strong class="text-green">$2000</strong> y cada botella que se no
              se encuentre en un grupo de 6 se cobrará a
              <strong class="text-green">$2.300</strong>
            </p>
            <p>
              <strong> Ejemplo:</strong> En una compra de 14 kombuchas, hay 2
              packs de 6 cervezas más 2 kombuchas sueltas. Las kombuchas dentro
              de un pack se cobrarán a un valor de $2.000, mientras que las
              kombuchas sueltas a un valor de $2.300
            </p>

            <strong class="text-negative">
              Para realizar pedidos de cerveza por favor escribirnos por
              whatsapp</strong
            >
          </q-card-section>

          <!-- <q-card-section>
            <q-form @submit="comprar" class="q-gutter-md">
              <div class="row justify-start items-center">
                <q-input
                  v-model.number="producto.cantidad"
                  type="number"
                  label="Cantidad"
                  hint="Unidades de botellas de 330cc"
                  class="col"
                />
                <p class="q-ml-md col-4">Stock: 10</p>
              </div>
              <div class="row justify-center">
                <q-btn
                  label="Comprar Ahora"
                  type="submit"
                  color="primary"
                  dense
                  class="col"
                  size="sm"
                />
              </div>
              <div class="row justify-center">
                <q-btn
                  label="Agregar al Carrito"
                  color="primary"
                  class="col"
                  dense
                  size="sm"
                  @click="agregarAlCarrito"
                />
              </div>
            </q-form>
          </q-card-section> -->
        </q-card>
      </div>
    </div>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Beneficios de la Kombucha</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        La Kombucha es una antigua receta China de un fermento que se realizaba
        de forma natural sobre infusiones de Té azucaradas y que se consumía en
        algunos poblados rurales.
      </p>
      <p>
        Se masifica su consumo y se estudian sus cualidades al descubrir que los
        poblados que la consumían tenían indices de cancer muy bajos en
        comparación a otras regiones de China, lo cual despertó el intereś de
        los investigadores.
      </p>
      <p>
        Actualmente preparamos nuestra Kombucha con blends de tés negro, verde y
        rojo, al que le añadimos un SCOBY (cultivos simbióticos de bacterias y
        levaduras), lo que origina la fermentación de la bebida, a la que
        posteriormente se saboriza con frutas y hierbas naturales de estación.
      </p>
      <p>
        El resultado es una bebida gasificada naturalmente, fresca y aromática
        que provee al organismo de probióticos que fortalecen la flora
        intestinal y mejoran la inmunidad. El gran aporte de vitamina E es el
        componente antioxidante principal (anti-cancerígeno).
      </p>
    </q-banner>

    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Runa Algiz</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Es una de las 25 runas "vikingas" del alfabeto futhark, la cual
        representa al Alce, lo que para los pueblos nórdicos simbolizaba salud y
        protección, razón por la cual es el emblema de nuestra kombucha.
      </p>
    </q-banner>

    <q-separator class="q-my-xl" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useCompra } from "../../stores/UseCompra";
const compra = useCompra();
const producto = ref({
  id: "la-papisa",
  cantidad: 0,
});

const slide = ref(1);
const autoplay = ref(true);

function agregarAlCarrito() {
  compra.addCompra(producto.value);
}
</script>
