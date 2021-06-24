<template>
  <div class="about">
     <h1>{{ title }}</h1>
     <h2>{{ saldo }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex';
 export default {
   computed: {
     ...mapState(['saldo', 'title'])
   }
 }
</script>