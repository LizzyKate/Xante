<template>
  <div class="provider-dropdown relative">
    <div class="" @click="toggle()">
      <div class="py-4 px-5 rounded p-dropdown">
        <span>{{ value }}</span>
        <img src="/images/arrowdown.png" style="width: 7%" alt="drop down" />
      </div>

      <div
        :class="visible ? 'fade-in' : 'hidden'"
        class="p-dropdown-content text-white p-2"
      >
        <ul>
          <li
            class="e-dv"
            v-for="(item, f) in list"
            @click="select(item)"
            :key="f"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProviderDropdown",
  data() {
    return {
      choose: "Top 10 Providers",
      openPDropdown: false,
      option: [
        "Top 10 Borrow Rates",
        "Top 10 Provider",
        "Compare Provider",
        "Coin Price",
      ],
      value: "Top 10 Providers",
      list: [
        "Top 10 Borrow Rates",
        "Top 10 Provider",
        "Compare Provider",
        "Coin Price",
      ],
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.value = option;
    },
    show() {
      this.openPDropdown = !this.openPDropdown;
    },
  },
};
</script>

<style sccoped>
.p-dropdown {
  background: #1f2b4a;
  /* width: 188px;
  height: 56px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  /* position: absolute; */
}
.p-dropdown-content {
  width: 250px;
  top: 60px;
  background: #1f2b4a;
  position: absolute;
}
.e-dv {
  background: #0a1227;
  margin-bottom: 15px !important;
  padding: 7px !important;
}
</style>