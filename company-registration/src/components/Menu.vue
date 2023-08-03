<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary menu sticky-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Anasayfa</a>
    <router-link :to="{name:'Company'}"><a class="navbar-brand" href="#">Şirketler</a></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
 <!-- <div class="container">
   <div class="row">
    <div class="col-6">
     <div class="item">
         <h1>Anasayfa</h1>
     </div>
    </div>
    <div class="col-6">
     <div class="item">
        <h1>Şirketler</h1>
     </div>
    </div>

 </div>
</div> -->
</template>
<!-- <--!anasayfa ve şirketler -->
<script>
export default{
}
</script>
<style>
/* .container{
     background-color: #e0b3b3; 
} */
.menu{
    background-color: #e2ecf5 !important;
}

</style>
