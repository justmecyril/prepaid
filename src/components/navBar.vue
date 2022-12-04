<template>
  <div class="sticky top-0 z-50 bg-gray-100 h-22">
    <nav class="container px-4 py-5 mx-auto">
      <div class="flex justify-between">
        <!-- Left elements -->
        <div class="flex">
          <router-link
            :to="{ name: 'Home' }"
            class="mr-4 text-2xl font-normal text-green-900 capitalize"
            >Dealtor<span class="font-bold text-yellow-500"
              >.</span
            ></router-link
          >
        </div>
        <!-- middle element -->
        <div class="flex">
          <div class="w-full">
            <form class="relative z-50">
              <button
                type="submit"
                id="searchsubmit"
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <input
                type="text"
                name="s"
                id="s"
                class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 transition duration-150 ease-in-out bg-white border border-transparent rounded-md focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm"
                placeholder="Search"
              />
            </form>
          </div>
        </div>

        <!-- Right elements -->
        <div class="flex">
          <div class="mr-8">
            <a
              href="#"
              class="px-4 py-2 mr-4 text-sm font-semibold capitalize rounded-md btn-secondary"
              @click.prevent="toggleSignInModal"
              >Sign in</a
            >
            <a
              href="#"
              class="px-4 py-2 text-sm font-semibold capitalize rounded-md btn-primary"
              >Sign up</a
            >
          </div>
          <div class="flex">
            <div class="mr-8"><h3>Contracts</h3></div>
            <div class="relative mt-2 mr-2 dropdown">
              <a
                class="flex items-center mr-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 dropdown-toggle hidden-arrow"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                  ></path>
                </svg>
                <span
                  class="
                    text-white
                    bg-yellow-400
                    absolute
                    rounded-full
                    border-2 border-white
                    text-xs
                    -mt-2.5
                    ml-2
                    py-0
                    px-1.5
                  "
                  >1</span
                >
              </a>
              <ul
                class="absolute right-0 left-auto z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
            <div class="relative mt-1 dropdown">
              <a
                class="flex items-center dropdown-toggle hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  class="rounded-full"
                  style="height: 25px; width: 25px"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                class="absolute right-0 left-auto z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a
                    class="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"
                    href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "navBar",
  methods: {
    ...mapMutations(["toggleSignInModal"]),
    // toggleSignInModal() {
    //   this.$store.commit("toggleSignInModal");
    // },
  },
};
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
