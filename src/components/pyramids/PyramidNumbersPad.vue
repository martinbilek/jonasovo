<template>

    <transition name="menuTransition">
      <div v-if="show" class="absolute w-max left-16 top-7 border-2">
        <div class="relative border border-t-2 rounded-md grid grid-cols-5 cursor-pointer bg-white rounded-md -space-y-px z-10">
          <a
            v-for="(value, index) in 21"
            :key="index"
            @click.stop="numberClick(index)"
            :class="{ 'bg-green-100': index == currentValue }"
            href="#"
            class="hover:bg-gray-100 items-center px-3 py-2 text-xl border"
          >
            <span class="">
              {{ index }}
            </span>
          </a>
        </div>
      </div>
    </transition>

</template>

<style scoped>
.menuTransition-enter-active { @apply transition ease-out duration-200; }
.menuTransition-leave-active { @apply transition ease-in duration-75; }
.menuTransition-enter-from,
.menuTransition-leave-to { @apply transform opacity-0 scale-95; }
.menuTransition-enter-to,
.menuTransition-leave-from { @apply transform opacity-100 scale-100; }
</style>

<script>
export default {
  name: 'PyramidNumbersPad',

  props: {
    currentValue: {
      type: Number,
      default: null
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  emits: ['numberSelected'],

  methods: {
    numberClick(num) {
      this.$emit('numberSelected', num);
    }
  }
}
</script>
