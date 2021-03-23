import { createServer, Model, RestSerializer } from "miragejs";
import { productData } from "./productData";
export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      address: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 100;
      this.resource("addresses");
    },

    seeds(server) {
      productData.map((product) => server.create("address", product));
    }
  });
}
