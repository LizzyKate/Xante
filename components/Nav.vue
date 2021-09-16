<template>
  <div id="nav">
    <ul class="flex items-center gap-10">
      <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      <nuxt-link to="/market">Compare</nuxt-link>
      <!-- <div class="dropdown">
        <button class="dropbtn nav-link" ref="comparison">
          Compare
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <nuxt-link to="/centralised" class="compare">Centralised</nuxt-link>

          <nuxt-link to="/decentralized" class="compare"
            >Decentralised</nuxt-link
          >
        </div>
      </div> -->
      <nuxt-link to="/analytics" class="nav-link">Market Analytics</nuxt-link>
      <nuxt-link to="/tool" class="nav-link">Tools</nuxt-link>
      <nuxt-link to="/opportunity" class="nav-link">Opportunities</nuxt-link>
      <nuxt-link to="/media" class="nav-link">Media</nuxt-link>
      <nuxt-link to="/contact" class="nav-link">Contact Us</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  // mounted() {
  //   if (this.$route.path === "/Centralised") {
  //     this.$refs.comparison.style.borderBottom = "4px solid #39B87D";
  //   } else if (this.$route.path === "/Decentralised") {
  //     this.$refs.comparison.style.borderBottom = "4px solid #39B87D";
  //   } else {
  //     this.$refs.comparison.style.borderBottom = "none";
  //   }
  //   console.log(this.$route.path, "hhhh");
  // },
};
</script>

<style>
.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 142px;
  background: #1f2b4a;
  z-index: 1;
  top: 60px;
  border-radius: 3px;
}

.dropdown-content a {
  float: none;
  color: white;
  font-family: "Mulish";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background: #056237;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.nav-link {
  color: #dce0e9;
  /* margin-right: 40px;  */
  font-family: "Mulish";
  font-size: 16px;
  font-weight: 300;
  padding: 30px 0;
}

#nav a.nuxt-link-exact-active {
  font-weight: 600;
  border-bottom: 4px solid #39b87d;

  padding: 30px 0;
  color: #fff;
}
.compare {
  border-bottom: 0 !important;
  padding: 12px 16px !important;
}
</style>