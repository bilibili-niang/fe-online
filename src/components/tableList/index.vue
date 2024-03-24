<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "tableList"
})
</script>
<script setup lang="ts">

defineProps({
  tableList: {
    type: Array,
    default: () => {
      return []
    }
  }
})

</script>

<template>
  <div class="tableList">
    <p></p>
    <div class="ice-column" v-if="tableList.length===0">
      <div class="ice-header">
        当前没有数据
      </div>
    </div>
    <div class="itemContainer" v-else>
      <div class="item-s" v-for="(item,index) in tableList" :key="index">

        <div class="ice-text flexAuto">
          {{ item.name }}
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="less">
.tableList{
  margin-left: 1rem;
  height: 100vh;
  overflow: auto;
}


</style>