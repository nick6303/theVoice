<template lang="pug">
main
  router-view 
ModalContainer.modules
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ModalContainer from '@c/slime-modal/src'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AppMain',
  components: {
    ModalContainer,
    // Home,
    // Survey
  },
  setup() {
    const store = useStore()
    const surveyOpen = computed(() => store.state.survey.surveyOpen)
    return {
      surveyOpen,
    }
  },
})
</script>
