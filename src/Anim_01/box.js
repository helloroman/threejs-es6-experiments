import * as THREE from "three";

export class Box {
  constructor(config, animation, loader) {
    this.animation = animation;
    this.loader = loader;

    this.x = config.x;
    this.y = config.y;
    this.z = config.z;
    this.sizeX = config.sizeX;
    this.sizeY = config.sizeY;
    this.sizeZ = config.sizeZ;
    this.color = config.color;

    this.createMesh();
  }

  createMesh() {
    this.geometry = new THREE.BoxGeometry(this.sizeX, this.sizeY, this.sizeZ);

    this.material = new THREE.MeshPhongMaterial({
      color: this.color,
      flatShading: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;

    this.mesh.position.set(this.x, this.y, this.z);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}
