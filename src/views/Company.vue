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
    <tbody class="text-center" >
        <tr v-for="company in companys" :key="company.id" >
            <th scope="row">1</th>
            <td>{{ company.name }}</td>
            <td>{{ company.employers }}</td>
            <td>{{ company.sector }}</td>
            <td>{{ company.date }}</td>
            <td>{{ company.dataDate }}</td>
            <td></td>
            <td>
                <UpdateButton :company="company" ></UpdateButton>
                <button type="button" class="btn btn-danger" @click="deleteCompany(company.id)">Sil</button>

            </td>
        </tr>
        
    </tbody>
 </table>
 
</div>
</template>
<script>
import getCompanys from '../compasables/getCompanys.js'
import AddButton from '../components/addCompany.vue'
import UpdateButton from '../components/updateButton.vue'
import {collection,doc,getDoc,setDoc,deleteDoc} from 'firebase/firestore'
import {db} from "../firebase/config";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
export default{
    components:{
        AddButton,
        UpdateButton
    },
    setup(){

        const router=useRouter()
        const companyId=ref(null)
        const {companys,companysData}=getCompanys(companyId)
        companysData()
        const deleteCompany= async (id)=>{
            const docRef=doc(db,"companys",id)
            await deleteDoc(docRef).then(()=>{
                router.push('/')
            })
       }
       
        return{companys,deleteCompany,companyId,companyId}
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