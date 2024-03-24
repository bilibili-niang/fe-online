<script setup lang="ts">
import {Ref, ref, watch} from 'vue';
import api from "@/api";
import {dataType} from "@/api/type.d.ts";

const emits = defineEmits(['departmentChange'])
const props = defineProps({
  dataList: {
    type: Object,
    default: {}
  }
})
let childrenCompanyList = ref([
  {
    id: '123',
    name: 'asdasd'
  }
])

let queryItem: Ref<dataType | null> = ref(null)
let activeIndex: Ref<string | null> = ref(null)
// 公司查询
const companyQuery = async (item: dataType, index: string) => {
  activeIndex.value = index
  queryItem.value = item
  await api.orgApi.query(queryItem.value.name)
      .then(res => {
        item.show = true
        childrenCompanyList.value = res;
      })
      .catch(e => {
        console.log(e)
      })
}
const departmentChange = (depName: string | null) => {
  if (!depName) {
    return;
  }
  emits('departmentChange', depName)
}
let dataList: Ref<dataType | null> = ref(null)
const init = () => {
  dataList.value = props.dataList
  dataList.value.map(item => item.show = false)
}
watch(() => props.dataList, () => {
  init()
})


</script>

<template>
  <div class="departmentSelector ice-column">
    <p></p>
    <div class="itemContainer ice-column">
      <template v-for="(item,index) in dataList" :key="index">
        <div class="item">
          <div class="ice-text" @click="item.show=!item.show">
            {{ item.show ? '收起' : '展开 >' }}
          </div>
          <div class="ice-text flexAuto" @click="companyQuery(item,index)">
            {{ item.name }}
          </div>
        </div>
        <div class="itemContainer" v-show="(activeIndex!==null?activeIndex==index:false) && item.show">
          <div class="item-s" v-for="(childrenItem,childrenIndex) in childrenCompanyList" :key="childrenIndex">
            <div class="ice-text" @click="departmentChange(item.name)">
              {{ childrenItem.name }}
            </div>
          </div>
        </div>
      </template>

    </div>

  </div>
</template>

<style scoped lang="less">
.departmentSelector{
  height: 100vh;
  overflow: auto;
}
</style>