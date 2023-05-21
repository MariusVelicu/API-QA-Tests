const { spec } = require('pactum');
const Base_Url="https://reqres.in";

describe("Get users list",()=>{
    it('should get users list', async () => {
        await spec()
          .get(Base_Url+'/api/users?page=2')
          .expectStatus(200);
      });
})
