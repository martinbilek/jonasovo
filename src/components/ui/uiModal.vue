<template>
  <transition name="modalTransition" appear>
    <div v-if="show" class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div @click="close()" class="absolute inset-0 bg-gray-200 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modalTransition-enter-active,
.modalTransition-leave-active { @apply transform transition ease-out duration-300; }
.modalTransition-enter-from,
.modalTransition-leave-to { @apply opacity-0; }
.modalTransition-enter-to,
.modalTransition-leave-from { @apply opacity-100; }
</style>

<script>
export default {
  name: 'uiModal',

  emits: ['close'],

  props: [
    'show'
  ],

  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>
