import { PathFactory } from './../../../../test/factories/path.factory';
describe("Url entity", () => {
    it("should be able to create a url", () => {
        const path = PathFactory.make({});

        expect(path).toBeTruthy();
    })
})