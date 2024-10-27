<template>
     
   <HomePage_Header />

     <div class="title" style="padding-top: 60px;">
       
        <ListBook />
     </div>

     <div class="title" style="padding-top: 30px;">
        
        <ListBook />
     </div>

     <div class="title" style="padding-top: 30px;">
        
        <ListBook />
     </div>
    
     <div class="title" style="padding-top: 30px;">
        
        <ListBook />
     </div>
</template>

<script>
import HomePage_Header from '@/components/HomePage_Header.vue';
import ListBook from '@/components/ListBook.vue';
    export default {
        components: {
            HomePage_Header,
            ListBook,
        }

    };
</script>