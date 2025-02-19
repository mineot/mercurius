<template>
  <div class="flex-fill d-flex flex-column justify-content-center align-items-center">
    <form @submit.prevent="submitForm" class="border rounded p-3 d-flex flex-column gap-2">
      <wapp-input label="Email" type="email" id="email" v-model="form.email" />
      <wapp-input label="Password" type="password" id="password" v-model="form.password" />
      <small class="text-danger text-center" v-if="fail">{{ failMessage }}</small>
      <button type="submit" class="btn btn-primary">
        <span>Sign In</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const fail = ref(false);
const failMessage = ref('');

const form = useForm({
  email: '',
  password: '',
});

const submitForm = () => {
  fail.value = false;
  form.post('/auth/signin', {
    onError: (errors) => {
      fail.value = true;
      failMessage.value = errors.message;
    },
  });
};
</script>
