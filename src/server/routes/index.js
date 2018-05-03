import setApiRoutes from './api';
import setRenderRoutes from './render';

export default function registerRoutes(server) {
  setApiRoutes(server);
  setRenderRoutes(server);
}
