<template>
  <div class="navbar-fixed">
    <nav class="nav blue">
      <div class="nav-wrapper">
        <div class="row">
          <div class="col s12">
            <router-link to="/" class="brand-logo">My App</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <router-link v-for="(router,index) in routers" :key="index" tag="li" :to="router.link">
                <a class="waves-effect waves-teal btn-flat">{{ router.name }}</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routers: [
        {link: '/', name: 'Create'},
        {link: '/list', name: 'List'},
        {link: '/users', name: 'Users'},
      ]
    }
  }
}
</script>