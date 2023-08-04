import {ref} from "vue";
import {db} from "../firebase/config";
import {getDoc,query,collection,orderBy} from 'firebase/firestore'

const getCompany = () => {
    const hatalar = ref(null)
    const companys = ref([])
    const companysData = async () => {
    try {
        
            const res =collection(db,"companys")
            await getDoc(res)
              let get=  companys.value = res.docs.map(docs => {
                return {...docs.data(),id: docs.id}})
                console.log(get);

        
    }catch(error){
        hatalar.value=error.message
    }
}
    return {companys,hatalar,companysData}
}
export default getCompany