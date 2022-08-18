<script setup lang="ts">
import countryCodes from "@/components/codes";
import { ref, onMounted } from "vue";

type Receiver = {
  name: string;
  name2?: string;
  postalCode: string;
  address: string;
  city: string;
  countryCode: string;
};

const receiver = ref({} as Receiver);

const setCountry = (e: any) => {
  receiver.value.countryCode = e.detail;
};

onMounted(() => {
  receiver.value = {
    countryCode: "WS",
  } as Receiver;
});
</script>

<template>
  <pn-select
    :label="'country'"
    id="country"
    searchable="true"
    @selectchange="setCountry"
  >
    <pn-option
      v-for="code in countryCodes"
      :key="code"
      :selected="code === receiver.countryCode"
      :value="code"
    >
      {{ `countries.${code}` }}
    </pn-option>
  </pn-select>
  <p>you selected: {{ receiver.countryCode }}</p>
</template>

<style></style>
