import * as THREE from "three";

export class Animation {
  constructor(loader) {
    this.loader = loader;

    this.createBox();
  }

  createBox() {
    this.geometry = new THREE.BoxGeometry(10, 10, 10);
    this.material = new THREE.MeshPhongMaterial({
      color: 0x444444,
      flatShading: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(0, 0, 0);
    this.loader.scene.add(this.mesh);
  }

  update() {}
}
