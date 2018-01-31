import { ParticleBase } from "./particle-base";

export class Particle extends ParticleBase {
  constructor(config, animation, loader) {
    super(config, animation, loader);
    this.loader = loader;

    this.xInitial = config.x;
    this.yInitial = config.y;
    this.zInitial = config.z;
    this.radiusBase = config.radius;
    this.sizeBase = config.size;
  }

  update() {
    this.mesh.position.x = Math.sin(Date.now() * 0.0005) * this.xInitial;
    this.mesh.position.y = Math.sin(Date.now() * 0.0005) * this.yInitial;
    this.mesh.position.z = Math.sin(Date.now() * 0.0005) * this.zInitial;
  }
}
