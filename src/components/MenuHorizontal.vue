<template>
  <div class="container" :class="{ 'container-vertical': isVerticalMenu }">
    <div class="logo">
      <img src="../assets/n.png" alt="Logo" class="logo" />
    </div>
    <div class="menu" :class="{ 'menu-vertical': isVerticalMenu }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="handleItemClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="gradient-button" :class="{ 'gradient-button-vertical': isVerticalMenu }">
      <button @click="goToLogin">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "HOME", link: "home" },
        { label: "ESTATÍSTICAS E DADOS", link: "estatiticas" },
        { label: "TIMELINE", link: "timeline" },
        { label: "CONTATO", link: "contato" },
      ],
      isVerticalMenu: false,
    };
  },
  methods: {
    handleItemClick(item) {
      if (item.link === "home") {
        this.$router.push({ path: "/" });
      } else if (item.link === "estatiticas" || item.link === "timeline" || item.link === "contato") {
        this.$router.push({ path: item.link });
      }
    },
    goToLogin() {
      this.$router.push({
        name: "login",
      });
    },
    checkScreenWidth() {
      this.isVerticalMenu = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
}

.container-vertical {
  flex-direction: column;
}

.menu {
  display: flex;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  font-size: 10px;
}

.menu-vertical {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-vertical ul {
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
}

.menu li {
  width: 120px;
  height: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.menu-vertical li {
  width: 100%;
}

.menu li:hover {
  background-color: #fafafa;
}

.gradient-button {
  width: 100px;
  height: 50px;
  background-image: linear-gradient(to right, #2C7AED, #4BC3CC);
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-button-vertical {
  width: 100%;
}
</style>
