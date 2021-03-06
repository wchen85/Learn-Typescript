import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not Permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  console.log('you are here!');
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>You are logged in</div>
    <a href="/logout">Logout</a>
    `);
  } else {
    res.send(`
    <div>You are not logged in</div>
    <a href="/login">Login</a>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, login user');
});

export { router };
