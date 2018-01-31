import * as THREE from "three";

export class Loader {
  constructor(Animation) {
    this.dom = {
      container: document.querySelector("#root")
    };

    // Setup Three.js basic elements
    this.setupRenderer();
    this.setupScene();
    this.setupCamera();

    // Adjust canvas on change
    this.listen();
    this.onResize();

    this.animation = new Animation(this);

    this.loop();
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    this.dom.container.appendChild(this.renderer.domElement);
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = window.devicePixelRatio > 1 ? 2 : 1;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(this.dpr);
    this.renderer.setSize(this.width, this.height);
  }

  listen() {
    window.addEventListener("resize", e => this.onResize(e));
  }

  setupScene() {
    this.scene = new THREE.Scene();
  }

  setupCamera() {
    this.camera = new THREE.PerspectiveCamera(35, 0, 0.0001, 10000);

    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 150;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  update() {
    this.animation.update();
  }

  loop() {
    this.update();
    this.render();
    this.raf = window.requestAnimationFrame(() => this.loop());
  }
}
