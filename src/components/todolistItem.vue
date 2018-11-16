<template>
   <li>
     {{item}}
   </li>
</template>

<script>
export default {
   name: 'todolistItem',
   data () {
      return {
      }
   },
   props: {
      item: ''
   }

}
</script>
