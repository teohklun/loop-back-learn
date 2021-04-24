// eslint-disable-next-line no-undef
db.createUser({
  user: 'tester',
  pwd: 'tester',
  roles: [
    {
      role: 'dbOwner',
      db: 'test-database',
    },
  ],
});
// eslint-disable-next-line no-undef
db.Testing.insert([
  {
    _id: 'aaa',
    someText: "adasdasd"
  },
  {
    _id: 'bbb',
    someText: "adasdasd"
  },
  {
    _id: 'ccc',
    someText: "adasdasd"
  },
]);
