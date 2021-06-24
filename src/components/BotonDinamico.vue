<template>
  <button @click="accionObjeto({ estado: condicion, numero: 3})">{{ textoBoton }}</button>
</template>

<script>
import { mapActions} from 'vuex';

export default {
  props: {
    condicion: Boolean
  },
  computed: {
    textoBoton() {
      return this.condicion? 'Aumentar': 'Disminuir'
    }
  },
  methods: {
    ...mapActions(['accionObjeto'])
  }

}
</script>

<style>

</style>