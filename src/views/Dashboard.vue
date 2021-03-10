<template>
  <main>

    <ui-heading-main>Pyramidy</ui-heading-main>
    <ui-page-section-box>

      <div class="w-60">
        <div class="grid grid-cols-6">
          <div class="pyramidBlock col-start-1 col-span-2" :class="{ 'questionBlock': question[0] != null }" @click="click(0)">
            {{ state[0] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 0" :currentValue="state[0]" @numberSelected="setNumber" />
          </div>
          <div class="pyramidBlock col-start-3 col-span-2" :class="{ 'questionBlock': question[1] != null }" @click="click(1)">
            {{ state[1] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 1" :currentValue="state[1]" @numberSelected="setNumber" />
          </div>
          <div class="pyramidBlock col-start-5 col-span-2" :class="{ 'questionBlock': question[2] != null }" @click="click(2)">
            {{ state[2] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 2" :currentValue="state[2]" @numberSelected="setNumber" />
          </div>
          <div class="pyramidBlock col-start-2 col-span-2" :class="{ 'questionBlock': question[3] != null }" @click.stop="click(3)">
            {{ state[3] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 3" :currentValue="state[3]" @numberSelected="setNumber" />
          </div>
          <div class="pyramidBlock col-start-4 col-span-2" :class="{ 'questionBlock': question[4] != null }" @click="click(4)">
            {{ state[4] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 4" :currentValue="state[4]" @numberSelected="setNumber" />
          </div>
          <div class="pyramidBlock col-start-3 col-span-2" :class="{ 'questionBlock': question[5] != null }" @click="click(5)">
            {{ state[5] }}
            <pyramid-numbers-pad :show="showNumbersPadAtPosition == 5" :currentValue="state[5]" @numberSelected="setNumber" />
          </div>
        </div>
      </div>

      <button @click="check()" class="border p-2 m-20">testuj</button>

    </ui-page-section-box>

  </main>
</template>

<style scoped>
  .pyramidBlock {
    @apply border text-center py-4 h-14 relative;
  }
  .questionBlock {
    @apply border bg-gray-100 font-bold;
  }
</style>

<script>
import uiHeadingMain from '@/components/ui/uiHeadingMain.vue';
import uiPageSectionBox from '@/components/ui/uiPageSectionBox.vue';
import PyramidNumbersPad from '@/components/pyramids/PyramidNumbersPad.vue';

export default {
  name: 'Dashboard',

  components: {
    uiHeadingMain,
    uiPageSectionBox,
    PyramidNumbersPad
  },

  data: () => ({
    questionsPool: [
      [2, 6, 6, null, null, null],
      [null, null, 5, null, null, 15],
      [3, null, null, 8, 10, null],
      [3, null, null, 4, null, 7],
      [null, 4, null, null, 4, 17],
      [null, 8, null, 10, null, 20],
    ],
    question: null,
    state: null,
    showNumbersPadAtPosition: null
  }),

  created: function() {
    this.question = this.questionsPool[Math.floor(Math.random() * this.questionsPool.length)];
    this.state = this.question.map((x) => x);
  },

  methods: {
    click(pos) {
      if (this.question[pos] == null) {
        this.showNumbersPadAtPosition = pos;
      } else {
        this.showNumbersPadAtPosition = null;
      }
    },

    setNumber(num) {
      this.state[this.showNumbersPadAtPosition] = num;
      this.showNumbersPadAtPosition = null;
    },

    check() {
      let mistake = true;

      let state = this.state;

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
