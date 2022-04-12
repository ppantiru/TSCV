const { createApolloServer } = require('../server');
const request = require('supertest');

jest.setTimeout(20000)



  const queryData = {

    query: `query GetUser($username: String!) {
                getUser(username: $username) {
                    email
                }
            }`,
  
    variables: { username: 'hallo' },
  
  };

  describe('e2e demo', () => {

    let server
    let url = "http://localhost:5000/graphql"
  
  
    // before the tests we will spin up a new Apollo Server
  
    beforeAll(async () => {
  
      // Note we must wrap our object destructuring in parentheses because we already declared these variables
  
      // We pass in the port as 0 to let the server pick its own ephemeral port for testing
  
      server = await createApolloServer({ port: 0 });
  
    });
  
  
    // after the tests we will stop our server
  
    afterAll(async () => {
  
      await server?.close();
  
    });
  
  
    it('getuser', async () => {
  
      // send our request to the url of the test server
  
      const response = await request(url).post('/').send(queryData);
  
      expect(response.errors).toBeUndefined();
  
      expect(response.body?.data?.getUser?.email).toBe('fake@mail.com');
  
    });
  
  });