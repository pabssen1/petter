<template>
  <b-navbar fixed-top class="is-light">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }" style="height:70px">
        <img src="/img/logo@2x.png" alt="Petter" style="max-height:100%" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>

      <b-navbar-dropdown label="Pets">
        <b-navbar-item href="#">
          Dogs
        </b-navbar-item>
        <b-navbar-item href="#">
          Cats
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>List for adoption</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style></style>
