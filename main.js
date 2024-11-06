// Función para crear una habitación con cuatro paredes y una puerta
function createRoomWithWalls(x, z, id) {
  const roomWidth = 10;
  const roomDepth = 15;
  const wallHeight = 3;
  const wallThickness = 0.5;

  // Crear las paredes
  const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

  // Pared trasera
  const backWall = new THREE.Mesh(
      new THREE.BoxGeometry(roomWidth, wallHeight, wallThickness),
      wallMaterial
  );
  backWall.position.set(x, wallHeight / 2, z - roomDepth / 2);
  scene.add(backWall);

  // Pared delantera (con puerta)
  const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry((roomWidth - 2), wallHeight, wallThickness),
      wallMaterial
  );
  frontWall.position.set(x, wallHeight / 2, z + roomDepth / 2);
  scene.add(frontWall);

  // Pared izquierda
  const leftWall = new THREE.Mesh(
      new THREE.BoxGeometry(wallThickness, wallHeight, roomDepth),
      wallMaterial
  );
  leftWall.position.set(x - roomWidth / 2, wallHeight / 2, z);
  scene.add(leftWall);

  // Pared derecha
  const rightWall = new THREE.Mesh(
      new THREE.BoxGeometry(wallThickness, wallHeight, roomDepth),
      wallMaterial
  );
  rightWall.position.set(x + roomWidth / 2, wallHeight / 2, z);
  scene.add(rightWall);

  // Mesa quirúrgica
  const tableGeometry = new THREE.BoxGeometry(3, 0.5, 1.5);
  const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 });
  const table = new THREE.Mesh(tableGeometry, tableMaterial);
  table.position.set(x, 0.25, z);
  scene.add(table);

  return { id, backWall, frontWall, leftWall, rightWall, table };
}

// Crear habitaciones con paredes
const room1 = createRoomWithWalls(-15, 0, 'room1');
const room2 = createRoomWithWalls(15, 0, 'room2');

// Agregar luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 20, 0);
scene.add(light);

// Posicionar la cámara
camera.position.set(0, 10, 30);
camera.lookAt(0, 0, 0);

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
