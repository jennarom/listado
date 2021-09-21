<template>
  <v-app>
    <v-main>
      <Listado_Producto/>
    </v-main>
  </v-app>
</template>

<script>

import Listado_Producto from './components/Listado_Producto.vue';
export default {
  name: 'App',
  components: {
    Listado_Producto,
  },

  data: () => ({
    //
  }),
};
</script>