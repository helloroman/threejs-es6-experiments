import * as THREE from "three";
import { Box } from "./box";

export class Animation {
  constructor(loader) {
    this.loader = loader;

    this.colors = {
      grey: 0x555555
    };

    this.box = new Box(
      {
        color: this.colors.grey,
        sizeX: 20,
        sizeY: 20,
        sizeZ: 20,
        x: 0,
        y: 0,
        z: 0
      },
      this,
      this.loader
    );

    this.createLights();
    this.loader.scene.add(this.box.mesh);
  }

  createLights() {
    this.ambient = new THREE.AmbientLight(0xffffff, 0.9);
    this.loader.scene.add(this.ambient);
  }

  update() {
    this.box.update();
  }
}
