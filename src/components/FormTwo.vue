<template>
  <div class="flex justify-center mx-auto mt-6">
    <div class="rounded bg-cyan-300">
      <Form id="VehicleForm" class="p-6 space-y-6" @submit="onSubmit">
        <div class="flex flex-col">
          <label
            for="location"
            class="text-sm font-semibold font-plus-jakarta-sans"
            >Meter Number</label
          >
          <input
            type="text"
            class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
            v-model="meterNumber"
          />
          <!-- <p class="mt-2 text-sm text-red-600">
                {{ errors.fullName }}
              </p> -->
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
            >Amount</label
          >
          <input
            type="text"
            class="font-plus-jakarta-sans text-sm mt-1.5 font-normal pl-2.5 py-2 rounded bg-white w-full"
            v-model="amount"
          />
          <!-- <p class="mt-2 text-sm text-red-600">
                {{ errors.email }}
              </p> -->
        </div>
        <div class="flex flex-col">
          <label for="name" class="text-sm font-semibold font-plus-jakarta-sans"
            >Pin</label
          >

          <p class="mt-2 text-sm text-red-600">
            {{ pin }}
          </p>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-6 py-4 text-xs font-medium text-black bg-white rounded-md cursor-pointer font-plus-jakarta-sans"
          >
            Purchase
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const meterNumber = ref(null);
const amount = ref(null);
const pin = ref(null);
const onSubmit = () => {


  switch (amount.value) {
    case "254":
      pin.value = "616002631186143028";
      break;
    case "550":
      pin.value = "014443881024760440";

      break;
    default:
      console.log(`Sorry, no amount entered.`);
  }
  console.log(meterNumber.value, amount.value);
};
</script>
