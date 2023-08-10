import {ref} from "vue";
import {db} from "../firebase/config";
import {getDocs,query,collection,orderBy,doc} from 'firebase/firestore'
import moment from 'moment'
const getCompany = () => {
    const companys = ref([])
    const companysData = async () => {

            const res =await getDocs(query(
                collection(db, "companys"),
                orderBy("dataDate", "desc")
            ))
            
            companys.value = res.docs.map(doc => {
                console.log(doc.data());

                //Oluşturulma tarihi düzenleme

                const createdTimestamp=doc.data().dataDate.toDate();
                const created_at=moment(createdTimestamp).format('DD/MM/YYYY HH:mm');

                //Güncellenme tarihi düzenleme
                let updated_at = "";
                if(doc.data().hasOwnProperty("updateDate")){
                    const updatedTimestamp=doc.data().updateDate.toDate();
                    updated_at=moment(updatedTimestamp).format('DD/MM/YYYY HH:mm')
                }
                
            
                return {...doc.data(),id:doc.id,dataDate:created_at,updateDate:updated_at}

            })

          

}
    return {companys,companysData}
}
export default getCompany