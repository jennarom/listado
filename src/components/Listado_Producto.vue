<template>
  <div>
    
    <!-- Barra de navegacion-->
    <v-toolbar app color="blue" height="70">
        <v-app-bar-nav-icon @click="mostrar = !mostrar" dark></v-app-bar-nav-icon>
        <v-toolbar-title> </v-toolbar-title>
    </v-toolbar>
    <!-- Navigation drawer-->
    <v-navigation-drawer app v-model="mostrar" temporary absolute dark color="blue" class="text-center"
    >
        <v-list nav dense >
            <br>
            <v-list>
                <v-avatar>
                    <img
                        src="../assets/logo2.png"
                        alt="logo fresh food"
                    >
                </v-avatar>
            </v-list>
            <v-list-item-title class="display-1 font-weight-bold">FreshFood</v-list-item-title>
            
            <v-list-item-group  v-model="group">
                <br>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold">Registrar Producto</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold">Listado de productos</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold" >Productos caducados</v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title class="font-weight-bold font-si" >Productos proximos a caducar</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        
    </v-navigation-drawer>
    <!-- Tabla de datos-->
    <div><h2 class="text-center">Listado de productos</h2></div>
    <v-container>
       <v-app id="inspire">
    <v-simple-table
      fixed-header
      height="500px"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Nombre
            </th>
            <th class="text-left">
              Marca
            </th>
            <th class="text-left">
              Fecha de vencimiento
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in listado"
            :key="item.name"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.marca }}</td>
            <td>{{ item.fecha }}</td>
            <td > 
                <v-btn fab small color="primary" class="mx-0" >
                <v-icon>mdi-pencil </v-icon>
                </v-btn>
            </td>
            <td >
                <v-btn fab small color="error" >
                <v-icon>mdi-delete </v-icon>
                </v-btn>
            </td>
              
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
    </v-container>
   
    <v-footer  dark padless >
        <v-card flat tile class="blue white--text text-center " >
            <v-card-text class="mb-4">
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

            <v-card-text class="pt-0 mb-4 ">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.  
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} 
            </v-card-text>
        </v-card>
    </v-footer>
    
    
</div>
    
</template>
<script>
    export default {
        data(){
            return {
                mostrar: false,
                listado: [
                    {
                    id:'00001',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00002',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00003',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00004',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00005',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00006',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00007',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00008',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00009',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                    {
                    id:'00010',
                    nombre: 'Frozen Yogurt',
                    marca: 'Alpina',
                    fecha: '18/05/2021',
                    },
                ],
                icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
                ],
            };
        }
    }
</script>