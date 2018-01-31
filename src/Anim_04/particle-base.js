import * as THREE from "three";

export class ParticleBase {
  constructor(config, animation, loader) {
    this.animation = animation;
    this.loader = loader;

    this.group = config.group;
    this.x = config.x;
    this.y = config.y;
    this.z = config.z;
    this.size = config.size;
    this.color = config.color;
    this.opacity = config.opacity;

    this.createMesh();
  }

  createMesh() {
    this.geometry = this.animation.sphereGeometry;
    this.random = Math.ceil(Math.random() * 30);

    this.material = new THREE.MeshPhongMaterial({
      color: this.color,
      transparent: true,
      opacity: this.opacity,
      flatShading: true,
      precision: "lowp"
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;

    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.scale.set(this.size, this.size, this.size);
    this.group.add(this.mesh);
  }
}
