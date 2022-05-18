<template>
  <div class="py-8 px-10">
    <div class="flex flex-wrap gap-6">
      <File :key="file.name" v-for="file in getFilesData" :file="file"/>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import File from "@/components/File.vue"

export default {
  name: 'HomeView',
  components: {
    File
  },
  computed: {
    ...mapGetters([
      'getFilesData',
    ])
  },
  methods:{
    ...mapActions(['getFilesAction'])
  },
  mounted(){
    // call the dispatch
    this.getFilesAction()
  }
}
</script>
