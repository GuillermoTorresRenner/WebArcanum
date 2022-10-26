<template>
  <q-page class="q-mx-xl">
    <h4 class="text-center text-accent q-mt-xl">La Papisa - Weissbier</h4>
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
              src="../../assets/productos/cervezas/papisa/etiqueta.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="2">
            <q-img
              src="../../assets/productos/cervezas/papisa/Papisa1.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="3">
            <q-img
              src="../../assets/productos/cervezas/papisa/Papisa2.png"
              width="25%"
          /></q-carousel-slide>
          <q-carousel-slide class="text-center" :name="4">
            <q-img src="../../assets/productos/pack.png" width="20%"
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
              cerveza para realizar envíos mediante nuestros colaboradores.
            </p>
            <p>
              Te invitamos a armar tu 6-pack personalizado con las cervezas de
              tu elección. El precio de cada cerveza dentro de un 6-pack es de
              <strong class="text-green">$2000</strong> y cada cerveza que se no
              se encuentre en un grupo de 6 se cobrará a
              <strong class="text-green">$2.300</strong>
            </p>
            <p>
              <strong> Ejemplo:</strong> En una compra de 14 cervezas, hay 2
              packs de 6 kombuchas más 2 cervezas sueltas. Las cervezas dentro
              de un pack se cobrarán a un valor de $2.000, mientras que las
              cervezas sueltas a un valor de $2.300
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
        <li>COLOR: 5 SRM</li>
        <li>ALCOHOL: 5° GL</li>
        <li>AMARGOR: 14 IBU</li>
      </ul>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Notas de Cata</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Aromas floreales, a clavo de olor y a plátanos maduros, sabores de
        pomelo y un equilibrio maltoso con un largo fin de boca son el resutado
        de ésta cerveza.
      </p>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Arcano La Papisa</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Esta cerveza se encuentra inspirada en la energía del Arcano II: "LA
        PAPISA", quien con su pureza y casta timidez se olvida del mundo y sus
        placeres banales para así adentrarse en las profundidades del saber
        interior, de la espiritualidad y de la fusión armoniosa con las energías
        de la creación, invitándonos a sumergirnos en la autocontemplación.
      </p>
      <p>
        La Papisa se confeccionó con las energías de la pureza, el saber y la
        espiritualidad .
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
