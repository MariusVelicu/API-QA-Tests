const { spec } = require('pactum');
const Base_Url="https://reqres.in";
const id=2;

describe("Delete single user",()=>{
    it('should delete an user', async () => {
        await spec()
          .delete(Base_Url+'/api/users/'+id)
          .expectStatus(204);
      });
})