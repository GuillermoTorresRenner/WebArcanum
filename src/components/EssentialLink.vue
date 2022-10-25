<template>
  <q-separator v-if="cat !== ''" />
  <div class="row justify-center">
    <strong class="q-my-md text-accent"> {{ cat }}</strong>
  </div>
  <q-item clickable @click="go" dense v-if="!unico">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
  <q-item clickable @click="go" dense v-if="unico">
    <q-item-section>
      <q-separator />
      <div class="row justify-center">
        <strong class="text-primary q-my-md"> {{ title }}</strong>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },
    cat: {
      type: String,
      default: "",
    },
    unico: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      go() {
        router.push(props.link);
      },
    };
  },
});
</script>
