import * as THREE from "three";

export class Box {
  constructor(config, animation, loader) {
    this.animation = animation;
    this.loader = loader;

    this.counter = 0;
    this.incoming = true;

    this.group = config.group;
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
    this.group.add(this.mesh);
  }

  update() {
    if (this.counter >= 100) {
      this.incoming = false;
    }

    if (this.counter <= 0) {
      this.incoming = true;
    }

    if (this.incoming) {
      this.counter += 0.5;
      this.mesh.position.z += 0.3;
    } else {
      this.counter -= 0.5;
      this.mesh.position.z -= 0.3;
    }

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }
}
