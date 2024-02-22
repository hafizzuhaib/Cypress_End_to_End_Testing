describe("API Testing",()=>{
    it("Appraoch - One Hard Coded json object",()=>{
       
        const requestBody={
            tourist_name: "zuhaib",
            tourist_email: "ali12345@gmail.com",
            tourist_location: "Lahore"
        }
    cy.request({
            method : 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody


    })
    .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("zuhaib")
            expect(response.body.tourist_email).to.eq("ali12345@gmail.com")
            expect(response.body.tourist_location).to.eq("Lahore")
    })
    })

    it("Appraoch - Two Dynamically Generating json object",()=>{
       
        const requestBody={
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"gmail.com",
            tourist_location: "Lahore"
        }
    cy.request({
            method : 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody


    })
    .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })

    it.only("Appraoch - Three Fixture Generating json object",()=>{
       
        cy.fixture("tourist").then((mydata)=>{
        const requestBody = mydata;
        
        cy.request({
            method : 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody

        })
    .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            expect(response.body).has.property("tourist_email",requestBody.tourist_email)
            expect(response.body).to.have.property("tourist_email",requestBody.tourist_email)
        })

    })
   
    })



})