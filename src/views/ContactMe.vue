<template>
  <div class="contactme ma-4 pa-4">
    <h1>Let's connect!</h1>
    <v-container class="primary secondary--text ma-4 pa-4">
      <p>You can find me on many social media platforms and see it for yourself.<br>
      If you write me an email, i will get back to you sooner than you think!<br>
      Do you think I'm just saying? Try it yourself!</p>
    </v-container>

     <div>
       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
          wrap
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn> <br>
       https://www.linkedin.com/in/bendegúzkiss-multimedia/ <br>
    
       https://www.facebook.com/bendeguz.kiss.7 <br>
     
       https://www.instagram.com/bendeguz_kiss/ <br>
       
       https://www.youtube.com/channel/UCPFX_UHeBwAkCqta9QiRiyw <br>
      Here is my email adress: bendeguzkiss1818@gmail.com <br>
      Get in touch!
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

<style>

</style>