// import {ref} from "vue";
// import {db} from "../firebase/config";
// import {getDoc,doc} from 'firebase/firestore'
// const getCompanyById=(id)=>{
//     const cmp=ref(null)
//     const setId=async ()=>{
//         const docRef=doc(db,"companys",id)
//         const res=await getDoc(docRef)
//         if(!res.exists()){
//             console.log("Şirket bulunamadı");
//         }
//         cmp.value={...res.data(),id:res.id}
//     }
//     return{cmp,setId}
// }
// export default getCompanyById