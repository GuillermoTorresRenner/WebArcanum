<template>
  <q-page class="q-mx-xl">
    <h4 class="text-center text-accent q-mt-xl">El Sol - Dorada Pampeana</h4>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
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
              src="../../assets/productos/cervezas/sol/etiqueta.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="2">
            <q-img
              src="../../assets/productos/cervezas/sol/Sol1.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="3">
            <q-img
              src="../../assets/productos/cervezas/sol/Sol2.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="4">
            <q-img src="../../assets/productos/pack.png" width="20%"
          /></q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-12 col-md-4">
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
              Te invitamos a armar tu 6-pack personalizado con las cervezas de
              tu elección. El precio de cada cerveza dentro de un 6-pack es de
              <strong class="text-green">$2000</strong> y cada cerveza que se no
              se encuentre en un grupo de 6 se cobrará a
              <strong class="text-green">$2.300</strong>
            </p>
            <p>
              <strong> Ejemplo:</strong> en 14 cervezas tendremos 2 6-packs y 2
              cervezas sueltas, se cobrarán a $2.000 cada cerveza de los packs y
              las dos cervezas sueltas se cobrarán a $2.300 cada una
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
    <h5 class="text-negative q-mt-xl">Parámetros de estilo</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm">
      <ul class="">
        <li>COLOR: 37 SRM</li>
        <li>ALCOHOL: 6,8 °GL</li>
        <li>AMARGOR: 45 IBU</li>
      </ul>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Notas de Cata</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Aromas maltosos y de flores silvestres logrados por dry hopping, sabores
        de malta dulce, pan tostado y una ligera acidez frutal son el resutado
        de ésta cerveza.
      </p>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Arcano El Sol</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Esta cerveza se encuentra inspirada en la energía del arcano 19: "El
        SOL", quien nos amanece con su cálido manto de luz luego de la larga
        noche de temor, incertidumbres y transformación, para así brindarnos la
        calma hacia el camino del autoconocimiento y crecimiento personal.
      </p>
      <p>
        El Sol se confeccionó con las energías de la renovación, el éxito, la
        expansión personal, las certezas, y la plenitud.
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
