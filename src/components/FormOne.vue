<template>
    <div class="flex justify-center mx-auto mt-6">
      <div class="rounded bg-cyan-300">
        <Form
          id="VehicleForm"
          class="p-6 space-y-6"
          :validation-schema="schema"
      
          @submit="onSubmit"
        >
          <div class="flex flex-col">
            <label
              for="location"
              class="text-sm font-semibold font-plus-jakarta-sans"
              >Full Name</label
            >
            <input
              type="text"
              class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
              v-model="fullName"
            />
            <!-- <p class="mt-2 text-sm text-red-600">
              {{ errors.fullName }}
            </p> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
              >Email</label
            >
            <input
              type="text"
              class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
              v-model="email"
            />
            <!-- <p class="mt-2 text-sm text-red-600">
              {{ errors.email }}
            </p> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
              >Phone Number</label
            >
            <input
              type="text"
              class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
              v-model="phoneNumber"
            />
            <!-- <p class="mt-2 text-sm text-red-600">
              {{ errors.phoneNumber }}
            </p> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
              >Meter Number</label
            >
            <input
              type="text"
              class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
              v-model="meterNumber"
            />
            <!-- <p class="mt-2 text-sm text-red-600">
              {{ errors.meterNumber }}
            </p> -->
          </div>
          <div class="flex flex-col">
            <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
              >Confirm Meter Number</label
            >
            <input
              type="text"
              class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
              v-model="confirmMeterNumber"
            />
            <!-- <p class="mt-2 text-sm text-red-600">
              {{ errors.confirmMeterNumber }}
            </p> -->
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-4 text-xs font-medium text-black bg-white rounded-md cursor-pointer font-plus-jakarta-sans"
            >
              Submit
            </button>

            <RouterLink :to="'/purchase'">Next Step</RouterLink>
          </div>
        </Form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  // import { Field, Form } from "vee-validate";
  
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  import { purchaseCredit } from "../entities/validationSchema";
 import router from 'vue-router'
  export default {
    setup() {
      const fullName = ref(null);
      const email = ref(null);
      const phoneNumber = ref(null);
      const meterNumber = ref(null);
      const confirmMeterNumber = ref(null);
      const schema = purchaseCredit;
  
      
      const showSuccessToast = () => {
        toast.success("Details successfully saved", {
          duration: 3000, // Duration in milliseconds
        });
      };
  
      const reset = () => {
        fullName.value = '',
          email.value = '',
          meterNumber.value = '',
          phoneNumber.value = '',
          confirmMeterNumber.value = ''
      };
  
      const onSubmit = () => {
        console.log(
          fullName.value,
          email.value,
          meterNumber.value,
          phoneNumber.value,
          confirmMeterNumber.value
        );
  
        reset();
            showSuccessToast();
        router.push({ path : 'PurchasedCredit'})
      };
  
      return {
        schema,
        onSubmit,
        fullName,
        email,
        meterNumber,
        phoneNumber,
        confirmMeterNumber,
        
      };
    },
  };
  </script>
  