<script setup lang="ts">
import { ref } from "vue";
import countryCodes from "@/components/codes";
import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import { wrench } from "pn-design-assets/pn-assets/icons";
import { vue3Debounce } from "vue-debounce";
const vDebounce = vue3Debounce({});

const store = useStore();
const { choice } = storeToRefs(store);
const setCountry = (e: any) => {
  choice.value = e.detail;
};
const decount = ref(0);
const debounced = () => {
  decount.value++;
};
</script>

<template>
  <section>
    <h2>Test 1 - pn-select</h2>
    <p>
      The pn-select component does not properly display initial value. If you
      refresh the page, the select will be blank despite the ref having a
      selected value.
    </p>
    <pn-select
      :label="'country'"
      id="country"
      searchable="true"
      @selectchange="setCountry"
    >
      <pn-option
        v-for="code in countryCodes"
        :key="code"
        :selected="code === choice"
        :value="code"
      >
        {{ `countries.${code}` }}
      </pn-option>
    </pn-select>
    <p>you selected: {{ choice }}</p>
  </section>
  <section>
    <h2>Test 2 - icons</h2>
    <pn-icon :symbol="wrench" />
  </section>
  <section>
    <h2>Test 3 - debounce</h2>
    <input v-debounce:800ms="debounced" /> Debounce count is {{ decount }}
  </section>
</template>

<style scoped>
section {
  max-width: 500px;
  margin: 5rem auto;
}

div {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>
