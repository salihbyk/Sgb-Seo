<template>
  <section class="py-12">
    <ReservationForm />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ReservationForm from '@/components/ReservationForm.vue';

@Component({
  components: { ReservationForm },
  transition() {
    return 'slide-left';
  },
})
export default class ReservationPage extends Vue {}
</script>
