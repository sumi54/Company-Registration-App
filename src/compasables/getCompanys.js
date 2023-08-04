import {ref} from "vue";
import {db} from "../firebase/config";
import {getDocs,query,collection,orderBy} from 'firebase/firestore'

const getCompany = () => {
    const hatalar = ref(null)
    const companys = ref([])
    const companysData = async () => {
    try {
        
            const res = getDocs(query(
                collection(db, "company"),
                orderBy("dataKurulus", "desc")
            ))
            companys.value = res.docs.map(docs => {
                return {...docs.data(),id: docs.id}
            })
        
    }catch{
        hatalar.value=hatalar.message
    }
}
    return {companys,hatalar,companysData}
}
export default getCompany