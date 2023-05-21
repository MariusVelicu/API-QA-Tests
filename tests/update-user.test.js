const { spec } = require('pactum');
const Base_Url="https://reqres.in";
const id=3;
describe("Update user",()=>{
    const body=
{
    "email":"marius@mail.com",
    "firstName": "Marius",
    "lastName": "Velicu"
};
    it('should update an user', async () => {
        await spec()
          .put(Base_Url+'/api/users/'+id)
          .withBody(body)
          .expectStatus(200)
          .expectBodyContains("Marius");
      });
})