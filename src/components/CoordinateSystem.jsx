import React from 'react';
import { Line, Text } from '@react-three/drei';
import * as THREE from 'three';

function CoordinateSystem({ size = 10, divisions = 10 }) {
  // Helper function to create grid lines
  const createGridLines = (plane, color = '#404040') => {
    const lines = [];
    const halfSize = size / 2;
    const step = size / divisions;

    // Create grid lines for each plane
    for (let i = 0; i <= divisions; i++) {
      const position = -halfSize + i * step;
      
      if (plane === 'xy') {
        // Horizontal lines (parallel to X axis)
        lines.push(
          <Line
            key={`xy-h-${i}`}
            points={[[-halfSize, position, 0], [halfSize, position, 0]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
        // Vertical lines (parallel to Y axis)
        lines.push(
          <Line
            key={`xy-v-${i}`}
            points={[[position, -halfSize, 0], [position, halfSize, 0]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
      } else if (plane === 'xz') {
        // Lines parallel to X axis
        lines.push(
          <Line
            key={`xz-x-${i}`}
            points={[[-halfSize, 0, position], [halfSize, 0, position]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
        // Lines parallel to Z axis
        lines.push(
          <Line
            key={`xz-z-${i}`}
            points={[[position, 0, -halfSize], [position, 0, halfSize]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
      } else if (plane === 'yz') {
        // Lines parallel to Y axis
        lines.push(
          <Line
            key={`yz-y-${i}`}
            points={[[0, -halfSize, position], [0, halfSize, position]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
        // Lines parallel to Z axis
        lines.push(
          <Line
            key={`yz-z-${i}`}
            points={[[0, position, -halfSize], [0, position, halfSize]]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
        );
      }
    }
    
    return lines;
  };

  // Create arrow geometry for axes
  const ArrowHelper = ({ direction, origin, length, color }) => {
    const arrowHelper = new THREE.ArrowHelper(
      new THREE.Vector3(...direction),
      new THREE.Vector3(...origin),
      length,
      color,
      length * 0.2,
      length * 0.1
    );
    
    return <primitive object={arrowHelper} />;
  };

  const axisLength = size / 2 + 1;

  return (
    <group>
      {/* Grid planes */}
      <group name="grid-xy">
        {createGridLines('xy', '#606060')}
      </group>
      
      <group name="grid-xz">
        {createGridLines('xz', '#505050')}
      </group>
      
      <group name="grid-yz">
        {createGridLines('yz', '#505050')}
      </group>

      {/* Axis lines with arrows */}
      {/* X Axis - Red */}
      <Line
        points={[[-axisLength, 0, 0], [axisLength, 0, 0]]}
        color="#ff0000"
        lineWidth={2}
      />
      <ArrowHelper
        direction={[1, 0, 0]}
        origin={[axisLength - 0.5, 0, 0]}
        length={0.5}
        color={0xff0000}
      />
      
      {/* Y Axis - Green */}
      <Line
        points={[[0, -axisLength, 0], [0, axisLength, 0]]}
        color="#00ff00"
        lineWidth={2}
      />
      <ArrowHelper
        direction={[0, 1, 0]}
        origin={[0, axisLength - 0.5, 0]}
        length={0.5}
        color={0x00ff00}
      />
      
      {/* Z Axis - Blue */}
      <Line
        points={[[0, 0, -axisLength], [0, 0, axisLength]]}
        color="#0000ff"
        lineWidth={2}
      />
      <ArrowHelper
        direction={[0, 0, 1]}
        origin={[0, 0, axisLength - 0.5]}
        length={0.5}
        color={0x0000ff}
      />

      {/* Axis Labels */}
      <Text
        position={[axisLength + 0.5, 0, 0]}
        fontSize={0.5}
        color="#ff0000"
        anchorX="center"
        anchorY="middle"
      >
        X
      </Text>
      
      <Text
        position={[0, axisLength + 0.5, 0]}
        fontSize={0.5}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
      >
        Y
      </Text>
      
      <Text
        position={[0, 0, axisLength + 0.5]}
        fontSize={0.5}
        color="#0000ff"
        anchorX="center"
        anchorY="middle"
      >
        Z
      </Text>

      {/* Origin label */}
      <Text
        position={[0.3, -0.3, 0.3]}
        fontSize={0.3}
        color="#808080"
        anchorX="center"
        anchorY="middle"
      >
        O
      </Text>

      {/* Add tick marks and numbers on axes */}
      {Array.from({ length: Math.floor(size / 2) }, (_, i) => {
        const pos = (i + 1) * 2;
        return (
          <group key={`ticks-${i}`}>
            {/* X axis ticks */}
            <Text
              position={[pos, -0.3, 0]}
              fontSize={0.2}
              color="#808080"
              anchorX="center"
              anchorY="top"
            >
              {pos}
            </Text>
            <Text
              position={[-pos, -0.3, 0]}
              fontSize={0.2}
              color="#808080"
              anchorX="center"
              anchorY="top"
            >
              {-pos}
            </Text>
            
            {/* Y axis ticks */}
            <Text
              position={[-0.3, pos, 0]}
              fontSize={0.2}
              color="#808080"
              anchorX="right"
              anchorY="middle"
            >
              {pos}
            </Text>
            <Text
              position={[-0.3, -pos, 0]}
              fontSize={0.2}
              color="#808080"
              anchorX="right"
              anchorY="middle"
            >
              {-pos}
            </Text>
            
            {/* Z axis ticks */}
            <Text
              position={[0, -0.3, pos]}
              fontSize={0.2}
              color="#808080"
              anchorX="center"
              anchorY="top"
            >
              {pos}
            </Text>
            <Text
              position={[0, -0.3, -pos]}
              fontSize={0.2}
              color="#808080"
              anchorX="center"
              anchorY="top"
            >
              {-pos}
            </Text>
          </group>
        );
      })}
    </group>
  );
}

export default CoordinateSystem;