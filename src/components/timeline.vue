<template>
  <div id="app"><vue-horizontal-timeline :items="items" /></div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items: [
      {
        title: "1939",
        content:
          "World War II, was a global war that lasted from 1939 to 1945. The vast majority of the world's countries—including all the great powers—eventually formed two opposing military alliances: the Allies and the Axis.",
      },
      {
        title: "1945",
        content:
          "The War in Vietnam, was a post–World War II armed conflict involving a largely British-Indian and French task force and Japanese troops from the Southern Expeditionary Army Group, versus the Vietnamese communist movement, the Viet Minh, for control of the country, after the unconditional Japanese surrender.",
      },
      {
        title: "1947",
        content:
          "The Paraguayan Civil War, also known as the Barefoot Revolution and the Second Paraguayan Civil War, was a conflict in Paraguay that lasted from March to August 1947.",
      },
      {
        title: "1954",
        content:
          "The Algerian War, was a war between France and the Algerian National Liberation Front (French: Front de Libération Nationale – FLN) from 1954 to 1962, which led to Algeria gaining its independence from France.",
      },
    ],
  }),
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
