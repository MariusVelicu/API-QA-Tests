const { spec } = require('pactum');
const Base_Url="https://reqres.in";

describe("Create user",()=>{
    const body=
{
    "email":"marius@mail.com",
    "firstName": "Marius",
    "lastName": "Velicu"
};
    it('should create an user', async () => {
        await spec()
          .post(Base_Url+'/api/users')
          .withBody(body)
          .expectStatus(201)
          .expectBodyContains("Marius");
      });
})