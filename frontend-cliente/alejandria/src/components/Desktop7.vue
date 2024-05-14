<template>
  <div class="desktop-11">
    <div class="barra-superior5">
      <div class="barra-superior-child7" />
      <img
        class="instagram-post-design-1-15"
        alt=""
        src="/instagram-post-design-1-1@2x.png"
        @click="onInstagramPostDesign11Click"
      />
      <img
        class="profile-icon-15"
        alt=""
        src="/profile-icon-1@2x.png"
        @click="onProfileIcon1Click"
      />
      <img
        class="shopping-cart-icon-15"
        alt=""
        src="/shopping-cart-icon-1@2x.png"
      />
      <img class="favorito-icon-15" alt="" src="/favorito-icon-1@2x.png" />
      <div class="barra-superior-child8" />
      <div class="buscar-un-libro5">Buscar un libro...</div>
      <div class="catalogo8">Catalogo</div>
      <div class="blog6">Blog</div>
      <img class="search-icon-15" alt="" src="/search-icon-1@2x.png" />
    </div>
    <div class="titulo-del-libro37">TITULO DEL LIBRO</div>
    <div class="descripcion-lorem-ipsum">
      Descripcion Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer vulputate blandit ante, volutpat maximus ipsum aliquam in. Aliquam
      fermentum mollis dignissim. Vivamus id libero in arcu elementum efficitur
      sit amet non dui. Mauris pulvinar risus scelerisque magna consectetur
      imperdiet. Curabitur lobortis, elit eget pretium vehicula, libero diam
      rhoncus nulla, non porta diam dui et neque.
    </div>
    <div class="autor-nombre-del-container">
      <span class="autor27">Autor:</span>
      <span> Nombre del autor</span>
    </div>
    <div class="categorias-terror-terror-container">
      <span class="autor27">Categorias: </span>
      <span>Terror, Terror</span>
    </div>
    <div class="div6">$30.000</div>
    <div class="informacin-adicional">Información Adicional</div>
    <div class="informacin-del-vendedor">Información del vendedor</div>
    <div class="autor28">Autor</div>
    <div class="formato">Formato</div>
    <div class="idioma">Idioma</div>
    <div class="estado1">Estado</div>
    <div class="paginas">Paginas</div>
    <div class="editorial1">Editorial</div>
    <div class="ao">Año</div>
    <div class="nombre-del-autor">Nombre del autor</div>
    <div class="formato1">Formato</div>
    <div class="idioma1">Idioma</div>
    <div class="usado">Usado</div>
    <div class="div7">123</div>
    <div class="editorial2">Editorial</div>
    <div class="div8">1922</div>
    <img class="image-24-icon2" alt="" src="/image-24@2x.png" />
    <div class="desktop-11-child" />
    <div class="agregar-al-carrito" @click="onAgregarAlCarritoClick">
      Agregar al carrito
    </div>
    <div class="desktop-11-item" />
    <div class="desktop-11-inner" />
    <div class="desktop-11-child1" />
    <div class="desktop-11-child2" />
    <div class="desktop-11-child3" />
    <div class="desktop-11-child4" />
    <div class="desktop-11-child5" />
    <div class="desktop-11-child6" />
    <img class="user-icon-1-1" alt="" src="/user-icon-1-1@2x.png" />
    <div class="nombre-del-vendedor">Nombre del vendedor</div>
    <div class="vendedor-certificado-por">
      Vendedor Certificado por alejandria
    </div>
    <div class="ventas-realizadas">10 ventas realizadas</div>
    <div class="ver-mas-publicaiones">Ver mas publicaiones</div>
    <div class="desktop-11-child7" />
    <img class="wave-haikei-13" alt="" src="/wave-haikei-1.svg" />
    <div class="siguenos3">Siguenos</div>
    <div class="correocorreocom3">correo@correo.com</div>
    <div class="frame-div">
      <div class="contacto3">Contacto</div>
      <div class="categorias-parent1">
        <div class="categorias4">Categorias</div>
        <div class="categoria12">Categoria</div>
        <div class="categoria12">Categoria</div>
        <div class="categoria12">Categoria</div>
        <div class="categoria12">Categoria</div>
      </div>
      <div class="frame-parent1">
        <div class="enlaces-parent1">
          <div class="enlaces3">Enlaces</div>
          <div class="categoria12">Ingresar</div>
          <div class="categoria12">Registrarse</div>
          <div class="categoria12">Catalogo</div>
        </div>
        <div class="categoria12">Blog</div>
      </div>
      <div class="contacto3">Metodos de pago</div>
    </div>
    <img
      class="instagram-post-design-1-23"
      alt=""
      src="/instagram-post-design-1-2@2x.png"
    />
    <img class="visa-icon-13" alt="" src="/visa-icon-1@2x.png" />
    <img class="facebook-icon-1-13" alt="" src="/facebook-icon-1-1@2x.png" />
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Desktop7",
    methods: {
      onInstagramPostDesign11Click() {
        this.$router.push("/desktop-3");
      },
      onProfileIcon1Click() {
        this.$router.push("/desktop-10");
      },
      onAgregarAlCarritoClick() {
        this.$router.push("/desktop-1");
      },
    },
  });
</script>
<style scoped>
  .barra-superior-child7 {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: -1px 6px 8.1px 2px rgba(0, 0, 0, 0.25);
    background-color: var(--color-lightgoldenrodyellow);
    width: 1440px;
    height: 48px;
  }
  .instagram-post-design-1-15 {
    position: absolute;
    top: 2px;
    left: 38px;
    width: 138px;
    height: 44px;
    object-fit: cover;
    cursor: pointer;
  }
  .profile-icon-15 {
    position: absolute;
    top: 6px;
    left: 1315px;
    width: 31px;
    height: 37px;
    object-fit: cover;
    cursor: pointer;
  }
  .shopping-cart-icon-15 {
    position: absolute;
    top: 6px;
    left: 1235px;
    width: 34px;
    height: 37px;
    object-fit: cover;
  }
  .favorito-icon-15 {
    position: absolute;
    top: 6px;
    left: 1153px;
    width: 36px;
    height: 37px;
    object-fit: cover;
  }
  .barra-superior-child8 {
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
  .buscar-un-libro5 {
    position: absolute;
    top: 10px;
    left: 757px;
    font-weight: 300;
  }
  .catalogo8 {
    position: absolute;
    top: 10px;
    left: 220px;
    font-weight: 300;
  }
  .blog6 {
    position: absolute;
    top: 10px;
    left: 327px;
    font-weight: 300;
  }
  .search-icon-15 {
    position: absolute;
    height: 66.88%;
    width: 1.81%;
    top: 25.63%;
    right: 24.24%;
    bottom: 7.5%;
    left: 73.96%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .barra-superior5 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1440px;
    height: 48px;
    text-align: left;
    font-size: var(--font-size-xl);
  }
  .titulo-del-libro37 {
    position: absolute;
    top: 234px;
    left: 573px;
    font-size: var(--font-size-29xl);
    font-weight: 500;
    text-align: left;
    display: inline-block;
    width: 483px;
    height: 36px;
  }
  .descripcion-lorem-ipsum {
    position: absolute;
    top: 320px;
    left: 573px;
    font-size: var(--font-size-5xl);
    display: flex;
    align-items: center;
    width: 715px;
  }
  .autor27 {
    font-weight: 500;
  }
  .autor-nombre-del-container {
    position: absolute;
    top: 588px;
    left: 573px;
    font-size: var(--font-size-5xl);
  }
  .categorias-terror-terror-container {
    position: absolute;
    top: 619px;
    left: 573px;
    font-size: var(--font-size-5xl);
  }
  .div6 {
    position: absolute;
    top: 670px;
    left: 573px;
    font-size: var(--font-size-21xl);
    font-weight: 600;
  }
  .informacin-adicional {
    position: absolute;
    top: 874px;
    left: 107px;
    font-size: var(--font-size-17xl);
    font-weight: 600;
  }
  .informacin-del-vendedor {
    position: absolute;
    top: 978px;
    left: 856px;
    font-size: var(--font-size-17xl);
    font-weight: 600;
  }
  .autor28 {
    position: absolute;
    top: 960px;
    left: 107px;
  }
  .formato {
    position: absolute;
    top: 1022px;
    left: 107px;
  }
  .idioma {
    position: absolute;
    top: 1084px;
    left: 107px;
  }
  .estado1 {
    position: absolute;
    top: 1146px;
    left: 107px;
  }
  .paginas {
    position: absolute;
    top: 1208px;
    left: 107px;
  }
  .editorial1 {
    position: absolute;
    top: 1270px;
    left: 107px;
  }
  .ao {
    position: absolute;
    top: 1332px;
    left: 107px;
  }
  .nombre-del-autor {
    position: absolute;
    top: 960px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .formato1 {
    position: absolute;
    top: 1022px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .idioma1 {
    position: absolute;
    top: 1084px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .usado {
    position: absolute;
    top: 1146px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .div7 {
    position: absolute;
    top: 1208px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .editorial2 {
    position: absolute;
    top: 1270px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .div8 {
    position: absolute;
    top: 1332px;
    left: 394px;
    color: var(--color-dimgray);
  }
  .image-24-icon2 {
    position: absolute;
    top: 234px;
    left: 107px;
    width: 349px;
    height: 557px;
    object-fit: cover;
  }
  .desktop-11-child {
    position: absolute;
    top: 741px;
    left: 563px;
    border-radius: var(--br-3xs);
    background-color: var(--color-dimgray);
    width: 225px;
    height: 50px;
  }
  .agregar-al-carrito {
    position: absolute;
    top: 752px;
    left: 583px;
    font-size: var(--font-size-5xl);
    font-family: var(--font-roboto);
    color: var(--color-white);
    text-align: center;
    cursor: pointer;
  }
  .desktop-11-item {
    position: absolute;
    top: 1001.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-inner {
    position: absolute;
    top: 1063.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child1 {
    position: absolute;
    top: 1125.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child2 {
    position: absolute;
    top: 1187.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child3 {
    position: absolute;
    top: 1249.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child4 {
    position: absolute;
    top: 1311.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child5 {
    position: absolute;
    top: 1373.5px;
    left: 106.5px;
    border-top: 1px solid var(--color-silver);
    box-sizing: border-box;
    width: 601px;
    height: 1px;
  }
  .desktop-11-child6 {
    position: absolute;
    top: 1054px;
    left: 856px;
    background-color: var(--color-gainsboro);
    width: 100px;
    height: 100px;
  }
  .user-icon-1-1 {
    position: absolute;
    top: 1068px;
    left: 873px;
    width: 66px;
    height: 66px;
    object-fit: cover;
  }
  .nombre-del-vendedor {
    position: absolute;
    top: 1061px;
    left: 971px;
  }
  .vendedor-certificado-por {
    position: absolute;
    top: 1117px;
    left: 971px;
    font-size: var(--font-size-5xl);
  }
  .ventas-realizadas {
    position: absolute;
    top: 1168px;
    left: 856px;
    font-size: var(--font-size-xl);
  }
  .ver-mas-publicaiones {
    position: absolute;
    top: 1168px;
    left: 1162px;
    font-size: var(--font-size-xl);
    color: #0068b4;
  }
  .desktop-11-child7 {
    position: absolute;
    top: 960px;
    left: 812px;
    border-radius: var(--br-xl);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 587px;
    height: 281px;
  }
  .wave-haikei-13 {
    position: absolute;
    top: 1126px;
    left: -496px;
    width: 2285px;
    height: 952px;
    overflow: hidden;
  }
  .siguenos3 {
    position: absolute;
    top: 90.6%;
    left: 7.08%;
    font-size: var(--font-size-21xl);
    font-weight: 600;
    text-align: center;
  }
  .correocorreocom3 {
    position: absolute;
    top: 85.91%;
    left: 7.08%;
    font-weight: 300;
    text-align: center;
  }
  .contacto3 {
    position: relative;
    font-weight: 600;
  }
  .categorias4 {
    position: relative;
    font-size: var(--font-size-21xl);
    font-weight: 600;
  }
  .categoria12 {
    position: relative;
    font-weight: 300;
  }
  .categorias-parent1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    font-size: var(--font-size-13xl);
  }
  .enlaces3 {
    position: relative;
    font-size: var(--font-size-21xl);
    font-weight: 600;
    text-align: center;
  }
  .enlaces-parent1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .frame-parent1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    text-align: left;
    font-size: var(--font-size-13xl);
  }
  .frame-div {
    position: absolute;
    top: 1669px;
    left: 102px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-134xl);
    text-align: center;
    font-size: var(--font-size-21xl);
  }
  .instagram-post-design-1-23 {
    position: absolute;
    height: 5.74%;
    width: 24.86%;
    top: 91.64%;
    right: 1.94%;
    bottom: 2.62%;
    left: 73.19%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .visa-icon-13 {
    position: absolute;
    height: 3.91%;
    width: 5.49%;
    top: 85.91%;
    right: 18.26%;
    bottom: 10.19%;
    left: 76.25%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .facebook-icon-1-13 {
    position: absolute;
    height: 2.67%;
    width: 3.75%;
    top: 94.21%;
    right: 86.04%;
    bottom: 3.12%;
    left: 10.21%;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .desktop-11 {
    width: 1440px;
    background-color: var(--color-whitesmoke);
    max-width: 100%;
    height: 2022px;
    overflow: hidden;
    text-align: justify;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
    font-family: var(--font-ibm-plex-sans);
  }
</style>
