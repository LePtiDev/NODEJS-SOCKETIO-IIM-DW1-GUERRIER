<template>
  <div class="p-2 border border-gray-200 shadow-sm rounded-md w-fit w-1/6 cursor-pointer flex justify-start items-center" :class="file.type === 'file' ? 'bg-gray-50' : 'bg-blue-50'">
    <svg v-if="file.type === 'file'" class="h-6 w-6 stroke-gray-400 stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
    <svg v-else class="h-6 w-6 stroke-gray-400 stroke-2" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
    <span class="text-sm ml-2">{{ file.name.substring(0, 20) }}</span>
  </div>
</template>
<script>
export default {
  name: 'File',
  props: {
    file: Object,
  }
}
</script>
