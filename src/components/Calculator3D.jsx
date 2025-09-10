import React, { useEffect, useState, useRef } from 'react';
import { Container, Text, Root } from '@react-three/uikit';
import { 
  Card, CardHeader, CardTitle, CardContent,
  Button, Input, Defaults
} from '@react-three/uikit-default';
import { Calculator, Delete } from '@react-three/uikit-lucide';
import { useCalculatorStore, useParametricFunctionStore } from '../store';

function Calculator3D({ position = [-2, 0, 0] }) {
  const { 
    displayValue, 
    appendNumber, 
    setOperation, 
    calculate, 
    clear,
    addFunction,
    backspace,
    setParametricFunctionStore: setParamStore,
    equation
  } = useCalculatorStore();
  
  const parametricStore = useParametricFunctionStore();
  const setEquation = useCalculatorStore((state) => state.setEquation);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const lastActionTimeRef = useRef(0);
  
  // Connect the stores and initialize with current expression
  useEffect(() => {
    setParamStore(parametricStore);
    // Initialize calculator with current expression
    if (parametricStore.expression) {
      setEquation(parametricStore.expression);
    }
  }, [setParamStore, parametricStore, setEquation]);
  
  // Scientific calculator layout with x and y variables
  const buttons = [
    ['sin', 'cos', 'tan', 'ln', 'log'],
    ['√', '^', 'π', 'e', '(', ')'],
    ['x', 'y', '÷', 'C', '⌫'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['.', '0', '=']
  ];
  
  const handleButtonClick = (value) => {
    // Debounce to prevent double clicks
    const now = Date.now();
    if (now - lastActionTimeRef.current < 100) {
      return; // Ignore if clicked too quickly
    }
    lastActionTimeRef.current = now;
    
    // Focus management is handled by the Input component's onFocus/onBlur handlers
    
    if (value === '=') {
      calculate();
      // Also update the parametric function directly
      const hasVariables = /[xy]/.test(equation);
      if (hasVariables) {
        // Convert display symbols to math.js compatible ones
        let expression = equation
          .replace(/π/g, 'pi')
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/√/g, 'sqrt');
        parametricStore.setExpression(expression);
      }
    } else if (value === 'C') {
      clear();
    } else if (value === '⌫') {
      // Use preventDefault and only call backspace once
      backspace();
    } else if (['+', '-', '×', '÷'].includes(value)) {
      setOperation(value);
    } else if (['sin', 'cos', 'tan', 'ln', 'log', '√', '^', 'π', 'e', '(', ')'].includes(value)) {
      addFunction(value);
    } else if (['x', 'y'].includes(value)) {
      // Add x or y as variables
      appendNumber(value);
    } else if (value !== '') {
      appendNumber(value);
    }
  };
  
  const handleInputChange = (value) => {
    setEquation(value);
  };
  
  const handleInputFocus = () => {
    setIsInputFocused(true);
    // Disable keyboard shortcuts when input is focused
    if (window.keyboardShortcutsEnabled !== undefined) {
      window.keyboardShortcutsEnabled = false;
    }
  };
  
  const handleInputBlur = () => {
    setIsInputFocused(false);
    // Re-enable keyboard shortcuts when input loses focus
    if (window.keyboardShortcutsEnabled !== undefined) {
      window.keyboardShortcutsEnabled = true;
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculate();
      // Apply to parametric surface if it has variables
      const hasVariables = /[xy]/.test(equation);
      if (hasVariables) {
        let expression = equation
          .replace(/π/g, 'pi')
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/√/g, 'sqrt');
        parametricStore.setExpression(expression);
      }
    }
  };
  
  const getButtonVariant = (button) => {
    if (button === 'C') return 'destructive';
    if (button === '⌫') return 'destructive';
    if (button === '=') return 'default';
    if (['+', '-', '×', '÷'].includes(button)) return 'secondary';
    if (['sin', 'cos', 'tan', 'ln', 'log', '√', '^', 'π', 'e', '(', ')'].includes(button)) return 'outline';
    if (['x', 'y'].includes(button)) return 'secondary';
    return 'outline';
  };
  
  const getButtonWidth = (button) => {
    if (button === '0') return 120;
    if (button === '=') return 120;
    return 55;
  };
  
  return (
    <group position={position}>
      <Root>
        <Defaults>
          <Card width={320} height={450}>
        <CardHeader>
          <CardTitle>
            <Container flexDirection="row" alignItems="center" gap={8}>
              <Calculator width={20} height={20} />
              <Text>Scientific Calculator</Text>
            </Container>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <Container flexDirection="column" gap={12}>
            {/* Display */}
            <Input 
              value={displayValue || ''} 
              onValueChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              onKeyPress={handleKeyPress}
              placeholder="Enter expression..."
              width="100%"
              height={50}
              fontSize={18}
              fontWeight="bold"
              textAlign="right"
            />
            
            {/* Button Grid */}
            <Container flexDirection="column" gap={8}>
              {buttons.map((row, rowIndex) => (
                <Container 
                  key={rowIndex} 
                  flexDirection="row" 
                  gap={8}
                  justifyContent="center"
                >
                  {row.map((button, colIndex) => {
                    const width = getButtonWidth(button);
                    
                    return (
                      <Button
                        key={`${rowIndex}-${colIndex}`}
                        variant={getButtonVariant(button)}
                        onClick={() => {
                          handleButtonClick(button);
                        }}
                        width={width}
                        height={40}
                        padding={0}
                      >
                        {button === '⌫' ? (
                          <Delete width={16} height={16} />
                        ) : (
                          <Text fontSize={button.length > 2 ? 12 : 14}>
                            {button}
                          </Text>
                        )}
                      </Button>
                    );
                  })}
                </Container>
              ))}
            </Container>
            
            {/* Info text */}
            <Text fontSize={10} opacity={0.7} textAlign="center">
              Variables: x, y | Press = to apply to surface
            </Text>
          </Container>
        </CardContent>
      </Card>
        </Defaults>
      </Root>
    </group>
  );
}

export default Calculator3D;