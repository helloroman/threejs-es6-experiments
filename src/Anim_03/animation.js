import * as THREE from "three";
import { Box } from "./box";

export class Animation {
  constructor(loader) {
    this.loader = loader;

    this.colors = {
      grey: 0x555555
    };

    this.cluster = [];
    this.clusterGroup = new THREE.Group();

    for (let i = 0; i < 150; i++) {
      this.color = new THREE.Color(`rgb(
        ${Math.floor(Math.random() * 5 + 100)},
        ${Math.floor(Math.random() * 5 + 100)},
        ${Math.floor(Math.random() * 55 + 100)})`);

      this.cluster.push(
        new Box(
          {
            group: this.clusterGroup,
            color: this.color,
            sizeX: Math.random() * 5,
            sizeY: Math.random() * 15,
            sizeZ: Math.random() * 5,
            x: -25 + Math.random() * 50,
            y: -25 + Math.random() * 50,
            z: -25 + Math.random() * 50
          },
          this,
          this.loader
        )
      );
    }

    this.createLights();
    this.loader.scene.add(this.clusterGroup);
  }

  createLights() {
    this.ambient = new THREE.AmbientLight(0xef4317, 0.8);
    this.pointlight = new THREE.PointLight(0xffffff, 1, 300);
    this.pointlight.position.set(60, 60, 60);
    this.pointlight2 = new THREE.PointLight(0x28aaef, 1, 300);
    this.pointlight2.position.set(-60, -60, 30);
    this.pointlight3 = new THREE.PointLight(0x28aaef, 1, 300);
    this.pointlight3.position.set(10, -10, 0);
    this.hemisphere = new THREE.HemisphereLight(0xf4d142, 0x424456, 1);

    this.loader.scene.add(
      this.ambient,
      this.hemisphere,
      this.pointlight,
      this.pointlight2,
      this.pointlight3
    );
  }

  update() {
    let i = this.cluster.length;
    while (i--) {
      this.cluster[i].update();
    }
  }
}
