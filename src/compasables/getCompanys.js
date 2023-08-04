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
            
            // makale.value={...docSnap.data(),id:docSnap.id,olusturulmaTarihi:formatlanmısTarih} 
            companys.value = res.docs.map(docs => {
                const tarih=docs.data().dataDate.toDate();
                const currentDate=moment(tarih).format('LL')
                return {...docs.data(),id:docs.id,dataDate:currentDate}
            })

}
    return {companys,companysData}
}
export default getCompany