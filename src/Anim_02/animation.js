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
    this.pointlight = new THREE.PointLight(0xffffff, 1, 300);
    this.pointlight.position.set(60, 60, 60);
    this.hemisphere = new THREE.HemisphereLight(0xf4d142, 0x424456, 1);

    this.loader.scene.add(this.ambient, this.hemisphere, this.pointlight);
  }

  update() {
    this.box.update();
  }
}
