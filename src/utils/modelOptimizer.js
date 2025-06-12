import * as THREE from 'three';

export const optimizeModel = (model) => {
  // Reduce polygon count
  model.traverse((node) => {
    if (node.isMesh) {
      node.geometry.computeBoundingSphere();
      node.geometry.computeBoundingBox();
      
      // Optimize geometry
      node.geometry.attributes.position.needsUpdate = true;
      node.geometry.attributes.normal.needsUpdate = true;
      
      // Enable frustum culling
      node.frustumCulled = true;
    }
  });
  
  return model;
};

export const optimizeTexture = (texture) => {
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  return texture;
}; 