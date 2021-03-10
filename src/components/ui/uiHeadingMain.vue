<template>
  <div class="mb-7 mt-5">
    <h1 class="text-2xl font-bold"><slot></slot></h1>
    <p v-if="this.$slots.description" class="text-sm font-medium">
      <slot name="description"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'uiHeadingMain'
}
</script>
