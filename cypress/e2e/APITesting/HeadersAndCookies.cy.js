describe("API Testing",()=>{
    before(() => {
        cy.visit("http://localhost:6535");
    });
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
                Headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer' + authToken
                },
                body:{
                    
                    "bookId": 1,
                    "customerName": "AsadZuhaib"         
                }
            })
            .then((response)=>{
                expect(response.status).equal(201);
                expect(response.body.created).equal(true);   
            });
        });

        it("Fetching Orders",()=>{
            cy.request({
                method: 'GET',
                url:'https://simple-books-api.glitch.me/orders',
                Headers:{
                    'Content-Type':'application/json',
                    'Authorization':'Bearer' + authToken,
                },
                cookies:{
                    'cookieName': 'mycookie'
                },                
            })
            .then((response)=>{
                expect(response.status).equal(200);
                expect(response.body).has.length(1);   
            });
        })
    })
})