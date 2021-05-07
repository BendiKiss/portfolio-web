<template>
  <div flex items-center class="about ma-5">
    <h1 class="pa-5">Let me introduce myself to you!</h1>

<div class="videocv ma-5 pa-5">
        <section>
          <iframe width="660" height="415" src="https://www.youtube.com/embed/khQwt5I-6WM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
      </div>

    <div class="txtbox primary ma-5 pa-5 secodary--text">
      <p class="ma-5 pa-5">If you have watched the video you know the basics of me that I would write down here in long lines.<br><br>
          For those, who haven’t seen the video above.<br>
          I’m a young energetic, motivated multimedia student who fell in love with creating. With me, you can get a committed, team-player, creative and open-minded group member, who is loyal and enthusiastic. Otherwise, love all the sports especially the extreme ones. I have more than 10 years experience in ice hockey, snowboard, ski, windsurf.
          <br><br>Thank you very much for reading through, I hope I got your attention.
      </p>
      
      <a href="../assets/CV.pdf" download class="pdf"><v-btn class="secondary white--text">Get my cv!</v-btn></a>

    </div>

    <div class="cv secondary">
      <pdf alt="CV" src="../assets/CV.pdf"></pdf>
    </div>
    
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
  }
}
</script>

<style>
.videocv{
  display: flex;
  justify-content: center;
  align-self: center;
}
.pdf{
  display: flex;
  justify-self: center;
  align-self: center;
  height: 60px;
  width: 80px;
  font: xx-large;

}
</style>
