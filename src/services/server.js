// src/services/server.js

import { createServer, Model } from 'miragejs';

export default function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      skill: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/skills', (schema) => {
        return schema.skills.all();
      });

      this.post('/skills', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.skills.create(attrs);
      });
    },
  });

  return server;
}
