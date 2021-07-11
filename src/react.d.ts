import { Object3DNode } from 'react-three-fiber'
import { Mesh, Group, PlaneGeometry, SphereGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<Mesh, typeof Mesh>
      group: Object3DNode<Group, typeof Group>

      planeGeometry: Object3DNode<PlaneGeometry, typeof PlaneGeometry>
      sphereGeometry: Object3DNode<SphereGeometry, typeof SphereGeometry>

      meshStandardMaterial: any

      orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}
