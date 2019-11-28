export class Settings {
  readonly defaultUrl: string = window.location.origin;
  readonly dockerSocket = 'unix:///var/run/docker.sock';
}

