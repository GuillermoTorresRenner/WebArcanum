<template>
  <q-page class="q-mx-xl">
    <h4 class="text-center text-accent q-mt-xl">La Justicia - Scottish Ale</h4>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          height="300px"
        >
          <q-carousel-slide
            class="text-center"
            :name="1"
            img-src="../../assets/productos/cervezas/luna/1.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
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
        <li>COLOR: 6 SRM</li>
        <li>ALCOHOL: 6,1 °GL</li>
        <li>AMARGOR: 25 IBU</li>
      </ul>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Notas de Cata</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Equilibrio entre sabores maltosos acaramelados y amargor con notas de
        frutos secos son el resultado.
      </p>
    </q-banner>
    <q-separator class="q-my-xl" />
    <h5 class="text-negative q-mt-xl">Arcano La Justicia</h5>
    <q-banner class="bg-positive text-secondary q-mx-sm q-px-sm q-py-xl">
      <p>
        Esta cerveza se encuentra inspirada en el arcano VIII, "La Justicia",
        quien nos mira de frente preguntando por el balance en nuestra vida, por
        el ciclo de desarrollo y karma que estamos atravesando. La justicia nos
        lleva a la contemplación de nuestra perfecta imperfección, llevándonos
        mediante juicio a cortar con todo aquello que nos ata y así tender hacia
        el "nuevo yo".
      </p>
      <p>
        La Justicia se confeccionó con las energías del blance, con la atenta
        mirada hacia nuestro trabajo exigiéndonos cada vez ser mejores.
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
