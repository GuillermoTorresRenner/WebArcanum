<template>
  <q-page>
    <h4 class="text-center text-accent q-mt-xl">Contáctanos</h4>
    <div class="row justify-center q-mx-md">
      <q-img src="../assets/contacto.png" width="50%" />
    </div>
    <p class="text-center text-primary q-mt-xl">
      Envíanos un mensaje y te responderemos lo antes posible.
    </p>
    <p class="q-mt-xs text-center">
      <strong>Teléfono comercial: </strong> +56931126146
    </p>
    <p class="q-mt-xs text-center">
      <strong>E-mail: </strong> cerveceriarcanum@gmail.com
    </p>

    <p class="q-mt-xs text-center">
      <strong>Dirección: </strong> Avenida presidente Eduardo Frei Montalva 770,
      dpto 13, renca
    </p>

    <div class="row justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.176305013382!2d-70.6789076!3d-33.4186476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4302f88a9b1%3A0x3d70a28e10ab1714!2sPanamericana%20Nte.%20770%2C%208641139%20Renca%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1666664983383!5m2!1ses!2scl"
        width="500"
        height="400"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="col"
      ></iframe>
    </div>
    <h6 class="text-center text-secondary q-mt-xl">Formulario de Contacto</h6>

    <q-form @submit.prevent="enviar">
      <div class="row justify-center q-mx-xl">
        <q-input
          v-model="mensaje.nombre"
          type="text"
          label="Nombre"
          class="col-12 col-md q-mx-xl"
          lazy-rules="ondemand"
          :rules="[(val) => val.length > 0 || 'por favor escriba su nombre']"
        />
        <q-input
          v-model="mensaje.correo"
          type="email"
          label="Correo"
          class="col-12 col-md q-mx-xl"
          lazy-rules="ondemand"
          :rules="[
            (val) => val.length > 0 || 'por favor ingrese un correo válido',
          ]"
        />
      </div>
      <div class="row justify-center q-mx-xl">
        <q-input
          v-model="mensaje.mensaje"
          type="textarea"
          label="Mensaje"
          class="col-12 col-md q-mx-xl"
          lazy-rules="ondemand"
          :rules="[(val) => val.length > 10 || 'por favor escriba un mensaje']"
        />
      </div>
      <div class="row justify-center q-mt-xl">
        <q-btn label="Enviar" type="submit" color="primary" />
      </div>
    </q-form>
  </q-page>
</template>
<script setup>
import emailjs from "@emailjs/browser";
import { useQuasar } from "quasar";
import { computed, ref } from "vue";
const mensaje = ref({
  nombre: "",
  correo: "",
  mensaje: "",
});

const $q = useQuasar();
function enviar() {
  emailjs
    .send(
      "service_8os5efg",
      "template_4cb6jym",
      mensaje.value,
      "dEcQFxRctdyWzMB42"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        mensaje.value.correo = "";
        mensaje.value.mensaje = "";
        mensaje.value.nombre = "";
        $q.notify({
          message: "Mensaje Enviado",
          caption: "Le respondereos a la brevedad.",
          icon: "check",
          color: "green",
        });
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
}
</script>
