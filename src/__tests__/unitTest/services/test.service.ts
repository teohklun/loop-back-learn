import {Client, expect} from '@loopback/testlab';
// import * as path from 'path';
// import qs from 'qs';
// import * as url from 'url';
// import {StarterApplication} from '../../../application';
import {StarterApplication} from '../../../application';
import {setupApplication2} from './test-helper1';

describe('big test', () => {
  let app: StarterApplication;
  let client: Client;
  // let test: Test;
  // before(givenRunningApplicationWithCustomConfiguration);

  before('setupApplication', async () => {
    ({app, client} = await setupApplication2());
  });

  after(async () => {
    await app.stop();
  });

  // it('exposes a default home page', async () => {
  //   await client
  //     .get('/')
  //     .expect(200)
  //     .expect('Content-Type', /text\/html/);
  // });

  it('small test 1', async () => {
    const response = await client.get('/tests/count').expect(200);

    console.log(response.body);
    expect(response.body).to.be.an.Object();
    // expect(response.body).equal({"count": 0});
    // expect(response.body[0]).to.match(/Hello, Raymond/);
  });

  // async function givenRunningApplicationWithCustomConfiguration() {
  //   app = new StarterApplication({
  //     rest: givenHttpServerConfig(),
  //   });

  //   // Start Application
  //   await app.main();
  // }
});
