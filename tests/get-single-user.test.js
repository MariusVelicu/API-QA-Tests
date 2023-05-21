const { spec } = require('pactum');
const Base_Url="https://reqres.in";
const id=2;
const badId=89898989;
describe("Get single user test suites",()=>{
    it('should get an user', async () => {
        await spec()
          .get(Base_Url+'/api/users/'+id)
          .expectStatus(200)
          .expectBodyContains("Janet");
      });

      it('should recive an error because the user not found', async () => {
        await spec()
          .get(Base_Url+'/api/users/'+badId)
          .expectStatus(404);
      });
})