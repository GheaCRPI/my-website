import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.TorusGeometry(5,1,16,50);
const material = new THREE.MeshStandardMaterial({color:0xFF1987});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff,100);
pointLight.position.set(0,0,0);

const ambientLight = new THREE.AmbientLight(0xffffff,2);
scene.add(pointLight,ambientLight);


const controls = new OrbitControls(camera, renderer.domElement);
function addObject(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color:0xaa5fb8});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}
Array(200).fill().forEach(addObject)

const backTexture = new THREE.TextureLoader().load('background.jpg');
scene.background = backTexture;

function addGhea(){
  const gheaTexture = new THREE.TextureLoader().load('ghea.jpg');

  const ghea = new THREE.Mesh(
    new THREE.BoxGeometry(5,5,5),
    new THREE.MeshBasicMaterial({map:gheaTexture})
  );

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(50));

  ghea.position.set(x,y,z);
  scene.add(ghea);
}
Array(5).fill().forEach(addGhea);
const ballTexture = new THREE.TextureLoader().load('rainbow.png');

const ball = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({
    map: ballTexture
  })
);
scene.add(ball);

ball.position.z = -10;
ball.position.x = 0;

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  ball.rotation.x+=0.01;
  ball.rotation.y+=0.0075;
  ball.rotation.z+=0.01;

  camera.position.z = t*-0.01;
  camera.position.x = t*-0.0002;
}

document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x +=0.01;
  torus.rotation.y +=0.005;
  torus.rotation.z +=0.01;
  controls.update();
  renderer.render(scene,camera);
}

animate()