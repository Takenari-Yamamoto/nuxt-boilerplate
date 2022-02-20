<template>
  <div>
    <p>子供です</p>
    <div>
      <!-- {{ aaa }} -->
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRef,
  toRefs,
  unref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    dataFromParent: {
      type: Object,
      default: null,
    },
    childText: {
      type: String,
      default: '子供',
    },
  },
  setup(props) {
    // const aaa = r
    return {}
  },
})
</script>
