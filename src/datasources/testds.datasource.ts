import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'testds',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27050,
  user: 'tester',
  password: 'tester',
  database: 'test-database',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TestdsDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'testds';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.testds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
