import db from '../config/Firebase'

export const pozyskajDane = async()=>{
        try{
           // const imie = "Ante"
           // const dane = {
           //     name:imie,
           //     wiek:14
           // }
           //  db.collection('Test').doc(imie).set(dane)
           const dane = await db.collection('Test').doc("Ante").get()

           const pobraneDane = dane.data()

           alert(JSON.stringify(pobraneDane))
           


        }
        catch(e){
            alert(e)
        }

    }

    export const getUsers = async () => {
        try{
            let arrayUzytkownikow = []
            const dane = await db.collection("STUDENTS").orderBy('wiek','desc').get()
            
            dane.forEach(student => {
                arrayUzytkownikow.push(student.data())
            });
    
            return arrayUzytkownikow
    
        }catch(error){
            alert(error)
        }
    }

export const addUserToDB = async (array) => {
    try{
        const dane = db.collection("STUDENTS").doc(array.imie).set(array)

    }catch(e){
        alert(e)
    }
}