import React from 'react';
import { Container, Text, Root } from '@react-three/uikit';
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Slider, Switch, Input, Button, Label,
  Tabs, TabsList, TabsTrigger, TabsContent, Defaults
} from '@react-three/uikit-default';
import { Settings, SquareFunction, Grid3x3, SlidersHorizontal } from '@react-three/uikit-lucide';
import { useSettingsStore, useParametricFunctionStore, useCalculatorStore } from '../store';

function SettingsPanel3D({ position = [2, 0, 0] }) {
  const settings = useSettingsStore();
  const parametric = useParametricFunctionStore();
  const setCalculatorEquation = useCalculatorStore((state) => state.setEquation);

  // Ensure numeric values with defaults
  const xMin = typeof settings.xMin === 'number' ? settings.xMin : -3;
  const xMax = typeof settings.xMax === 'number' ? settings.xMax : 3;
  const yMin = typeof settings.yMin === 'number' ? settings.yMin : -3;
  const yMax = typeof settings.yMax === 'number' ? settings.yMax : 3;
  const segments = typeof settings.segments === 'number' ? settings.segments : 20;

  if (!settings.showSettings) return null;

  const handleExpressionChange = (value) => {
    parametric.setExpression(value);
    setCalculatorEquation(value);
  };

  const resetDefaults = () => {
    settings.setXMin(-5);
    settings.setXMax(5);
    settings.setYMin(-5);
    settings.setYMax(5);
    settings.setSegments(50);
    settings.setWireframe(false);
    settings.setShowGrid(true);
    parametric.setExpression('sin(x) * cos(y)');
  };

  return (
    <group position={position}>
      <Root>
        <Defaults>
          <Card width={400} height={500}>
        <CardHeader>
          <CardTitle>
            <Container flexDirection="row" alignItems="center" gap={8}>
              <Settings width={20} height={20} />
              <Text>Settings</Text>
            </Container>
          </CardTitle>
          <CardDescription>
            <Text>Configure the parametric surface visualization</Text>
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="function" width="100%">
            <TabsList width="100%">
              <TabsTrigger flexGrow={1} value="function">
                <Container flexDirection="row" alignItems="center" gap={4}>
                  <SquareFunction width={16} height={16} />
                  <Text fontSize={14}>Function</Text>
                </Container>
              </TabsTrigger>
              <TabsTrigger flexGrow={1} value="display">
                <Container flexDirection="row" alignItems="center" gap={4}>
                  <Grid3x3 width={16} height={16} />
                  <Text fontSize={14}>Display</Text>
                </Container>
              </TabsTrigger>
              <TabsTrigger flexGrow={1} value="range">
                <Container flexDirection="row" alignItems="center" gap={4}>
                  <SlidersHorizontal width={16} height={16} />
                  <Text fontSize={14}>Range</Text>
                </Container>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="function">
              <Container flexDirection="column" gap={16} paddingTop={16}>
                <Container flexDirection="column" gap={8}>
                  <Label>
                    <Text fontSize={14}>Mathematical Expression</Text>
                  </Label>
                  <Input 
                    value={parametric.expression} 
                    onValueChange={handleExpressionChange}
                    placeholder="e.g., sin(x) * cos(y)"
                    width="100%"
                  />
                  <Text fontSize={12} opacity={0.7}>
                    Variables: x, y | Functions: sin, cos, tan, exp, log, sqrt
                  </Text>
                </Container>
              </Container>
            </TabsContent>
            
            <TabsContent value="display">
              <Container flexDirection="column" gap={16} paddingTop={16}>
                <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Label>
                    <Text fontSize={14}>Wireframe</Text>
                  </Label>
                  <Switch 
                    checked={!!settings.wireframe} 
                    onCheckedChange={(checked) => settings.setWireframe(!!checked)} 
                  />
                </Container>
                
                <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                  <Label>
                    <Text fontSize={14}>Show Grid</Text>
                  </Label>
                  <Switch 
                    checked={!!settings.showGrid} 
                    onCheckedChange={(checked) => settings.setShowGrid(!!checked)} 
                  />
                </Container>
                
                <Container flexDirection="column" gap={8}>
                  <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Label>
                      <Text fontSize={14}>Segments</Text>
                    </Label>
                    <Text fontSize={14} fontWeight="bold">{segments}</Text>
                  </Container>
                  <Slider 
                    value={[segments]} 
                    onValueChange={(values) => {
                      const val = Array.isArray(values) ? values[0] : values;
                      settings.setSegments(Math.round(Number(val)));
                    }}
                    min={10}
                    max={100}
                    step={5}
                    width="100%"
                  />
                </Container>
              </Container>
            </TabsContent>
            
            <TabsContent value="range">
              <Container flexDirection="column" gap={16} paddingTop={16}>
                <Container flexDirection="column" gap={8}>
                  <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Label>
                      <Text fontSize={14}>X Min</Text>
                    </Label>
                    <Text fontSize={14} fontWeight="bold">{xMin.toFixed(1)}</Text>
                  </Container>
                  <Slider 
                    value={[xMin]} 
                    onValueChange={(values) => {
                      const val = Array.isArray(values) ? values[0] : values;
                      settings.setXMin(Number(val));
                    }}
                    min={-20}
                    max={0}
                    step={0.5}
                    width="100%"
                  />
                </Container>
                
                <Container flexDirection="column" gap={8}>
                  <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Label>
                      <Text fontSize={14}>X Max</Text>
                    </Label>
                    <Text fontSize={14} fontWeight="bold">{xMax.toFixed(1)}</Text>
                  </Container>
                  <Slider 
                    value={[xMax]} 
                    onValueChange={(values) => {
                      const val = Array.isArray(values) ? values[0] : values;
                      settings.setXMax(Number(val));
                    }}
                    min={0}
                    max={20}
                    step={0.5}
                    width="100%"
                  />
                </Container>
                
                <Container flexDirection="column" gap={8}>
                  <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Label>
                      <Text fontSize={14}>Y Min</Text>
                    </Label>
                    <Text fontSize={14} fontWeight="bold">{yMin.toFixed(1)}</Text>
                  </Container>
                  <Slider 
                    value={[yMin]} 
                    onValueChange={(values) => {
                      const val = Array.isArray(values) ? values[0] : values;
                      settings.setYMin(Number(val));
                    }}
                    min={-20}
                    max={0}
                    step={0.5}
                    width="100%"
                  />
                </Container>
                
                <Container flexDirection="column" gap={8}>
                  <Container flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Label>
                      <Text fontSize={14}>Y Max</Text>
                    </Label>
                    <Text fontSize={14} fontWeight="bold">{yMax.toFixed(1)}</Text>
                  </Container>
                  <Slider 
                    value={[yMax]} 
                    onValueChange={(values) => {
                      const val = Array.isArray(values) ? values[0] : values;
                      settings.setYMax(Number(val));
                    }}
                    min={0}
                    max={20}
                    step={0.5}
                    width="100%"
                  />
                </Container>
              </Container>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter>
          <Container flexDirection="row" gap={8} width="100%">
            <Button onClick={resetDefaults} variant="outline" flexGrow={1}>
              <Text>Reset Defaults</Text>
            </Button>
            <Button onClick={() => settings.toggleSettings()} flexGrow={1}>
              <Text>Apply</Text>
            </Button>
          </Container>
        </CardFooter>
      </Card>
        </Defaults>
      </Root>
    </group>
  );
}

export default SettingsPanel3D