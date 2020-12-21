<template lang="pug">

BounceLoading(v-show="inProgress")

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import BounceLoading from '@/components/BounceLoading.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const inProgress = computed(() => store.state.inProgress)

    return { inProgress }
  },
  components: {
    BounceLoading
  }
})
</script>
