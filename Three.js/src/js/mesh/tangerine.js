import * as THREE from "three";

export default function printTangerine() {

     // =============================
    // 한라봉

    const hanrabong = new THREE.Group();

    const bodyMaterial = new THREE.MeshStandardMaterial({
        color : 0xff7f00

    })

    const bottomGeometry = new THREE.DodecahedronGeometry(2,1);
    const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);

    hanrabong.add(bottom);


    const topGeometry = new THREE.TetrahedronGeometry(0.8,3);
    const top = new THREE.Mesh(topGeometry, bodyMaterial);
    top.position.y = 1.7;
    
    hanrabong.add(top);

    const leafMaterial = new THREE.MeshStandardMaterial({
        color: 0x008000,
        side: THREE.DoubleSide,
    });

    const stemGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.5);
    const stem = new THREE.Mesh(stemGeometry, leafMaterial);
    hanrabong.add(stem);
    stem.position.y = 2.5;

    const leafGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI /3 );
    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    hanrabong.add(leaf);
    leaf.position.set(-0.5, 2.4, -0.1);
    leaf.rotation.z = Math.PI / -2;


    return hanrabong;
}