


export const gei = async () => {
    let url = "https://jsonplaceholder.typicode.com/users"
    
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            
            const data = await response.json();

            console.log(data);
           
        } else {

           console.log("is bad")

        }

    } catch (error) {

        console.log(error);

    }

};





