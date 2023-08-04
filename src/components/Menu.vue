<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top menu">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name:'hello'}" class="navbar-brand">Anasayfa</router-link>
                    <router-link :to="{name:'Company'}" class="navbar-brand">Şirketler</router-link>
                </div>
            </div>

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
    export default {}
</script>
<style>
    /* .container{
     background-color: #e0b3b3; 
} */
    .menu {
        background-color: #e2ecf5 !important;
    }
</style>