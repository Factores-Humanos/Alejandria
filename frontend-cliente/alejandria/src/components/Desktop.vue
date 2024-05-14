<template>
  <div class="desktop-5">
    <img class="desktop-5-child" alt="" src="/rectangle-1@2x.png" />
    <div class="bienvenido-de-nuevo">Bienvenido de Nuevo</div>
    <div class="desktop-5-item" />
    <div class="no-tengo-una">No tengo una cuenta</div>
    <div class="ingresa-con-tus">Ingresa con tus datos personales</div>
    <img class="removebg-logo1-1" alt="" src="/removebg-logo1-1@2x.png" />
    <div class="desktop-5-inner" />
    <div class="rectangle-div" />
    <div class="correo-electronico">Correo Electronico</div>
    <div class="contrasea">Contraseña</div>
    <div class="o-ingresa-con">O ingresa con tus datos personales</div>
    <div class="desktop-5-child1" />
    <div class="ingresar" @click="onIngresarTextClick">Ingresar</div>
    <div class="ingresa-a-alejandria">Ingresa a Alejandria</div>
    <img class="facebook-1-icon" alt="" src="/facebook-1@2x.png" />
    <img class="google-icon-1-1" alt="" src="/google-icon-1-1@2x.png" />
    <div class="ellipse-div" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Desktop",
    methods: {
      onIngresarTextClick() {
        this.$router.push("/desktop-1");
      },
    },
  });
</script>
<style scoped>
  .desktop-5-child {
    position: absolute;
    top: 0px;
    left: 900px;
    width: 540px;
    height: 1024px;
    object-fit: cover;
  }
  .bienvenido-de-nuevo {
    position: absolute;
    top: 395px;
    left: 946px;
    font-size: var(--font-size-29xl);
  }
  .desktop-5-item {
    position: absolute;
    top: 570px;
    left: 1020px;
    border-radius: var(--br-11xl);
    background-color: var(--color-gray-300);
    border: 2px solid var(--color-black);
    box-sizing: border-box;
    width: 292px;
    height: 59px;
  }
  .no-tengo-una {
    position: absolute;
    top: 588px;
    left: 1077px;
    font-size: var(--font-size-xl);
  }
  .ingresa-con-tus {
    position: absolute;
    top: 482px;
    left: 992px;
  }
  .removebg-logo1-1 {
    position: absolute;
    top: 13px;
    left: 1330px;
    width: 96px;
    height: 80px;
    object-fit: cover;
  }
  .desktop-5-inner {
    position: absolute;
    top: 527px;
    left: 195px;
    background-color: var(--color-linen);
    width: 525px;
    height: 62px;
  }
  .rectangle-div {
    position: absolute;
    top: 625px;
    left: 195px;
    background-color: var(--color-linen);
    width: 525px;
    height: 62px;
  }
  .correo-electronico {
    position: absolute;
    top: 543px;
    left: 223px;
    color: var(--color-gray-200);
    text-align: left;
    display: inline-block;
    width: 212px;
    height: 30px;
  }
  .contrasea {
    position: absolute;
    top: 641px;
    left: 223px;
    color: var(--color-gray-200);
    text-align: left;
    display: inline-block;
    width: 212px;
    height: 30px;
  }
  .o-ingresa-con {
    position: absolute;
    top: 454px;
    left: 302px;
    font-size: var(--font-size-xl);
    font-weight: 300;
  }
  .desktop-5-child1 {
    position: absolute;
    top: 763px;
    left: 345px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    width: 225px;
    height: 50px;
  }
  .ingresar {
    position: absolute;
    top: 774px;
    left: 413px;
    color: var(--color-white);
    cursor: pointer;
  }
  .ingresa-a-alejandria {
    position: absolute;
    top: 212px;
    left: 243px;
    font-size: var(--font-size-29xl);
    font-weight: 600;
    color: var(--color-cadetblue);
  }
  .facebook-1-icon {
    position: absolute;
    top: 318px;
    left: 386px;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
  .google-icon-1-1 {
    position: absolute;
    top: 334px;
    left: 482px;
    width: 29px;
    height: 29px;
    object-fit: cover;
  }
  .ellipse-div {
    position: absolute;
    top: 318px;
    left: 467px;
    border-radius: 50%;
    border: 3px solid var(--color-cadetblue);
    box-sizing: border-box;
    width: 60px;
    height: 60px;
  }
  .desktop-5 {
    width: 1440px;
    background-color: var(--color-white);
    max-width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-roboto);
  }
</style>
