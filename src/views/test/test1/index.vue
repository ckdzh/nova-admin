<script setup lang="ts">
import {
  fetachDelete,
  fetachFormPost,
  fetachGet,
  fetachPost,
  fetachPut,
  fetchMock,
  testFailedRequest,
  testFailedResponse,
  testFailedResponse_NT,
  testUpdataToken,
} from '@/service'

const msg = ref()
function pinter() {
  msg.value = import.meta.env
}
function get() {
  fetachGet({ a: 112211 }).then((res) => {
    msg.value = res
  })
}
function delete2() {
  fetachDelete().then((res) => {
    msg.value = res
  })
}
function post() {
  const params = {
    data: '2022-2-2',
    data1: [],
    data2: {},
    data3: '',
    data4: null,
    data5: undefined,
  }
  fetachPost(params).then((res) => {
    msg.value = res
  })
}

function formPost() {
  const params = {
    data: '2022-2-2',
  }
  fetachFormPost(params).then((res) => {
    msg.value = res
  })
}
function put() {
  const params = {
    data: '2022-2-2',
  }
  fetachPut(params).then((res) => {
    msg.value = res
  })
}

// 测试请求失败
function failedRequest() {
  testFailedRequest().then((res) => {
    msg.value = res
  })
}
// 测试业务失败
function failedResponse() {
  testFailedResponse().then((res) => {
    msg.value = res
  })
}
// 测试业务失败无提示
function failedResponse_NT() {
  testFailedResponse_NT().then((res) => {
    msg.value = res
  })
}
// 测试刷新token
function updataToken() {
  testUpdataToken().then((res) => {
    msg.value = res
  })
}
function mock() {
  fetchMock().then((res) => {
    msg.value = res
  })
}
</script>

<template>
  <div>
    <n-h1>接口功能测试</n-h1>
    <n-space>
      <n-button
        strong
        secondary
        type="success"
        @click="pinter"
      >
        check env
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="get"
      >
        use online get
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="post"
      >
        use online post
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="formPost"
      >
        use online formPost
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="delete2"
      >
        use online delete
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="put"
      >
        use online put
      </n-button>
      <n-button
        strong
        secondary
        type="success"
        @click="mock"
      >
        to use mock
      </n-button>
      <n-button
        strong
        secondary
        type="error"
        @click="failedRequest"
      >
        请求失败
      </n-button>
      <n-button
        strong
        secondary
        type="error"
        @click="failedResponse"
      >
        响应失败
      </n-button>
      <n-button
        strong
        secondary
        type="error"
        @click="failedResponse_NT"
      >
        响应失败(无提示)
      </n-button>
      <n-button
        strong
        secondary
        @click="updataToken"
      >
        测试刷新token接口
      </n-button>
    </n-space>

    {{ msg }}
  </div>
</template>

<style scoped></style>
