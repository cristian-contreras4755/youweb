<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >


    <template v-slot:prepend>
      <v-card>
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">Geo Bodegas</v-list-item-title>
                <v-list-item-subtitle>slogan</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
             <v-divider></v-divider>

          <v-list-item two-line link>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Nom usu</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        </v-card>
        <v-spacer/> 
      </template>



<!--
   <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Nombre de usuario</v-list-item-title>

        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

-->


      <v-divider></v-divider>

 <v-list>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"   
        :prepend-icon="item.action"
        no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
          >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

    </v-list>

     <v-divider></v-divider>

     <v-list>

       <v-list-item >
            <v-list-item-action  link>
              <v-icon>mdi-account-edit</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Editar Datos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item >
            <v-list-item-action  link>
              <v-icon>mdi-map-marker-radius</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Mi Ubicacion
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>


       <v-list-item >
            <v-list-item-action  link>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Salir
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
       </v-list>



    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-spacer></v-spacer>
     

<v-container>
  <v-row>
            <v-col  xs12 sm12 lg6>
              <FiltroMaster/> 
            </v-col>
     
            <div  class="py-4">
                <v-btn color="primary" fab  x-small dark>
              <v-icon>mdi-movie-filter</v-icon>
            </v-btn>
            </div>            
            
    </v-row>
</v-container>
       

<!--
           

            <v-col xs1 sm1 md1>

               <div class="py-2" >
                <v-btn color="primary" fab  x-small dark>
                   <v-icon>mdi-pencil</v-icon>
                </v-btn>
             </div>    
           </v-col>
         -->  


          <!--
          <v-col cols="12" >
          <v-text-field
                        sm="6" 
                        md="6"
                          solo-inverted
                          flat
                          hide-details
                          label="Buscar"
                          prepend-inner-icon="mdi-magnify"                 
                        />

          </v-col>  
-->

       

     
      <v-spacer></v-spacer>

     
<!--
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
-->
      <v-btn icon @click="cerrarSession">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>


<!--
    <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
-->
<!--
       <v-btn @click="cerrarSession" >Salir
       
      </v-btn>

  --> 
    </v-app-bar>

    <v-content>
      <v-container>

<!-- contenedor de menu principal         <Dashboard></Dashboard> -->

      








      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from '../views/Dashboard'
import FiltroMaster from '../components/FiltroMaster.vue'
  export default {
     components: {
         Dashboard,
         FiltroMaster
     },
    props: {
    },
    data: () => ({
       mini: true,
      drawer: null,
          items: [
          {
            action: 'mdi-view-dashboard',
            title: 'Bodegas',
            items: [
              { title: 'Mis pedidos',to:'menu/reporteVenta'},
            ],
          },
          {
            action: 'mdi-align-vertical-bottom',
            title: 'Pedidos',
           // active: true,
            items: [
              { title: 'Reporte de compras' ,to:'login'},
              { title: 'New American' ,to:'login'},
              { title: 'Sushi',to:'login' },
            ],
          },
          {
            action: 'mdi-align-vertical-bottom',
            title: 'Buscar Locales',
           // active: true,
            items: [
              { title: 'Reporte de compras' ,to:'login'},
              { title: 'New American' ,to:'login'},
              { title: 'Sushi',to:'login' },
            ],
          }
          /*,
          {
            action: 'mdi-align-vertical-bottom',
            title: 'Contabilidad',
            items: [
              { title: 'List Item' ,to:'login'},
            ],
          },
          {
            action: 'mdi-android-auto',
            title: 'Inventario',
            items: [
              { title: 'List Item',to:'login' },
            ],
          }
          */
        ],
    }),
    created () {
      this.$store.dispatch('autoLogin');
      this.$vuetify.theme.dark = false
    },
    methods:{
        cerrarSession(){
        this.$store.dispatch("salir");
        }
    }
  }

</script>