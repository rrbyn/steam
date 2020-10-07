<template>
  <div
    class="flex flex-1 border-border-color border-1 mx-40 bg-blue-nav shadow-xs"
  >
    <div
      class="py-4 border-r border-border-color bg-gradient-to-r hover:from-initgradient hover:to-finalgradient font-roboto"
    >
      <span class="text-white py-4 px-8">Sinu Pood</span>
    </div>
    <div
      class="py-4 border-r border-border-color bg-gradient-to-r hover:from-initgradient hover:to-finalgradient font-roboto"
    >
      <span class="text-white py-4 px-8">Sirvi</span>
    </div>
    <div
      class="py-4 border-r border-border-color bg-gradient-to-r hover:from-initgradient hover:to-finalgradient font-roboto"
    >
      <span class="text-white py-4 px-8">Punktide Pood</span>
    </div>
    <div
      class="py-4 border-r border-border-color bg-gradient-to-r hover:from-initgradient hover:to-finalgradient font-roboto"
    >
      <span class="text-white py-4 px-8">Uudised</span>
    </div>
    <div
      class="py-4 border-r border-border-color bg-gradient-to-r hover:from-initgradient hover:to-finalgradient font-roboto"
    >
      <span class="text-white py-4 px-8">Labor</span>
    </div>
    <div class="ml-auto self-center">
      <input type="text" name="search" />
    </div>
  </div>
</template>
<style scoped>
.secondary-nav4343 {
  display: flex;
  flex: 1;
  border: 1px solid rgba(16, 21, 25, 0.3);
  margin: 0 10rem;
  background-color: rgba(62, 126, 167, 0.8);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
}

.secondary-nav div {
  padding: 1rem 0;
  border-right-color: rgba(16, 21, 25, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
}

.secondary-nav {
  background-image: linear-gradient(
    rgb(227, 234, 239) 5%,
    rgb(199, 213, 224) 95%
  );
  cursor: pointer;
}

.nav-item {
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 1rem 2rem;
}

.search {
  margin-left: auto;
}
</style>
