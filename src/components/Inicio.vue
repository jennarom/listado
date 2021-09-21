<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logoemp.png')"
          class="my-3"
          contain
          height="70"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3 light-green--text">
          FreshFood
        </h1>

        <p class="subheading font-weight-regular center-text">
          Seleccione la opción deseada
        </p>
      </v-col>
    </v-row>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="RegistrarProducto.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="../views/Regis.vue"
            >Registro de Productos</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="Cad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/Cad"
            >Productos caducados</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ProxCad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ProxCad"
            >Productos cercanos a caducar</router-link
          >
        </div>
      </template>
    </v-hover>

    <div class="my-6"></div>
    <!-- Using a dynamic class -->
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ListaGeneral.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ListaGeneral"
            >Lista de productos</router-link
          >
        </div>
      </template>
    </v-hover>
    <div class="my-6"></div>
    <!-- POSIBLE EDITAR BOTÓN
       <div class="my-6"></div>
    <v-hover justify="center">
      <template v-slot:default="{ hover }">
        <div
          :class="`elevation-${hover ? 12 : 6}`"
          href="ProxCad.vue"
          class="
            mx-auto
            pa-6
            transition-swing
            text-center
            white--text
            light-green
          "
        >
          <router-link class="nav-link white--text" to="/ProxCad"
            >Editar</router-link
          >
        </div>
      </template>
    </v-hover>

    <div class="my-6"></div>
      -->
    <div id="app">
      <v-app id="inspire">
        <v-footer dark padless>
          <v-card
            flat
            tile
            width="100%"
            class="light-green white--text text-center"
          >
            <v-card-text height="400px">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0"
              >Un sistema intuitivo escencial para la organización de los
              inventarios</v-card-text
            >

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>FreshFood</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-app>
    </div>
  </v-container>
</template>