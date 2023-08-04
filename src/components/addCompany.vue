<template>
<button type="button" class="btn btn-primary mb-4 addButton"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Ekle<i class="bi bi-plus"></i></button> 
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Firma Adı:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Toplam Çalışan:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="employers">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Sektör:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="sector">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Kuruluş Tarihi:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="date">
          </div>
          <!-- <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div> -->
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="AddCompany">Send message</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import { ref } from 'vue';
import { db,timestamp } from '../firebase/config';
import { useRouter } from 'vue-router';
import {collection,addDoc} from 'firebase/firestore'
export default{
    setup(){
        const name=ref('')
        const employers=ref(0)
        const sector=ref('')
        const date=ref('')
        
        const router=useRouter()
        const AddCompany=async ()=>{
            const companyValue={
                name:name.value,
                employers:employers.value,
                sector:sector.value,
                date:date.value,
                dataDate:timestamp
            }
            const res=collection(db,"companys")
            await addDoc(res,companyValue).then(()=>{
                router.push('/')
            }).catch((err)=>{
                console.log(err);
            })
            
        }
        return{name,employers,sector,date,AddCompany}
    }
}
</script>
<style>

</style>
