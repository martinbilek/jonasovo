<template>
  <header class="bg-white shadow fixed w-full z-50">

    <!-- top menu -->
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex px-2 lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <router-link :to="{ name: 'Dashboard' }">
              <img class="h-8 w-auto" src="/rabbit.svg" alt="kájík">
            </router-link>
          </div>
          <nav aria-label="Global" class="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
            <router-link :to="{ name: 'Dashboard' }" class="mainMenuItem">
              Pyramidy
            </router-link>
          </nav>
        </div>
      </div>
    </div>

  </header>

</template>

<style scoped>
.mainMenuItem {
  @apply px-3 py-2 text-sm font-medium;
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',

  components: {
  },

  data: () => ({
    isContextMenuOpen: false,
    isWorkspaceSubmenuOpen: false
  }),

  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },

  methods: {
    ...mapGetters('account', { getGroups: 'groups' }),

    logout() {
      this.$router.push({ name: 'Logout' });
    },

    openContextMenu(forceClose) {
      let action = !this.isContextMenuOpen;
      if (forceClose) {
        action = false;
      }
      this.isContextMenuOpen = action;
      this.isWorkspaceSubmenuOpen = false;
    }
  }
};
</script>
