<template>
  <div>
    <Hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Pets for adoption near you</h1>
        <div class="columns is-vcentered">
          <div class="column is-4 ">
            <PetCard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Hero: () => import("../components/Hero"),
    PetCard: () => import("../components/PetCard")
  }
};
</script>
