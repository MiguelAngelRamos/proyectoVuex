<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>{{ $store.state.saldo }}</h1> -->
    <h2>{{ saldo }}</h2>

    <button @click="accionIncrementar">Aumentar</button>
    <BotonDisminuir/>
    <hr>
    <BotonDinamico :condicion="true"/>
    <BotonDinamico :condicion="false"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
import BotonDisminuir from '../components/BotonDisminuir.vue';
import BotonDinamico from '../components/BotonDinamico.vue';

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonDinamico
  },
  computed: {
    ...mapState(['saldo', 'title'])
  },
  methods: {
    ...mapActions(['accionIncrementar', 'accionDisminuir'])
  }
}
</script>
