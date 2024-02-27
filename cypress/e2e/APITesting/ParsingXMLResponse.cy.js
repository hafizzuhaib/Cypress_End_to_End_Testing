//Install xml2js
const xml2js = require('xml2js');
const parser = new xml2js.Parser({explicitArray: false});

describe("",()=>{
   
   const payLoadXML = "<Pet><id>0</id><Category><id>0</id><name>Dog</name></Category><name>Jimmy</name><photoUrls><photoUrl>string</photoUrl></photoUrls><tags><Tag><id>0</id><name>string</name></Tag></tags><status>available</status> </Pet>"
   let petID = null;
    before("Creating PET",()=>{
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            body: payLoadXML,
            headers:{
                'Content-Type':'Application/xml',
                'accept':'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
                petID = result.Pet.id;
            })
        })
    })
    it("Fetching Pet Data-parsing XML Response ",()=>{
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/"+petID,
            headers:{
                'accept':'application/xml'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            parser.parseString(response.body,(err,result)=>{
               expect(result.Pet.id).to.eq(petID)
               expect(result.Pet.name).to.eq("Jimmy")

            })
        })
    })
})
