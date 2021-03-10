<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <router-link :to="{ name: 'Dashboard' }" class="font-medium text-red-600 hover:text-red-500">
      Continue to main screen.
    </router-link>
  </div>
</template>
