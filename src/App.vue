<script setup lang="ts">
import countryCodes from "@/components/codes";
import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";
const store = useStore();
const { choice } = storeToRefs(store);
const setCountry = (e: any) => {
  choice.value = e.detail;
};
</script>

<template>
  <section>
    <h2>Issue 1 - pn-select</h2>
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
  <hr />
  <section>
    <h2>Issue 2 - pn-icon in v-for</h2>
    <p>
      This issue is only visible in production builds. please
      <code>npm run host</code> to view.
    </p>
    <div v-for="l in [1, 2, 3]" :key="l">
      <pn-icon symbol="close" color="blue700" />
    </div>
    <p>the pn-icon is not visible in rows below the first one.</p>
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
