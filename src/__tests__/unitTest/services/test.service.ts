
// describe('createTodo', () => {
//   it('creates a Todo', async () => {
//     const create = todoRepo.stubs.create;
//     create.resolves(aTodoWithId);
//     const result = await controller.createTodo(aTodo);
//     expect(result).to.eql(aTodoWithId);
//     sinon.assert.calledWith(create, aTodo);
//   });

//   it('resolves remindAtAddress to a geocode', async () => {
//     const create = todoRepo.stubs.create;
//     geocode.resolves([aLocation.geopoint]);

//     const input = givenTodo({remindAtAddress: aLocation.address});

//     const expected = new Todo(input);
//     Object.assign(expected, {
//       remindAtAddress: aLocation.address,
//       remindAtGeo: aLocation.geostring,
//     });
//     create.resolves(expected);

//     const result = await controller.createTodo(input);

//     expect(result).to.eql(expected);
//     sinon.assert.calledWith(create, input);
//   });
// });
