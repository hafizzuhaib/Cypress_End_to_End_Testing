describe("API Testing",()=>{
    let authToken=null;
    before("Creating Access Token",()=>{
        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            Headers:{'Content-Type':'application/json'},
            body:{
                clientName: Math.random().toString(5).substring(2),
                clientEmail: Math.random().toString(5).substring(2)+"gmail.com"
        }
        })
        .then((response)=>{
                authToken=response.body.accessToken;
        })


        before("Creating Access Token",()=>{
            cy.request({
                method: 'POST',
                url:'https://simple-books-api.glitch.me/orders',
                Headers:{'Content-Type':'application/json'},
                body:{
                    clientName: Math.random().toString(5).substring(2),
                    clientEmail: Math.random().toString(5).substring(2)+"gmail.com"
            }
            })
            .then((response)=>{
                    authToken=response.body.accessToken;
            })
    })











})