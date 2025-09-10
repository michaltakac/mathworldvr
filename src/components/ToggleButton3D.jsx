import React, { useState } from 'react';
import { Container, Text } from '@react-three/uikit';
import { Button } from '@react-three/uikit-default';
import * as THREE from 'three';

function ToggleButton3D({ 
  position = [0, 0, 0], 
  onClick, 
  icon: Icon, 
  label, 
  isActive = false,
  width = 120,
  height = 40 
}) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      <Button
        variant={isActive ? "default" : "outline"}
        onClick={onClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        width={width}
        height={height}
        style={{
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.2s'
        }}
      >
        <Container flexDirection="row" alignItems="center" gap={8}>
          {Icon && <Icon width={20} height={20} />}
          <Text fontSize={14}>{label}</Text>
        </Container>
      </Button>
    </group>
  );
}

export default ToggleButton3D;