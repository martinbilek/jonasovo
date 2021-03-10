<template>
  <ui-modal :show="isVisible">
    <div class="sm:flex sm:items-start">
      <div
        :class="{ 'bg-green-300': iconPositive, 'bg-red-300': !iconPositive }"
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-16 sm:w-16 text-white"
      >
        <svg v-if="!iconPositive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg v-if="iconPositive" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-lg leading-6 font-medium text-karmen" id="modal-headline">
          {{ headerText }}
        </h3>
        <div class="mt-2">
          <div class="text-sm text-karmen-text">
            <slot>{{ bodyText }}</slot>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-10 flex justify-center">
      <ui-button @click.stop="_dismiss()" class="mr-2 w-full">{{ dismissBtnText }}</ui-button>
      <ui-button @click.stop="_confirm()" class="ml-2 w-full">{{ confirmBtnText }}</ui-button>
    </div>
  </ui-modal>
</template>

<script>
import uiModal from '@/components/ui/uiModal.vue';
import uiButton from '@/components/ui/uiButton.vue';

export default {
  name: 'uiConfirmDialog',

  components: {
    uiModal,
    uiButton
  },

  props: {
    headerText: {
      type: String,
      default: 'Confirm dialog'
    },
    bodyText: {
      type: String,
      default: 'Are you sure you want to continue?'
    },
    confirmBtnText: {
      type: String,
      default: 'Confirm'
    },
    dismissBtnText: {
      type: String,
      default: 'Dismiss'
    },
    iconPositive: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    isVisible: false
  }),

  methods: {
    showDialog() {
      this.show();
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve
        this.rejectPromise = reject
      });
    },

    close() {
      this.isVisible = false;
    },

    show() {
      this.isVisible = true;
    },

    _confirm() {
      this.close();
      this.resolvePromise(true);
    },

    _dismiss() {
      this.close();
      this.resolvePromise(false);
    }
  }
}
</script>
