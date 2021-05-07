<template>
    <div>
        <div class="footer">
    
        <strong class="subheading ma-4">Get connected with us on social networks!</strong>

    <v-spacer></v-spacer>


        {{ new Date().getFullYear() }}

    <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
    
        </div>  

        
    </div>
   
</template>

<script>
    export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-youtube',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.footer{
  height: 50px;
  background-color: #232323;
  color: #f9c815;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
</style>