<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>IDSI-ERP</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="usuario" prepend-icon="mdi-account-arrow-right" name="login" label="Login" type="text"></v-text-field>            
                  <v-text-field v-model="password"  id="password"  @ v-on:keyup.enter="ingresar"  prepend-icon="mdi-lock" name="password" label="Password" type="password"></v-text-field>
                 <v-spacer></v-spacer>
                  <v-btn block   color="primary" v-on:click="ingresar" >Login</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions >  
                   <v-alert block outlined type="error" v-if="huboError" >{{ error}} </v-alert>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

     
  </v-app>
</template>

<script>
import axios from 'axios'// importamos axios  para el cosumo del servicios

  export default {
    data() {
        return{

            usuario:'',
            password:'',
            error:'',
            errorDet:'',
            huboError:false

        }          
    },
    props: {
      source: String
    },
    methods:{
            ingresar(){
/*
                    let header={"Access-Control-Allow-Origin":"*"};     
                    let configuracion={headers:header};
                    */
                    axios.post('api/Seguridad/Login',{usuario:this.usuario,password:this.password})
                    .then(respuesta=>{   
                        return respuesta.data;
                    }).then(data=>{              
                       // console.log('ingreso');
                        // console.log('ingreso'+data.token);
                        this.$store.dispatch("guardarToken",data.token)
                        this.$router.push({name:'Menu'})
                    }).catch(error => {
                      
                            this.error=error.response.data.msj_error;
                            this.errorDet=error.response.data.msj_error_det;
                            this.huboError=true;
                            /*
                          console.log('data',error.response.data.msj_error);
                          console.log('staus',error.response.status);
                          console.log('header',error.response.headers);
                           console.log('mensage', error.message);
                           */
                       });   
            }


            }
  }
</script>