<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const text = ref('text')
    return { text }
  },
})
</script>
