<template>
    <div>   
      <form v-on:submit.prevent="onSubmit">
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="name">Nombre</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" v-model="user.name">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="lastname">Marca</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Lastname" v-model="user.lastname">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darkest text-sm font-bold mb-2" for="lastname">Precio</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Age" v-model="user.age">
        </div>
        <div class="text-center">
            <button type="submit" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
            <button class="ml-3 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded text-xs" v-on:click="deleteProducto(producto)">Delete</button>
        </div>
      </form>
        <table class="mt-5">
  <thead>
    <tr class="border-solid border-b">
      <th>ID</th>
      <th>Nombre</th>
      <th>Marca</th>
      <th>Producto</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in productos"  v-bind:key="producto['.key']">
      <td class="px-3">{{producto['.key']}}</td>
      <td class="px-3">{{producto.nombre}}</td>
      <td class="px-3">{{producto.marca}}</td>
      <td class="px-3">{{producto.precio}}</td>
      <td class="px-3">
          #
      </td>
      <td>
    <router-link :to="{ name:'edit', params: { id:producto['.key'] } }" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded normal-case text-xs">Edit</router-link>
</td>
    </tr>
  </tbody>
</table>
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
    productos: db.ref('productos')
  },
 
  methods: {
    onSubmit() {
        this.$firebaseRefs.productos.push(this.producto)
        this.producto = {
            nombre: '',
            marca: '',
            precio: ''
        }
    },
    deleteProducto(producto) {
        this.$firebaseRefs.productos.child(producto['.key']).remove()
  }
}
}
</script>