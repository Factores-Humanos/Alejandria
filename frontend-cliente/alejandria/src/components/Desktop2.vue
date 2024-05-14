<template>
  <div class="desktop-8">
    <div class="mis-publicaciones">Mis Publicaciones</div>
    <img class="desktop-8-child" alt="" />
    <img class="removebg-logo1-2" alt="" src="/removebg-logo1-1@2x.png" />
    <img class="profile-icon-2" alt="" src="/profile-icon-1@2x.png" />
    <img class="image-4-icon" alt="" src="/image-4@2x.png" />
    <img class="image-4-icon" alt="" src="/image-5@2x.png" />
    <img class="image-6-icon" alt="" src="/image-6@2x.png" />
    <img class="image-1-icon" alt="" src="/image-1@2x.png" />
    <div class="desktop-8-item" />
    <div class="desktop-8-item" />
    <img class="rectangle-icon" alt="" src="/rectangle-29@2x.png" />
    <div class="desktop-8-child1" />
    <img class="boton-x-1-icon" alt="" src="/botonx-1@2x.png" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Desktop2",
  });
</script>
<style scoped>
  .mis-publicaciones {
    position: absolute;
    top: 144px;
    left: 76px;
    display: inline-block;
    width: 376px;
    height: 48px;
  }
  .desktop-8-child {
    position: absolute;
    top: 215px;
    left: 83px;
    width: 1256px;
    height: 2px;
    object-fit: contain;
  }
  .removebg-logo1-2 {
    position: absolute;
    top: 40px;
    left: 83px;
    width: 96px;
    height: 80px;
    object-fit: cover;
  }
  .profile-icon-2 {
    position: absolute;
    top: 29px;
    left: 1370px;
    width: 31px;
    height: 37px;
    object-fit: cover;
  }
  .image-4-icon {
    position: absolute;
    top: 275px;
    left: 135px;
    width: 232px;
    height: 371px;
    object-fit: cover;
  }
  .image-6-icon {
    position: absolute;
    top: 275px;
    left: calc(50% - 268px);
    width: 232px;
    height: 371px;
    object-fit: cover;
    mix-blend-mode: linear-burn;
  }
  .image-1-icon {
    position: absolute;
    top: 275px;
    left: 769px;
    width: 231px;
    height: 371px;
    object-fit: cover;
  }
  .desktop-8-item {
    position: absolute;
    top: 327px;
    left: 506px;
    border-radius: var(--br-11xl);
    background-color: var(--color-darkgray-200);
    width: 123px;
    height: 134px;
  }
  .rectangle-icon {
    position: absolute;
    top: 365px;
    left: 540px;
    border-radius: var(--br-11xl);
    width: 55px;
    height: 57px;
    object-fit: cover;
    mix-blend-mode: normal;
  }
  .desktop-8-child1 {
    position: absolute;
    top: 468px;
    left: 506px;
    border-radius: var(--br-11xl);
    background-color: var(--color-darkgray-200);
    width: 123px;
    height: 134px;
  }
  .boton-x-1-icon {
    position: absolute;
    top: 490px;
    left: 531px;
    width: 73px;
    height: 90px;
    object-fit: cover;
  }
  .desktop-8 {
    width: 1440px;
    background-color: var(--color-white);
    max-width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-29xl);
    color: var(--color-dimgray);
    font-family: var(--font-roboto-condensed);
  }
</style>
