<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <Header />
    </div>
    <div class="hero-body ">
      <div class="container">
        <div class="columns is-vcentered ">
          <div class="column is-6">
            <h1 class="title" style="font-size: 5em;letter-spacing: 0.13em">
              Petter
            </h1>
            <h2 class="subtitle has-text-primary" style="font-size: 2.5em">
              Adopting a pet is always better!
            </h2>
            <div class="buttons">
              <a class="button is-primary">
                <strong>List for adoption</strong>
              </a>
              <a class="button is-dark">
                <strong>Find a pet near you</strong>
              </a>
            </div>
          </div>
          <div class="column is-6 is-hidden-touch">
            <img src="/img/pets/hero-1.svg" style="max-height:54vh" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {
    Header: () => import("../components/Header")
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
