<template lang="pug">
.answerBlock
  .text
    input(
      :type="question.inputType"
      :value="context"
      @change="handleInput"
      :placeholder="question.placeholder"
      autocomplete="off"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    question: {
      type: Object,
      default: null
    },
    context: {
      type: String,
      default: null
    }
  },
  setup(props, { emit }) {
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      emit('update:context', target.value)
      emit('update:showError', false)
    }
    return {
      handleInput
    }
  }
})
</script>
