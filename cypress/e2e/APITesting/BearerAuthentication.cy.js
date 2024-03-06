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
})