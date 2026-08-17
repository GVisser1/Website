import { beforeAll, afterEach, afterAll } from "vite-plus/test";
import { server } from "./src/__tests__/testUtil";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
