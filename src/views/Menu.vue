<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >

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

    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>IDSI-ERP</v-toolbar-title>

       <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

<!--
    <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
-->
       <v-btn @click="cerrarSession" >Salir
        <!-- --> 
      </v-btn>

    </v-app-bar>

    <v-content>
      <v-container>
        <Dashboard></Dashboard>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Dashboard from '../views/Dashboard'
  export default {
     components: {
         Dashboard
     },
    props: {
    },
    data: () => ({
      drawer: null,
          items: [
          {
            action: 'mdi-view-dashboard',
            title: 'Ventas',
            items: [
              { title: 'Reporte ventas',to:'menu/reporteVenta'},
            ],
          },
          {
            action: 'mdi-align-vertical-bottom',
            title: 'Compras',
           // active: true,
            items: [
              { title: 'Reporte de compras' ,to:'login'},
              { title: 'New American' ,to:'login'},
              { title: 'Sushi',to:'login' },
            ],
          },
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