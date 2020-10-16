<template>
  <primary-nav />

    <div>

    </div>
    <div>
      <secondary-nav />
    </div>
  </div>
</template>
<script>
import PrimaryNav from "./components/PrimaryNav.vue";
import SecondaryNav from "./components/SecondaryNav.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    PrimaryNav,
    SecondaryNav,
  },
};
</script>
<style src="./assets/tailwind.css">
</style>
