<template>
  <button @click="accionDisminuir(200)">Disminuir</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['accionDisminuir'])
  }
}
</script>

<style>

</style>