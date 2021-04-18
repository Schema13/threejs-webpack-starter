import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { Camera } from 'three'

// Debug
const gui = new dat.GUI({ name : 'Panneau de contrôles', autoPlace: false })
document.getElementById('ui').appendChild(gui.domElement)

const loader = new GLTFLoader()
let model

loader.load( `/scene.gltf`, function ( gltf ) {
	model = gltf.scene
    scene.add( model )
    model.position.x = 0
    model.position.y = -30
    model.position.z = 0
    model.rotateX(-.5)
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects

// Materials

// Mesh

// Lights

const pointLight = new THREE.PointLight(0xffffff, 100)
pointLight.position.x = 0 // 2
pointLight.position.y = 15 // 3
pointLight.position.z = 12 // 4
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xffffff, 1)
pointLight2.position.x = -2
pointLight2.position.y = -3
pointLight2.position.z = -4
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xffffff, 0.5)
pointLight3.position.x = 0
pointLight3.position.y = 3
pointLight3.position.z = 0
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight(0xffffff, 1)
pointLight4.position.x = 0
pointLight4.position.y = -3
pointLight4.position.z = -2
scene.add(pointLight4)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -1
camera.position.y = 15
camera.position.z = 12
scene.add(camera)

const cameraControls = gui.addFolder('Camera')
cameraControls.add(camera.position, 'x').min(-10).max(100).step(0.01)
cameraControls.add(camera.position, 'y').min(-10).max(100).step(0.01)
cameraControls.add(camera.position, 'z').min(-10).max(100).step(0.01)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Controls
document.body.appendChild(renderer.domElement);
var controls = new OrbitControls(camera, renderer.domElement);
controls.update();

/**
 * Animate
 */

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();