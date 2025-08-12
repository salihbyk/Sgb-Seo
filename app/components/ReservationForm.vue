<template>
  <!-- eslint-disable vue-a11y/label-has-for -->
  <form @submit.prevent="submit" class="max-w-xl mx-auto bg-white p-8 rounded shadow">
    <h2 class="text-2xl font-bold mb-6 text-center">Randevu Al</h2>
    <div class="mb-4">
      <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        required
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
      <input
        id="phone"
        v-model="form.phone"
        type="tel"
        required
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Hizmet</label>
      <select
        id="service"
        v-model="form.service"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option v-for="option in services" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="staff" class="block text-sm font-medium text-gray-700 mb-1">Uzman</label>
      <select
        id="staff"
        v-model="form.staff"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Seçiniz</option>
        <option v-for="member in staffMembers" :key="member" :value="member">{{ member }}</option>
      </select>
    </div>
    <div class="mb-4 grid grid-cols-2 gap-4">
      <div>
        <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Tarih</label>
        <input
          id="date"
          v-model="form.date"
          type="date"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label for="time" class="block text-sm font-medium text-gray-700 mb-1">Saat</label>
        <input
          id="time"
          v-model="form.time"
          type="time"
          required
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
    <div class="mb-4">
      <label for="notes" class="block text-sm font-medium text-gray-700 mb-1">Notlar</label>
      <textarea
        id="notes"
        v-model="form.notes"
        rows="3"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Gönder
    </button>
    <p v-if="submitted" class="mt-4 text-green-600 text-center">Rezervasyonunuz alınmıştır!</p>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface Reservation {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  staff: string;
  date: string;
  time: string;
  notes: string;
}

@Component
export default class ReservationForm extends Vue {
  form: Reservation = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    service: 'Saç Kesimi',
    staff: '',
    date: '',
    time: '',
    notes: '',
  };

  submitted = false;

  services: string[] = ['Saç Kesimi', 'Sakal Tıraşı', 'Cilt Bakımı', 'Epilasyon'];

  staffMembers: string[] = ['Ayşe', 'Mehmet', 'Ali'];

  submit(): void {
    const reservation: Reservation = { ...this.form, id: Date.now() };
    this.$store.dispatch('reservations/add', reservation);
    this.submitted = true;
    this.form = {
      id: 0,
      name: '',
      phone: '',
      email: '',
      service: 'Saç Kesimi',
      staff: '',
      date: '',
      time: '',
      notes: '',
    };
  }
}
</script>
