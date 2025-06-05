import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { fog } from "three/tsl";
function Threejs() {
  
}
  const scene = new THREE.Scene();

  // const cubeGeo = new THREE.SphereGeometry(1,32, 16)
  const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  const Roundcorner = new RoundedBoxGeometry(1,1,1);


  //design
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const RoundMaterial = new THREE.MeshBasicMaterial({color: "white"});
  const material = new THREE.MeshLambertMaterial()
  material.color = new THREE.Color('red')
  

  //initialize design
  const CubeMesh = new THREE.Mesh(cubeGeo, material);
  const RoundMesh = new THREE.Mesh(Roundcorner, material);
  // const fog = new THREE.Fog('white', 5, 10);


  //  CubeMesh.position.x = -1;
  //  CubeMesh.position.y = -1

  //  const ayokona = new THREE.Mesh(cubeGeo, cubeMaterial)
  // ayokona.position.x = 1;
  //  const group = new THREE.Group();
  // group.add(CubeMesh);
  // group.add(ayokona);

  // group.position.y = 1;


  
  //light 
  const ambientLight = new THREE.AmbientLight('grey', 0.1);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 10);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  RoundMesh.position.x = 1;
  CubeMesh.position.x = -1;


  //Scene add
  scene.add(CubeMesh);
  scene.add(RoundMesh);
  // scene.fog = fog
  // scene.background = new THREE.Color('black');





  const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    0.1,
    30
  );

  // const aspectRatio = window.innerWidth / window.innerHeight

  // const camera = new THREE.OrthographicCamera(
  // -1 * aspectRatio,
  // 1 * aspectRatio,
  // 1,
  // -1,
  // 0.1,
  // 200
  // )

  camera.position.z = 5;
  scene.add(camera);

  const canva = document.querySelector("canvas.threejs");
  const renderer = new THREE.WebGLRenderer({ canvas: canva });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

  renderer.setPixelRatio(maxPixelRatio);
  const controls = new OrbitControls(camera, canva);
  controls.enableDamping = true;
  controls.autoRotate = true;

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });


  const clock = new THREE.Clock;
  let  previusetime = 0;

  const treediloop = () => {
    const currentime = clock.getElapsedTime()
    const delta = currentime - previusetime
    previusetime = currentime

    CubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 100
    RoundMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 100
    CubeMesh.rotation.y += THREE.MathUtils.degToRad(1);
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(treediloop);
  };

  treediloop();



export default Threejs;
