<template>
  <div class="indexPage">
    <div class="leftColumn">
      <departmentSelector :dataList="dataTreeData" @departmentChange="searchUser"></departmentSelector>
    </div>
    <div class="userData flexAuto ice-column">
      <p></p>
      <input type="text" v-model="searchKey" @input="searchTrigger">
      <tableList :tableList="userTableList" @search="getUserList"></tableList>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, Ref} from 'vue';
import api from "@/api";
import departmentSelector from './components/departmentSelector/index.vue'
import tableList from './components/tableList/index.vue'
import {dataType} from "@/api/type.d.ts";

let dataTreeData: Ref<dataType | null> = ref()
let userTableList: Ref<dataType | null> = ref()
let queryKey: Ref<string> = ref("1")
const init = async () => {
  await api.orgApi.query({})
      .then(res => {
        dataTreeData.value = res;
      })
}

const searchUser = (name: string) => {
  searchKey.value = null
  queryKey.value = name
  getUserList(name)
}

const getUserList = async (name: string | null) => {
  if (name) {
    queryKey.value = name
  }
  await api.userApi.query(queryKey.value)
      .then(res => {
        userTableList.value = res
      })
}
init();

let searchKey: Ref<string | null> = ref('')
let timers: any = null;

const searchTrigger = () => {
  clearTimeout(timers)
  timers = setTimeout(() => {
    getUserList(searchKey.value)
  }, 500);
  console.log(searchKey.value)
}

</script>
<style lang="less">
.indexPage{
  width: 100%;
  .ice-row();

  .leftColumn, .userData{
    .ice-column();
  }

  .leftColumn{
    .wPercent(30%);
  }

  .userData{

  }

}
</style>