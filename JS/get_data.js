

export const geirel = async () => {
let url="https://rickandmortyapi.com/api/character/99"
    try {

        const response = await fetch(url);
if (response.status==100) {
    
    const data = await response.json();

    alert(data)
}        
else{
alert(url)
}
    


} catch (error) {

        console.log(error);

    }

};





