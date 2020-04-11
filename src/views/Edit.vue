<template>
    <div>   
      <form v-on:submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="nombre">Nombre</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="nombre" type="text" placeholder="Nombre" v-model="producto.nombre">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="marca">Marca</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="marca" type="text" placeholder="Marca" v-model="producto.marca">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="marca">Precio</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="marca" type="text" placeholder="Precio" v-model="producto.precio">
        </div>
        <div class="text-center">
            <button type="submit" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
        </div>
      </form>
    </div>
</template>
 
<script>
import {db} from '../firebase';
 
export default {
  data() {
    return {
      productos: {},
      producto: {
        nombre: '',
        marca: '',
        precio: '',
      }
    }
  },
 
  firebase: {
    productos: {
      source: db.ref('productos'),
      asObject: true
    }
  },
 
  created() {
    let producto = this.productos[this.$route.params.id]
    this.producto = {
      nombre: producto.nombre,
      marca: producto.marca,
      precio: producto.precio,
    }
  },
 
  methods: {
    onSubmit() {
      this.$firebaseRefs.productos.child(this.$route.params.id).set(this.producto)
      this.$router.push({ nombre: 'home' })
    }
  }
}
</script>