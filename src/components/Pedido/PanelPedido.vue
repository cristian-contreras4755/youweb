
<template>
  <v-card>

    <v-toolbar flat>
      <v-toolbar-title>Pedidos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>


      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#tab-1"
            class="primary--text">    
            <v-icon>mdi-cart-minus</v-icon>
            <div class="hidden-sm-and-down">Pedidos en curso</div> 
          
          </v-tab>

          <v-tab
            href="#tab-2"
            class="primary--text"
          >
               
            <v-icon>mdi-cart-arrow-right</v-icon>
            <div class="hidden-sm-and-down">Mis Pedidos</div>

          </v-tab>

          <v-tab
            href="#tab-3"
            class="primary--text"
          >
         
            <v-icon>mdi-cart-arrow-right</v-icon>
            <div class="hidden-sm-and-down"> Más..</div>
          </v-tab>
        </v-tabs>
      </template>

    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-1'"> 
        <!--pedido -->
        <PedidoItem/>


    
            

      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <v-card flat>
           <div>tab1</div>
        </v-card>
      </v-tab-item>

      <v-tab-item :value="'tab-3'">
        <v-card flat>
          <div>tab1</div>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>
</template>


<script>


import PedidoItem from '@/components/Pedido/PedidoItem'

  export default {
    components:{
    PedidoItem  
    },
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      
      
     // datatable responsivo
       headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Producto', value: 'producto' },
        { text: 'Precio', value: 'precio' },
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],

      desserts:[],
      






      }

    },
    methods:{
      inicializarData(){
        this.desserts=[
          {
            producto: 'Frozen Yogurt',
            precio: 159,
            cantidad: 50.5,
          },
          {
            producto: 'Ice cream sandwich',
            precio: 237,
            cantidad: 50.5,
          },
          {
            producto: 'Eclair',
            precio: 262,
            cantidad: 50.5,
          },
          {
            producto: 'Cupcake',
            precio: 305,
            cantidad: 50.5,
          },
          {
            producto: 'Donut',
            precio: 452,
            cantidad: 50.5,
          },
          {
            producto: 'KitKat',
            precio: 518,
            cantidad: 50.5,
          }]
      }


    },
    created(){
     this.inicializarData();
    }
  }
</script>




