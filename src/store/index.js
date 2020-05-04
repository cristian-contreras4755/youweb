import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'
import router from '../router/index'// importamos el enrutador para enviar 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null,//,isAuthenticated:false
    bodega:[],//datos a pasar   desde el componente FiltroMaster a  cualquier componente
    producto:[],//datos a pasar   desde el componente FiltroMaster a  cualquier componente
  },
  mutations: {
    setToken(state,token){
      state.token=token
    },
    setUsuario (state,usuario){
      state.usuario=usuario
    },
    // seteamos  en una funcion los objetos // mutamos el objeto 
      setBodega(state,bodega){
        state.bodega=bodega
      },
      setProducto(state,producto){      
        state.producto=producto
      }

  },
  actions: {
    guardarToken({commit},token){
      commit("setToken", token)
      commit("setUsuario", jwtDecode(token).usuario)
/*
      let token_decodificado=jwtDecode(token)
      console.log(jwtDecode(token));
      */
      localStorage.setItem("token", token)
      localStorage.setItem("usuario", jwtDecode(token).usuario)
    },
    autoLogin({commit}){
      let token = localStorage.getItem("token")
      if (token){

      //validar si el token de que tiene almacenado en local storage sigue vigente.
      //en caso siga activa  dejamos pasar al menu principal caso contrario  borramos los datos almacenados 
      // de local storage  y le mandamos a la  pantalla de 
      // pendiente
/*
      commit("setToken", token)
      commit("setUsuario", jwtDecode(token).usuario);
      router.push({name:'Menu'});    
*/

       let fc=jwtDecode(token).nbf;
       let fv=jwtDecode(token).exp;
       let fa= new Date().getTime()/1000;


            if(!(fv>fa)){
              console.log('token vencido')
              commit("setToken", null)
              commit("setUsuario", null)
              localStorage.removeItem("token")
              localStorage.removeItem("usuario")
              router.push({name: 'Login'})        
            }

    /*
        if(fv>fa){
          console.log(' a menu')
          commit("setToken", token)
          commit("setUsuario", jwtDecode(token).usuario);
          router.push({name:'Menu'});     
        }else{
          console.log('token vencido')
          commit("setToken", null)
          commit("setUsuario", null)
          localStorage.removeItem("token")
          localStorage.removeItem("usuario")
          router.push({name: 'Login'})
        } 
        */

      }else{

        router.push({name:'Login'});
      }
    
    },
    salir({commit}){
      commit("setToken", null)
      commit("setUsuario", null)
      localStorage.removeItem("token")
      localStorage.removeItem("usuario")
      router.push({name: 'Login'})
    },

    // guardamos cambio de de la mutacion 
    guardarProducto({commit},producto){
      commit("setProducto", producto);
    },
    guardarBodega({commit},bodega){
      commit("setBodega", bodega);
    }

    
  },
  modules: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }

})
