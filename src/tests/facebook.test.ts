import { cast } from '../screenplay/actors';
import { Login } from '../screenplay/tasks/Login';
import { Notificaciones } from '../screenplay/tasks/Notificaciones';
import { Scroll } from '../screenplay/interactions/Scroll';
import { VerPost } from '../screenplay/tasks/VerPost';

describe('Facebook Post Visualization', () => {
  let actors;

  beforeAll(async () => {
    actors = await cast();
  });

  it('should verify random post visualization on Facebook', async () => {
    const actor = actors.FacebookUser;

    await actor.attemptsTo(
      Login.withInvalidCredentials('usuario_incorrecto', 'contraseña_incorrecta'),
      Login.withValidCredentials('usuario_correcto', 'contraseña_correcta'),
      Notificaciones,
      Scroll,
      VerPost
    );
  });
});
