import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HomeView.vue";
import { setActivePinia, createPinia } from "pinia";

describe("HelloWorld", () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Issue");
  });
});
