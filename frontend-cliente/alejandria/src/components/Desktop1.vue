<template>
  <div class="desktop-10">
    <div class="carrito-de-compras">Carrito de compras</div>
    <img class="desktop-10-child" alt="" />
    <div class="desktop-10-item" />
    <b class="realizar-pago-total">Realizar Pago (Total: $80.000)</b>
    <div class="barra-superior">
      <div class="barra-superior-child" />
      <img
        class="instagram-post-design-1-1"
        alt=""
        src="/instagram-post-design-1-1@2x.png"
      />
      <img
        class="profile-icon-1"
        alt=""
        src="/profile-icon-1@2x.png"
        @click="onProfileIcon1Click"
      />
      <img
        class="shopping-cart-icon-1"
        alt=""
        src="/shopping-cart-icon-1@2x.png"
      />
      <img class="favorito-icon-1" alt="" src="/favorito-icon-1@2x.png" />
      <div class="barra-superior-item" />
      <div class="buscar-un-libro">Buscar un libro...</div>
      <div class="catalogo">Catalogo</div>
      <div class="blog">Blog</div>
      <img class="search-icon-1" alt="" src="/search-icon-1@2x.png" />
    </div>
    <div class="item">Item</div>
    <div class="cantidad">Cantidad</div>
    <div class="precio">Precio</div>
    <div class="rectangle-parent">
      <div class="group-child" />
      <div class="div">1</div>
      <div class="div1">$40.000</div>
      <div class="el-color-perdido-del-bosque-parent">
        <div class="el-color-perdido">El color perdido del bosque</div>
        <div class="autor-joe-chamber-container">
          <p class="autor-joe-chamber">Autor: Joe Chamber</p>
          <p class="autor-joe-chamber">Editorial: My first books</p>
        </div>
        <img class="image-24-icon" alt="" src="/image-24@2x.png" />
      </div>
      <img class="eliminar-icon-1" alt="" src="/eliminar-icon-1@2x.png" />
    </div>
    <div class="rectangle-group">
      <div class="group-child" />
      <div class="div">1</div>
      <div class="div1">$40.000</div>
      <div class="el-color-perdido-del-bosque-parent">
        <div class="el-color-perdido">El color perdido del bosque</div>
        <div class="autor-joe-chamber-container">
          <p class="autor-joe-chamber">Autor: Joe Chamber</p>
          <p class="autor-joe-chamber">Editorial: My first books</p>
        </div>
        <img class="image-24-icon" alt="" src="/image-24@2x.png" />
      </div>
      <img class="eliminar-icon-1" alt="" src="/eliminar-icon-1@2x.png" />
    </div>
    <div class="group-parent">
      <div class="rectangle-container">
        <div class="group-inner" />
        <img class="polygon-icon" alt="" src="/polygon-1.svg" />
      </div>
      <div class="configuracin">Configuración</div>
      <div class="mis-libros">Mis Libros</div>
      <div class="cerrar-sesin">Cerrar Sesión</div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Desktop1",
    methods: {
      onProfileIcon1Click() {
        this.$router.push("/desktop-4");
      },
    },
  });
</script>
<style scoped>
  .carrito-de-compras {
    position: absolute;
    top: 153px;
    left: 97px;
    font-size: var(--font-size-29xl);
    font-weight: 600;
  }
  .desktop-10-child {
    position: absolute;
    top: 286px;
    left: 97px;
    width: 1256px;
    height: 2px;
    object-fit: contain;
  }
  .desktop-10-item {
    position: absolute;
    top: 140px;
    left: 1003px;
    border-radius: var(--br-8xs);
    background-color: var(--color-cadetblue);
    width: 336px;
    height: 57px;
  }
  .realizar-pago-total {
    position: absolute;
    top: 154px;
    left: 1028px;
    font-size: var(--font-size-xl);
    text-align: center;
  }
  .barra-superior-child {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: -1px 6px 8.1px 2px rgba(0, 0, 0, 0.25);
    background-color: var(--color-lightgoldenrodyellow);
    width: 1440px;
    height: 48px;
  }
  .instagram-post-design-1-1 {
    position: absolute;
    top: 2px;
    left: 38px;
    width: 138px;
    height: 44px;
    object-fit: cover;
  }
  .profile-icon-1 {
    position: absolute;
    top: 6px;
    left: 1315px;
    width: 31px;
    height: 37px;
    object-fit: cover;
    cursor: pointer;
  }
  .shopping-cart-icon-1 {
    position: absolute;
    top: 6px;
    left: 1235px;
    width: 34px;
    height: 37px;
    object-fit: cover;
  }
  .favorito-icon-1 {
    position: absolute;
    top: 6px;
    left: 1153px;
    width: 36px;
    height: 37px;
    object-fit: cover;
  }
  .barra-superior-item {
    position: absolute;
    top: 6px;
    left: 745px;
    box-shadow: 1px 1px 4.9px 3px rgba(0, 0, 0, 0.25);
    border-radius: var(--br-11xl);
    background-color: var(--color-antiquewhite-100);
    border: 2px solid var(--color-dimgray);
    box-sizing: border-box;
    width: 361px;
    height: 35px;
  }
  .buscar-un-libro {
    position: absolute;
    top: 10px;
    left: 757px;
    font-weight: 300;
  }
  .catalogo {
    position: absolute;
    top: 10px;
    left: 220px;
    font-weight: 300;
  }
  .blog {
    position: absolute;
    top: 10px;
    left: 327px;
    font-weight: 300;
  }
  .search-icon-1 {
    position: absolute;
    height: 52.08%;
    width: 1.74%;
    top: 22.92%;
    right: 24.65%;
    bottom: 25%;
    left: 73.61%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .barra-superior {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 48px;
    font-size: var(--font-size-xl);
  }
  .item {
    position: absolute;
    top: 247px;
    left: 125px;
    font-weight: 500;
  }
  .cantidad {
    position: absolute;
    top: 247px;
    left: 961px;
    font-weight: 500;
  }
  .precio {
    position: absolute;
    top: 247px;
    left: 1159px;
    font-weight: 500;
  }
  .group-child {
    position: absolute;
    top: 15px;
    left: 860px;
    border-radius: var(--br-8xs);
    background-color: var(--color-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 77px;
    height: 38px;
  }
  .div {
    position: absolute;
    top: 19px;
    left: 906px;
    font-weight: 300;
  }
  .div1 {
    position: absolute;
    top: 19px;
    left: 1024px;
    font-weight: 500;
  }
  .el-color-perdido {
    position: absolute;
    top: 16px;
    left: 240px;
    font-weight: 500;
    display: inline-block;
    width: 483px;
    height: 36px;
  }
  .autor-joe-chamber {
    margin: 0;
  }
  .autor-joe-chamber-container {
    position: absolute;
    top: 78px;
    left: 240px;
    font-size: var(--font-size-5xl);
  }
  .image-24-icon {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 190px;
    height: 303px;
    object-fit: cover;
  }
  .el-color-perdido-del-bosque-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 723px;
    height: 303px;
    font-size: var(--font-size-17xl);
  }
  .eliminar-icon-1 {
    position: absolute;
    top: 17px;
    left: 1161px;
    width: 35px;
    height: 35px;
    object-fit: cover;
  }
  .rectangle-parent {
    position: absolute;
    top: 321px;
    left: 125px;
    width: 1196px;
    height: 303px;
  }
  .rectangle-group {
    position: absolute;
    top: 667px;
    left: 125px;
    width: 1196px;
    height: 303px;
  }
  .group-inner {
    position: absolute;
    top: 16px;
    left: 0px;
    box-shadow: -1px 4px 3px rgba(0, 0, 0, 0.25);
    border-radius: var(--br-3xs);
    background-color: var(--color-lightgoldenrodyellow);
    width: 269px;
    height: 213px;
  }
  .polygon-icon {
    position: absolute;
    top: 0px;
    left: 144px;
    width: 67px;
    height: 54px;
  }
  .rectangle-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 269px;
    height: 229px;
  }
  .configuracin {
    position: absolute;
    top: 45px;
    left: 41px;
  }
  .mis-libros {
    position: absolute;
    top: 84px;
    left: 41px;
  }
  .cerrar-sesin {
    position: absolute;
    top: 126px;
    left: 41px;
  }
  .group-parent {
    position: absolute;
    top: 43px;
    left: 1153px;
    width: 269px;
    height: 229px;
    font-size: var(--font-size-xl);
  }
  .desktop-10 {
    width: 1440px;
    background-color: var(--color-whitesmoke);
    max-width: 100%;
    height: 1024px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-black);
    font-family: var(--font-ibm-plex-sans);
  }
</style>
