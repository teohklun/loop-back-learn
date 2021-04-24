describe('GeocoderController', () => {
  let geoService: GeoCoderService;
  let geocode: sinon.SinonStub;

  beforeEach(givenMockGeoCoderService);

  // your unit tests

  function givenMockGeoCoderService() {
    // this creates a stub with GeocoderService API
    // in a way that allows the compiler to verify type correctness
    geoService = {geocode: sinon.stub()};

    // this creates a reference to the stubbed "geocode" method
    // because "geoService.geocode" has type from GeocoderService
    // and does not provide Sinon APIs
    geocode = geoService.geocode as sinon.SinonStub;
  }
});
