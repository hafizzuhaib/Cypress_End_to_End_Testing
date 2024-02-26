describe("Parsing JSON Response",()=>{
    it("Parsing Simple JSON Response",()=>{
        const titleDes ="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        const menCategory = "men's clothing"
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            
        }) 
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].title).to.eq(titleDes)
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.rate).to.eq(3.9)
            expect(response.body[0].category).to.eq(menCategory)


            //Other Index from the response
            expect(response.status).to.eq(200)
            expect(response.body[11].id).to.eq(12)
            expect(response.body[11].title).to.eq("WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive")
            expect(response.body[11].price).to.eq(114)
            expect(response.body[11].rating.rate).to.eq(4.8)
            expect(response.body[11].rating.count).to.eq(400)
            expect(response.body[11].category).to.eq("electronics")
        })
    })
    it("Parsing Simple JSON Response",()=>{
        let totalPrice = 0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{limit:5}
        }) 
        .then((response)=>{
            expect(response.status).to.equal(200)
            response.body.forEach(element => {
                totalPrice=totalPrice+element.price;
            });
            expect(totalPrice).to.equal(899.23)
        })
    })
})