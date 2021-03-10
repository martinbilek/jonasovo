<template>
  <main>

    <ui-heading-main>Pyramidy</ui-heading-main>
    <ui-page-section-box>

      <div class="grid grid-cols-6 w-60">
        <div class="xx col-start-1 col-span-2" :class="{ 'font-bold': a.question[0] != null }" @click="click(0)">{{ a.state[0] }}</div>
        <div class="xx col-start-3 col-span-2" :class="{ 'font-bold': a.question[1] != null }" @click="click(1)">{{ a.state[1] }}</div>
        <div class="xx col-start-5 col-span-2" :class="{ 'font-bold': a.question[2] != null }" @click="click(2)">{{ a.state[2] }}</div>
        <div class="xx col-start-2 col-span-2" :class="{ 'font-bold': a.question[3] != null }" @click="click(3)">{{ a.state[3] }}</div>
        <div class="xx col-start-4 col-span-2" :class="{ 'font-bold': a.question[4] != null }" @click="click(4)">{{ a.state[4] }}</div>
        <div class="xx col-start-3 col-span-2" :class="{ 'font-bold': a.question[5] != null }" @click="click(5)">{{ a.state[5] }}</div>
      </div>

      <button @click="check()" class="border p-2 m-20">testuj</button>

    </ui-page-section-box>

  </main>
</template>

<style scoped>
  .xx {
    @apply border text-center py-4 h-14;
  }
</style>

<script>
import uiHeadingMain from '@/components/ui/uiHeadingMain.vue';
import uiPageSectionBox from '@/components/ui/uiPageSectionBox.vue';

export default {
  name: 'Dashboard',

  components: {
    uiHeadingMain,
    uiPageSectionBox
  },

  data: () => ({
    a: {
      question: [null, null, 5, null, null, 15],
      state: [null, null, 5, null, null, 15]
    }
  }),

  methods: {
    click(pos) {
      if (this.a.question[pos] == null) {
        let val = this.a.state[pos];

        if (val != null && val < 20) {
          val++;
        } else {
          val = 0;
        }

        this.a.state[pos] = val;
      }
    },

    check() {
      let mistake = true;

      let state = this.a.state;

      if (state[0] + state[1] == state[3]
          && state[1] + state[2] == state[4]
          && state[3] + state[4] == state[5]
        ) {
          mistake = false;
      }

      if (mistake) {
        window.alert('MAS TAM CHYBU :-(');
      } else {
        window.alert('JSI DOBREJ!');
      }
    }
  }
}
</script>
