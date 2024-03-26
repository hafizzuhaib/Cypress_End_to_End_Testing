describe("Bearer Authentication",()=>{
   
   const tokenAuth = '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';
    it("Bearer Authentication",()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers:{
                Authorization: 'Bearer '+tokenAuth

            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
            
    })
    
    it("API Key Auth",()=>{
        cy.request({
            method: 'GET',
            url:'https://api.openweathermap.org/data/2.5/weather?q=London',
            qs:{
                appid: 'f0d779ee2f818c1ffdc0662da0fb58e8'
            }
        })
        .then((response)=>{
                expect(response.status).to.eq(200)
        }) 
    })
})