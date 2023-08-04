<template>
<div class="row company">
 <AddButton></AddButton>
 <table class="table table-hover">
    <thead class="thead-active">
        <tr>
        <th scope="col">#</th>
        <th scope="col">Şirket Adı</th>
        <th scope="col">Toplam Çalışan</th>
        <th scope="col">Sektör</th>
        <th scope="col">Kuruluş Tarihi</th>
        <th scope="col">Oluşturulma Tarihi</th>
        <th scope="col">Güncellenme Tarihi</th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody class="text-center">
        <tr>
        <th scope="row">1</th>
        <td :companys="companys.name"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button type="button" class="btn btn-success mx-1">Güncelle </button>
            <button type="button" class="btn btn-danger">Sil</button>

        </td>
        </tr>
        
    </tbody>
 </table>
</div>
</template>
<script>
import getCompanys from '../compasables/getCompanys.js'
import AddButton from '../components/addCompany.vue'
export default{
    components:{
        AddButton
    },
    setup(){
        const {companys,companysData}=getCompanys()
        companysData()
        console.log(companys);
        return{companys}
        
    }
}
</script>
<style>
.company{
    margin: 9em 10em ;
}
.thead-active{
    background-color: #e2ecf5;
}
.addButton{
    width: 9%;
    margin-left: 90%;
}
</style>