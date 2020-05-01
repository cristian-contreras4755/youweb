
<!--
<template>
<v-card-actions class="justify-center">
  <v-btn>
    dashboar
  </v-btn>
</v-card-actions>
</template>
-->

<template>
    <v-row  >
         <v-col>
            <template>
              <v-card
                class="mx-auto"
                  height="auto"
                  width="auto"
                
              >


                            <template>
                              <v-card outlined fab  >
                                       <div  class="pa-2">
                                          <v-row>

                                                  <v-col cols="12" sm="3" md="2" >

                                                        <v-menu
                                                          v-model="menu1"
                                                          :close-on-content-click="false"
                                                          :nudge-right="40"
                                                          transition="scale-transition"
                                                          offset-y
                                                          min-width="290px"
                                                          

                                                        >
                                                          <template v-slot:activator="{ on }">
                                                            <v-text-field
                                                              v-model="date1"
                                                              label="Fecha Inicial"
                                                              prepend-inner-icon="mdi-calendar-check-outline"
                                                              readonly
                                                              v-on="on"
                                                             
                                                            
                                                              outlined fab color="#62BCE0"

                                                            ></v-text-field>
                                                          </template>
                                                          <v-date-picker v-model="date1" @input="menu1 = false"    header-color="primary" color="#62BCE0" no-title scrollable locale="es-MX"></v-date-picker>
                                                        </v-menu>

                                   
                                                  
                                                  </v-col>

                                                  <v-col cols="12" sm="3" md="2"  >

                                                      <v-menu
                                                          v-model="menu2"
                                                          :close-on-content-click="false"
                                                          :nudge-right="40"
                                                          transition="scale-transition"
                                                          offset-y
                                                          min-width="290px"
                                                          

                                                        >
                                                          <template v-slot:activator="{ on }">
                                                            <v-text-field
                                                              v-model="date2"
                                                              label="Fecha Final"
                                                              prepend-inner-icon="mdi-calendar-check-outline"
                                                              readonly
                                                              v-on="on"
                                                              outlined fab color="#62BCE0"
                                                            ></v-text-field>
                                                          </template>
                                                          <v-date-picker v-model="date2" @input="menu2 = false"    header-color="primary" color="#62BCE0" no-title scrollable locale="es-MX"  ></v-date-picker>
                                                        </v-menu>

                                                      <!--

                                                   <v-menu
                                                          ref="menu2"
                                                          v-model="menu2"
                                                          :close-on-content-click="false"
                                                          :return-value.sync="date2"
                                                          transition="scale-transition"
                                                          offset-y
                                                          min-width="290px"
                                             
                                                        >
                                                          <template v-slot:activator="{ on }">
                                                            <v-text-field
                                                       
                                                              v-model="date2"
                                                              prepend-inner-icon="mdi-calendar-check-outline"
                                                               outlined fab color="#62BCE0"
                                                              readonly
                                                              v-on="on"
                                                                solo
                                                              @blur="guardarFechafinal(date2)"
                                                            ></v-text-field>
                                                          </template>
                                                          <v-date-picker header-color="primary"  color="#62BCE0"  v-model="date2" no-title scrollable locale="es-MX">
                                                           </v-date-picker>
                                                        </v-menu>
                                                      -->



                                                  </v-col>



                                                  <v-col cols="12" sm="3" md="2"  >
                                                    <v-combobox
                                                      v-model="cd_moneda"
                                                      :items="items_cbmoneda"
                                                      label="Moneda."
                                                      outlined fab color="#62BCE0"
                                                
                                                    ></v-combobox>
                                                  </v-col>

                                                  <v-col cols="12" sm="3" md="2"  >
                                                    <v-combobox
                                           
                                                      outlined fab color="#62BCE0"
                                                      v-model="cd_tipoGrafico"
                                                      :items="items_tipoGrafico"
                                                      label="Gráfico."
                                                        >
                                                    </v-combobox>
                                                  </v-col>

                                                   <v-col cols="12" sm="3" md="4"  >
                                                     <v-row  align-center justify-center>
                                                         <v-btn class="ma-2"  large outlined color="#62BCE0" @click="repVentasXClientes_convert"> 
                                                            <v-icon>mdi-align-vertical-bottom</v-icon>
                                                            Mostrar Gráfico
                                                        </v-btn>
                                                     </v-row>
                                                  </v-col>


                                                <!--fin de los datetime pickers-->
                                            </v-row>
                                        </div>
                              </v-card>
                            </template>

                            
                                <v-card-text>
                                  <h2   >Reporte de ventas</h2>                            
                                </v-card-text>

                         <GChart   v-if="hayData" :resizeDebounce="50"  :settings="{ packages: ['corechart', 'table', 'map', 'bar'] }"    :type="cd_tipoGrafico" :data="chartData" :options="chartOptions"/>
           
                      <v-card-actions>


                      </v-card-actions>

              </v-card>
            </template>

         </v-col>   
    </v-row>
   
</template>


<script>
import { GChart } from "vue-google-charts";
import axios from 'axios'
import { stringify } from 'querystring';

export default {
  components: {
    GChart
  },
  data() {
    return {
      //inicio datepickers
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      //fin datepickers

    //rucs   
   // cadRucs:'20160000001',
   cadRucs:'20459316842',
    
    //rucs
    hayData:false,


      //combo moneda
      cd_moneda:'',
      items_cbmoneda:[],
      //fin combo noneda


      //combo tipo gráfico
      cd_tipoGrafico:'BarChart',
      items_tipoGrafico:['ColumnChart','BarChart'],
     // items_tipoGrafico:['GeoChart','ScatterChart','ColumnChart','Histogram','BarChart','ComboChart','AreaChart','SteppedAreaChart','LineChart'],
      //combo tipo gráfico
      fecha_inicio:'',



      //datos del de chart por defecto
      chartsLib: null, // vamos a ver
      chartDataHeader: ["Clientes", "Total en ventas."],
      chartDataRows:[],
      updatedChartData: [],
      chartOptions: {
        chart: {
          title: 'Company Performanced',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 500,
        colors: ['#62BCE0', '#62BCE0', '#62BCE0']
      }
    };
  },
  computed: {
    chartData() {
      return [this.chartDataHeader, ...this.updatedChartData];
    },

    chartOption1 () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 1000,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
  watch: {
    
    },
  methods: {
    updateData() {
      this.updatedChartData = this.chartDataRows;
      console.log(this.chartDataRows.length);
      
      /*
      .map(row => {
        return row.map((item, index) => {
          return item;
        });

      });
      */
    },
     repVentasXClientes(){
        let me=this;
          let header={"Authorization":"Bearer "+this.$store.state.token};
          let configuracion={headers:header};
        axios.get('api/Reporte/rpt_ventas_x_clientes',configuracion).then(function(response){
          //me.charData1=response.data;
          //convertir a matriz a partir de json.

        }).catch(function(error){
          console.log(error);
        });
      },

      repVentasXClientes_convert(){

        let me=this;
        /*
          let header={"Authorization":"Bearer "+this.$store.state.token};
          let configuracion={headers:header};
          */

          if(!me.cd_moneda){
            alert('seleccione el tipo de moneda');
            return;
          }

        console.log(me.cd_moneda);

        //https://localhost:44397/api/Reporte/rpt_ventas_x_clientes?CadRucs=20160000001&FecIni=2020-01-01&FecFin=2020-04-01&Cd_Mda=02
        axios.get('api/Reporte/rpt_ventas_x_clientes?CadRucs='+me.cadRucs+'&FecIni='+me.date1+'&FecFin='+me.date2+'&Cd_Mda='+me.cd_moneda.value+'').then(function(response){
      //console.log(JSON.stringify(response.data));
      
        me.chartDataRows=[];

       if (response.data!=null){
          response.data.forEach(item=>{
             me.chartDataRows.push([item.nom_cliente,item.total]);
          });
         //   console.log(me.dataPrueba);
        }

      
        if(me.chartDataRows.length>0){
            me.hayData=true ;     
        }else{
         me.hayData=false;   
         me.chartDataRows=[];  
        }
         me.updateData(); 

        }).catch(function(error){         
          alert("error:"+error);
        });
      },

      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },

      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      guardarFechaInicio (date1) {
        this.$refs.menu1.save(date1)
      },
       guardarFechafinal (date2) {
        this.$refs.menu2.save(date2)
      }
     

  },

  created() {

    let me=this;
    //me.repVentasXClientes_convert();
    me.items_cbmoneda.push({text:'Soles',value:'01'},{text:'Dólares',value:'02'});
  }
};


</script>
