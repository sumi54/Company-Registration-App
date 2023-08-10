<template>
    <button type="button" class="btn btn-success mx-1" data-bs-toggle="modal" :data-bs-target="'#'+company.id" data-bs-whatever="@mdo">Güncelle </button>

  <div class="modal fade" :id="company.id" tabindex="-1" :aria-labelledby="company.id" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel2">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Firma Adı:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="company.name" >
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Toplam Çalışan:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="company.employers">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Sektör:</label>
            <input type="text" class="form-control" id="recipient-name"  v-model="company.sector">
          </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="update(company.id)">Update Infos</button>
      </div>
      
        </form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {ref,reactive,defineProps,toRefs} from "vue";
import {db,timestamp} from "../firebase/config";
import {addDoc, collection,doc,getDoc,setDoc,updateDoc} from 'firebase/firestore'
import { useRouter } from "vue-router";
export default{

  props :["company"],
  setup(props){
    const updateDate=ref(null)
    const dataDate=ref(null)
    const name=ref('')
    const employers=ref('')
    const sector=ref('')
    const router=useRouter()

    const update = (id) => {
      const changes={
        name:props.company.name,
        employers:props.company.employers,
        sector:props.company.sector,
        updateDate:timestamp,
      }
      const docRef = doc(db,"companys",id)
      const res = getDoc(docRef,updateDate)
      if(!res){
        addDoc(docRef,updateDate).then(()=>{
          router.push('/')
        })
      }
      else{
          updateDoc(docRef,changes).then(() => {
          router.push('/')
        })
      }

    }

    return{update,name,updateDate,employers,sector,dataDate}
    
  }

}
</script>