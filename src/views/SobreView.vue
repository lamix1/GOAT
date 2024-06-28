<script setup>
import RotatingCard from "../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../examples/cards/infoCards/DefaultInfoCard.vue";

// import goatImage from '@/assets/GOAT_2.jpg';

// import { BiTwitch } from "oh-vue-icons/icons";



</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fgoat&psig=AOvVaw2l3V-s9r2dmrNxsCLM5gBM&ust=1719615781524000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCa_ZDy_IYDFQAAAAAdAAAAABAE"
              icon="touch_app"
              title="GOAT <br /> Gaming Center"
              description="Uma experiência diferente de tudo que você já viu."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Converse Conosco"
              description="Descubra mais sobre o espaço"
              :action="[
                {
                  route: 'https://tr.ee/14qdgXZJL-',
                  label: 'Entrar em contato',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="live_tv"
              title="Twitch"
              description="Nos acompanhe na Twitch!"
              :action="[
                {
                  route: 'https://www.twitch.tv/goatgamingcenter',
                  label: 'Twitch',
                },
              ]"
            />
            
            <DefaultInfoCard
              icon="audiotrack"
              title="TikTok"
              description="Nos acompanhe no TikTok!"
              :action="[
                {
                  route: 'https://www.tiktok.com/@goat.ggc',
                  label: 'TikTok',
                },
              ]"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="phone_iphone"
              title="Instagram"
              description="Nos acompanhe no Instagram!"
              :action="[
                {
                  route: 'https://www.instagram.com/goat.ggc',
                  label: 'Instagram',
                },
              ]"
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Site"
              description="Nos conheça pelo nosso site!"
              :action="[
                {
                  route: 'https://goatgc.com.br/',
                  label: 'Site',
                },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
