import * as THREE from "three";
import { Particle } from "./particle";

export class Animation {
  constructor(loader) {
    this.loader = loader;

    this.colors = {
      white: 0xd8d0d1,
      blue: 0x34bfff,
      red: 0xff5335
    };

    // Add lights to the scene
    this.pointLightOne = null;
    this.pointLightTwo = null;
    this.lightsPivot = new THREE.Group();
    this.createLights();

    // Set basic geometry variables for particles
    this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
    this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
    this.center = new THREE.Vector3();

    // Set base for particles
    this.particles = [];
    this.particleGroup = new THREE.Object3D();
    this.particleGroup.scale.set(0.1, 0.1, 0.1);

    this.count = 800;
    this.radius = 0;
    this.radiusGrowth = 0.2;

    for (let i = 0; i < this.count; i++) {
      this.theta = THREE.Math.randFloatSpread(360);
      this.phi = THREE.Math.randFloatSpread(360);

      for (let j = 0; j < 2; j++) {
        let x = -1 + Math.random() * 2;
        let y = -1 + Math.random() * 2;
        let z = -1 + Math.random() * 2;
        let d = 1 / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
        x *= d;
        y *= d;
        z *= d;
        let size = Math.ceil(Math.random() * 10) + 1;
        let color = this.colors.white;

        this.particles.push(
          new Particle(
            {
              group: this.particleGroup,
              x: x * 370,
              y: y * 370,
              z: z * 370,
              size: size,
              radius: this.radius,
              color: color,
              opacity: 1
            },
            this,
            this.loader
          )
        );

        this.radius += this.radiusGrowth;
      }
    }

    this.loader.scene.add(this.particleGroup);
  }

  createLights() {
    this.pointLightOne = new THREE.PointLight(this.colors.blue, 1.5, 100, 2);
    this.pointLightOne.position.set(0, -810, 0);
    this.pointHelperOne = new THREE.PointLightHelper(this.pointLightOne, 5);

    this.pointLightTwo = new THREE.PointLight(this.colors.red, 1.5, 80, 2);
    this.pointLightTwo.position.set(-410, 10, 0);
    this.pointHelperTwo = new THREE.PointLightHelper(this.pointLightTwo, 5);

    this.pointLightThree = new THREE.PointLight(this.colors.blue, 2.5, 100, 2);
    this.pointLightThree.position.set(0, 0, -560);
    this.pointHelperThree = new THREE.PointLightHelper(this.pointLightThree, 5);

    this.pointLightFour = new THREE.PointLight(this.colors.white, 3, 500, 2);
    this.pointLightFour.position.set(-150, 300, 150);

    this.ambient = new THREE.AmbientLight(this.colors.white, 0.7);

    this.loader.scene.add(
      this.lightsPivot,
      this.pointLightOne,
      this.pointLightTwo,
      this.pointLightThree,
      this.pointLightFour,
      this.ambient
    );
  }

  updateLights() {
    // this.lightsPivot.add(this.pointLightOne, this.pointLightTwo);
    this.lightsPivot.rotation.y += 0.01;
    this.lightsPivot.rotation.z += 0.005;
    this.lightsPivot.rotation.x += 0.001;
    this.pointLightOne.position.y += 1.5;
    this.pointLightTwo.position.x += 1.5;
    this.pointLightThree.position.z += 1.5;

    if (this.pointLightThree.position.z > 150) {
      this.pointLightThree.position.z = -150;
    }
    if (this.pointLightOne.position.y > 150) {
      this.pointLightOne.position.y = -150;
    }
    if (this.pointLightTwo.position.x > 150) {
      this.pointLightTwo.position.x = -150;
    }
  }

  updateParticles() {
    let i = this.particles.length;
    while (i--) {
      this.particles[i].update();
    }
  }

  update() {
    this.updateLights();
    this.particleGroup.rotation.x += 0.0003;
    this.particleGroup.rotation.y += 0.0005;
    this.particleGroup.rotation.z += 0.0007;
    this.updateParticles();
  }
}
