<template>

  <main>

    <ui-heading-main>Pyramidy</ui-heading-main>
    <ui-page-section-box>
      <div class="grid justify-center text-center">

        <div v-if="currentQuestionIndex == null">
          <p class="text-xl mx-20">
            Vítej na tajné stránce. Pokud se ti úspěšně podaří splnit všechny nastražené úkoly,
            tak se na konci dozvíš tajné heslo, které je v tuto chvíli schované pod zámkem.
          </p>
          <div class="grid justify-center bg-red-500 m-10 p-10">
            <svg class="w-40 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <ui-button @click="init()" class="mt-20">Start</ui-button>
        </div>

        <div v-if="!showResults && currentQuestionIndex != null">
          <ui-heading-main>Příklad {{ currentQuestionIndex+1 }}/{{ questionsPool.length }}</ui-heading-main>
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
          <ui-button @click="check()" class="mt-20">Mám to hotové</ui-button>
        </div>

        <div v-if="showResults">
          <ui-heading-main>Hotovo</ui-heading-main>
          <div v-if="isAllCorrect">
            <p>Dobrá práce, všechny tvé odpovědi jsou správné. Tvoje tajné heslo je:</p>
            <div class="border m-10 p-10 bg-yellow-200 text-xl text-center">Strč prst skrz krk.</div>
            <div class="grid justify-center bg-green-500 m-10 p-10">
              <svg class="w-40 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div v-if="!isAllCorrect">
            <p>Bohužel, některé úkoly se ti nepodařilo vyřešit. Aby ses dozvěděl(a) tajné heslo, musíš na vše odpovědět správně.</p>
            <div class="grid justify-center bg-red-500 m-10 p-10">
              <svg class="w-40 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <ui-button @click="init()" class="mt-20">Zkusit znovu</ui-button>
          </div>
        </div>

      </div>
    </ui-page-section-box>

  </main>

  <ui-confirm-dialog
    ref="confirmNextPyramidDialog"
    :headerText="isAnswerOk ? 'Výborně' : 'To se nepovedlo'"
    confirmBtnText="Pokračovat na další"
    dismissBtnText="Zkusit znovu"
    :iconPositive="isAnswerOk"
  >
    <div v-if="isAnswerOk">
      <p>Dobrá práce, pokračuj na další úkol :-)</p>
    </div>
    <div v-else>
      <p>Zkus to znovu nebo pokračuj na další příklad.</p>
    </div>
  </ui-confirm-dialog>

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
import uiButton from '@/components/ui/uiButton.vue';
import PyramidNumbersPad from '@/components/pyramids/PyramidNumbersPad.vue';
import uiConfirmDialog from '@/components/ui/uiConfirmDialog.vue';

export default {
  name: 'Dashboard',

  components: {
    uiHeadingMain,
    uiPageSectionBox,
    uiButton,
    PyramidNumbersPad,
    uiConfirmDialog
  },

  computed: {
    isAllCorrect() {
      for (let i = 0; i < this.results.length; i++) {
        if (!this.results[i]) {
          return false;
        }
      }
      return true;
    }
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
    results: [],
    currentQuestionIndex: null,
    question: null,
    state: null,
    showNumbersPadAtPosition: null,
    isAnswerOk: false,
    showResults: false
  }),

  created: function() {
    // this.init();
  },

  methods: {
    init() {
      this.results = [];
      this.currentQuestionIndex = null;
      this.question = null;
      this.state = null;
      this.isAnswerOk = false;
      this.showResults = false;
      this.shuffleQuestionsPool();
      this.selectNextQuestion();
    },

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
      let state = this.state;

      if (state[0] + state[1] == state[3]
          && state[1] + state[2] == state[4]
          && state[3] + state[4] == state[5]
        ) {
          this.isAnswerOk = true;
      } else {
        this.isAnswerOk = false;
      }

      this.results[this.currentQuestionIndex] = this.isAnswerOk;

      this.$refs.confirmNextPyramidDialog.showDialog().then((result) => {
        if (result) {
          this.selectNextQuestion();
        } else {
          this.resetAnswer();
        }
      });
    },

    selectNextQuestion() {

      if (this.currentQuestionIndex && this.currentQuestionIndex+1 == this.questionsPool.length) {
        this.showResults = true;
        return;
      }

      if (this.currentQuestionIndex == null) {
        this.currentQuestionIndex = 0;
      } else {
        this.currentQuestionIndex++;
      }
      this.question = this.questionsPool[this.currentQuestionIndex];
      this.resetAnswer();
    },

    resetAnswer() {
      this.state = this.question.map((x) => x);
    },

    shuffleQuestionsPool() {
      for (let i = this.questionsPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questionsPool[i], this.questionsPool[j]] = [this.questionsPool[j], this.questionsPool[i]];
      }
    }
  }
}
</script>
