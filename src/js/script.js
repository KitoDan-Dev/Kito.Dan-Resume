console.log(THREE);

createball ();

function createball () {
var camera, scene, renderer;
var image;

renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
renderer.setPixelRatio(2);
document.body.appendChild(renderer.domElement);

scene = new THREE.Scene();
camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);

var light = new THREE.DirectionalLight( 0xffffff, 1, 0 );
light.position.set( 15, 15, 0 );

var texture = new THREE.TextureLoader().load('src/images/kitodanfrontend_out.png');

var texture2 = new THREE.TextureLoader().load('src/images/kitodanfrontend_middle.png');

var material = new THREE.MeshBasicMaterial({
    map: texture
});

var material2 = new THREE.MeshBasicMaterial({
    map: texture2
});

material.transparent = true;
material2.transparent = true;

var geometry = new THREE.SphereGeometry(9.9, 50, 50);
const mesh = new THREE.Mesh(geometry, material);
var geometry2 = new THREE.SphereGeometry(10, 50, 50);
const mesh2 = new THREE.Mesh(geometry2, material2);

mesh2.rotation.y = -Math.PI / 2;
mesh.rotation.y = -Math.PI / 2;
mesh2.rotation.x = 19.4;
mesh.rotation.x = 19.4;

scene.add( light );
scene.add(mesh2);
scene.add(mesh);


animate();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh2.rotation.y -= 0.0018;
    mesh.rotation.y += 0.0009;

}
};