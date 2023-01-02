import { DatabaseInMemory } from './../../../test/database/repositories/database-in-memory';
import { PathFactory } from './../../../test/factories/path.factory';
import { PathService } from './path.service';
describe("Path service", () => {
  it("should be able to get a list of paths", async () => {
    const database = new DatabaseInMemory();
    const server = new PathService(database);
    for (let i = 1; i <= 10; i++) {
      const path = PathFactory.make({ id: i });
      database.paths.push(path);
    }

    const { paths } = await server.findAll();

    expect(paths).toHaveLength(database.paths.length)
    expect(paths).toBe(database.paths);
  })

  it("should be able to get a path by id", async () => {
    const database = new DatabaseInMemory();
    const server = new PathService(database);
    const path_in_database = PathFactory.make({ id: 1 });
    database.paths.push(path_in_database);

    const { path } = await server.show(1);

    expect(path).toBe(path_in_database);
  })

  it("should be able to get a path by tag", async () => {
    const database = new DatabaseInMemory();
    const server = new PathService(database);
    const path_in_database = PathFactory.make({ id: 1, tag: 'teste' });
    database.paths.push(path_in_database);

    const { path } = await server.getByTag('teste');

    expect(path).toBe(path_in_database);
  })
})  