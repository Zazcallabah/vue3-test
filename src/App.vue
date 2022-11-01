<script setup lang="ts">
import countryCodes from "@/components/codes";
import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const store = useStore();
const { choice } = storeToRefs(store);
const list = ref(["one", "two", "three"] as string[]);
const setCountry = (e: any) => {
  choice.value = e.detail;
};
const add = () => {
  list.value.push("Another" + Math.random());
};
</script>

<template>
  <h2>Issue 1 - pn-select</h2>
  <p>
    The pn-select component does not properly display initial value. If you
    refresh the page, the select will be blank despite the ref having a selected
    value.
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
  <hr />
  <h2>Issue 2 - pn-buttons in v-for pn-table</h2>
  <button @click="add">Add</button>

  <pn-table bordered="true" striped="true">
    <table>
      <thead>
        <th>button</th>
        <th>icon</th>
      </thead>
      <tbody>
        <tr v-for="l in list" :key="l">
          <td>
            <pn-button>{{ l }}</pn-button>
          </td>
          <td>
            <pn-icon symbol="unfold" color="blue700">Drag</pn-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </pn-table>
</template>

<style scoped>
div {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>
