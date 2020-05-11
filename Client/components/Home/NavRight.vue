<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-form>
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
      ></b-form-input>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>

    <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template v-slot:button-content>
        <em>kimi</em>
      </template>
      <b-dropdown-item href="#">登录</b-dropdown-item>
      <b-dropdown-item href="#">设置</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
export default {}
</script>

<style></style>
