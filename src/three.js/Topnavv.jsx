import * as THREE from "three";
import { Scene } from "three/webgpu";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import galaxy from './assets/galaxy.jpg';
import { sheen } from "three/tsl";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight);
const canva = document.querySelector("canvas.planets");
const renderer = new THREE.WebGLRenderer({canvas: canva});
renderer.setSize(window.innerWidth, window.innerHeight);
const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

  renderer.setPixelRatio(maxPixelRatio);

camera.position.setZ(30)

renderer.render(scene, camera)

//shapes and design
const planets = new THREE.SphereGeometry(15, 24,24); 
const material = new THREE.MeshStandardMaterial({color : '#ffffff'})
const planetsMesh = new THREE.Mesh(planets, material)
scene.add(planetsMesh)
scene.add(planetsMesh)
scene.add(planetsMesh)


//stars shapes and design
function start(){
  const shapestart = new THREE.SphereGeometry(0.25,24,24);
  const startmaterial = new THREE.MeshStandardMaterial({color: '#ffffff'})
  const star = new THREE.Mesh(shapestart, startmaterial)
// star position
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));

  star.position.set(x,y,z)
  scene.add(star)
}

Array(100).fill().forEach(start)


//image loader
const spacebackground = new THREE.TextureLoader().load({});


scene.background = spacebackground;

// lights
const spotlight = new THREE.PointLight('white', 10);
spotlight.position.set(15,15,15)
const ambientLight = new THREE.AmbientLight(0xfffff, 10);
scene.add(spotlight, ambientLight)
const lightshow = new THREE.PointLightHelper(spotlight)
scene.add(lightshow)


//controlls
const controls = new OrbitControls(camera, renderer.domElement)





function showLoop(){
  planetsMesh.rotation.z += 0.01;
  requestAnimationFrame(showLoop);
  renderer.render(scene, camera);
  controls.update();
}
showLoop();

function Topnavv(){}
export default Topnavv