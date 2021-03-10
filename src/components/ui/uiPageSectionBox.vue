<template>
  <section>
    <div class="bg-white shadow sm:rounded-lg mb-12">
      <div class="px-4 py-6 sm:px-6">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'uiPageSectionBox'
}
</script>
