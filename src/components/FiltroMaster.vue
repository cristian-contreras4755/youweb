
                        
                        <!--
                         sm="6" 
                        md="6"
                          solo-inverted
                          flat
                          hide-details
                          label="Buscar"
                          prepend-inner-icon="mdi-magnify"    
                        
                        
                        -->


                        <template>                                 
                                <v-autocomplete
                                v-model="model"
                                :items="items"
                                :loading="isLoading"
                                :search-input.sync="search"

                                chips 



                                clearable
                         
                                
                                item-text="name"
                                item-value="symbol"

                                label="Buscar"
                                prepend-inner-icon="mdi-magnify" 
                                solo
                                xs12
                                >

                                <template v-slot:no-data>
                                    <v-list-item>
                                    <v-list-item-title>
                                        Busque su bodega
                                        <strong>favorita</strong>
                                    </v-list-item-title>
                                    </v-list-item>
                                </template>

                                <!--
                                <template v-slot:selection="{ attr, on, item , selected }">
                                    <v-chip
                                    v-bind="attr"
                                    :input-value="selected"
                                    color="blue-grey"
                                    class="white--text"
                                    v-on="on">

                                      <v-icon left>mdi-coin</v-icon>
                                      <span v-text="item.nombre"></span>

                                    </v-chip>

                                </template>
                                -->
                                <template v-slot:item="{ item }">

                                  <!--
                                    <v-list-item-avatar
                                      color="indigo"
                                      class="headline font-weight-light white--text"
                                      >
                                       <img src="https://randomuser.me/api/portraits/women/81.jpg">
                                    </v-list-item-avatar>

                                    -->
                                    <v-list-item-content>
                                    <!--<v-list-item-title v-text="item.id"></v-list-item-title>--> 
                                     <v-list-item-title v-text="item.nombre"></v-list-item-title>
                                      <v-list-item-subtitle v-text="item.direccion"></v-list-item-subtitle>
                                    </v-list-item-content>
                                   
                                      <!--
                                      <v-list-item-action>
                                      <v-list-item-action-text > 
                                      </v-list-item-action-text>
                                      -->
                                       <!--
                                      <v-icon
                                        color="grey lighten-1">
                                        mdi-star-outline
                                      </v-icon>

                                    </v-list-item-action>
                                        -->
                                   

                                    

                                   <!--

                                      <v-icon
                                        color="yellow">
                                        mdi-star-outline
                                      </v-icon>

                                        <v-list-item-icon>
                                      <v-icon>mdi-magnify-plus</v-icon>
                                    </v-list-item-icon>

                                  -->


                                     <v-btn icon color="deep-orange">
                                      <v-icon> mdi-star-outline</v-icon>
                                    </v-btn>

                                       <v-btn icon color="deep-orange">
                                      <v-icon>mdi-magnify-plus</v-icon>
                                    </v-btn>

                                    <v-btn icon color="deep-orange">
                                      <v-icon>mdi-thumb-up</v-icon>
                                    </v-btn>
                                    
                                    
                                  
                                    <!--
                                    <v-list-item-avatar
                                      color="indigo" >
                                       
                                     <v-list-item-icon>
                                    <v-icon>mdi-plus-circle</v-icon>
                                    </v-list-item-icon>
                                    </v-list-item-avatar>
                                      -->


                                </template>
                                </v-autocomplete>

    
                        </template>








<script>
  export default {
    data: () => ({
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
      dataJson:[]

    }),

    watch: {
      model (val) {
        if (val != null) this.tab = 0
        else this.tab = null
      },
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

       this.dataJson=[
    {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    },
     {id: "92",
    nombre: "Bodega la ultima compra",
    direccion:"Av. bla bla bla ",
    ubicacion:{lat:125,log:150},
    precio:50.00
    }
  ];

  this.items = this.dataJson;
this.isLoading = false;

/*
        fetch('https://api.coingecko.com/api/v3/coins/list')
          .then(res => res.clone().json())
          .then(res => {
            this.items = res
          })
          .catch(err => {
            console.log(err)
          }).finally(() => (this.isLoading = false))
          */
      },
    },
  }
</script>