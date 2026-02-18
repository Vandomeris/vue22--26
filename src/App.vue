<script setup lang="ts"></script>

<template>

  <header>
    <div>LOGO</div>

    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/products">Товары</RouterLink>
    </nav>
  </header>


  <main>

    <RouterView />

  </main>


  <footer></footer>

</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 10px;
}

header nav {
  display: flex;
  column-gap: 40px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 10px;
}
</style>
