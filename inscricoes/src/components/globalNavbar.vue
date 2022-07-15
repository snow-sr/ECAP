<script>
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      },
      log_out: () => {
        logout({ returnTo: window.location.origin });
      },
      user,
      isAuthenticated,
    };
  },
};
</script>

<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
    >
      <button
        class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button>
      <div
        class="collapse navbar-collapse flex-grow items-center"
        id="navbarSupportedContent1"
      >
        <a class="text-xl text-white pr-2" href="#">Navbar</a>
      </div>
      <!-- Collapsible wrapper -->

      <!-- Left links -->
      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item p-2">
          <a class="nav-link text-white" href="#">Eventos</a>
        </li>
        <li class="nav-item p-2">
          <a
            v-if="!isAuthenticated"
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            @click="login"
            >Login</a
          >
          <a
            v-if="isAuthenticated"
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            @click="log_out"
            >Logout</a
          >
        </li>
        <li class="nav-item p-2">
          <a
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            >Cadastro</a
          >
        </li>
        <li v-if="isAuthenticated" class="nav-item p-2">
          <img :src="user.picture" class="rounded-full w-8" alt="Avatar" />
        </li>
      </ul>
      <!-- Left links -->
    </div>
  </nav>
</template>
