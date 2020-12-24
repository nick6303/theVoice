<template lang="pug">

AppHeader
AppMain
AppFooter

BounceLoading(v-show="inProgress")

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { AppHeader, AppFooter } from '@/components/layout'
import AppMain from '@/views/AppMain.vue'

import BounceLoading from '@/components/BounceLoading.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const inProgress = computed(() => store.state.inProgress)

    return { inProgress }
  },
  components: {
    AppHeader,
    AppFooter,
    AppMain,
    BounceLoading
  }
})
</script>
