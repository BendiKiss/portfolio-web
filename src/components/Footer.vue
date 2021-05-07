<template>
    <div>
        <div class="footer">
    
        <strong class="subheading ma-4">Get connected with me on social networks!</strong>

    <v-spacer></v-spacer>


        {{ new Date().getFullYear() }}

    <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          class="mx-4"
          dark
          icon
          :href="icon.urllink"
        >
          <v-icon size="24px">
              
           
                
            {{ icon.name }}
            
          </v-icon>
        </v-btn>
    
        </div>  

        
    </div>
   
</template>

<script>
    export default {
    data: () => ({
      icons: [
          {
                name:  'mdi-facebook',
                urllink: "https://www.facebook.com/bendeguz.kiss.7"
          },
          {
                name: 'mdi-youtube',
                urllink: "https://www.youtube.com/channel/UCPFX_UHeBwAkCqta9QiRiyw"
          },
          {
                name: 'mdi-linkedin',
                urllink: "https://www.linkedin.com/in/bendegúzkiss-multimedia/"
          },
          {
                name: 'mdi-instagram',
                urllink: "https://www.instagram.com/bendeguz_kiss/"
          }
       
        
        
     
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