export class Foo {
  @attr title;

  @belongsTo('user') author;
  @hasMany('comments') comments;

  @tracked uninitialized;
  @tracked initialized = 2;

  @service myService;
  @service('named-service') namedService;
}
