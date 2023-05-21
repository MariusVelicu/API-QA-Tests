const { spec } = require('pactum');
const Base_Url="https://reqres.in";
const bodyWithPassword=
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

const bodyWithoutPassword=
{
    "email": "eve.holt@reqres.in"
}
const token="QpwL5tke4Pnpja7X4";
const badMessage="Missing password";

describe("Login test suits",()=>{
    it('should register an user', async () => {
        await spec()
          .post(Base_Url+'/api/register')
          .withBody(bodyWithPassword)
          .expectStatus(200)
          .expectBodyContains(token);
      });

      it('should recive an error when we try to login', async () => {
        await spec()
          .post(Base_Url+'/api/register')
          .withBody(bodyWithoutPassword)
          .expectStatus(400)
          .expectBodyContains(badMessage);
      });
})
