import { defineComponent, onMounted, ref, shallowRef } from 'vue'
import * as monaco from 'monaco-editor'

export default defineComponent({
  setup() {
    interface Props {
      code: string
      onChange: (value: string) => void
      title: string
    }

    const props = defineProps<Props>()

    const editorRef = shallowRef()
    const container = ref<HTMLInputElement | null>(null)

    // onMounted(() => {
    //     // const editor = editorRef.value = monaco.editor.create()
    //   )

    return () => (
      <div class="container">
        <div>
          <span></span>
        </div>
        <div ref="container"></div>
      </div>
    )
  },
})
