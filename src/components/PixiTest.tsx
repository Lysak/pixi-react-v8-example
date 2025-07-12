import { Application, useExtend } from '@pixi/react'
import { Assets, Container, Graphics, Sprite, Text, TextStyle } from 'pixi.js'
import { useCallback, useEffect, useState } from 'react'

const PixiTest = () => {
  // Register Pixi.js components with the useExtend hook
  useExtend({ Container, Graphics, Sprite, Text })

  const [rotation, setRotation] = useState(0)
  const [bunnyTexture, setBunnyTexture] = useState(null)

  // Load bunny texture
  useEffect(() => {
    const loadTexture = async () => {
      try {
        // Load the texture
        const texture = await Assets.load('https://pixijs.com/assets/bunny.png')
        setBunnyTexture(texture)
      } catch (error) {
        console.error('Failed to load texture:', error)
      }
    }

    loadTexture().then(() => {})
  }, [])

  // Simple rectangle drawing function
  const drawRect = useCallback(
    (g: {
      clear: () => void
      setFillStyle: (arg0: { color: number }) => void
      rect: (arg0: number, arg1: number, arg2: number, arg3: number) => void
      fill: () => void
    }) => {
      g.clear()
      g.setFillStyle({ color: 0x00ff00 })
      g.rect(0, 0, 100, 100)
      g.fill()
    },
    [],
  )

  // Update rotation on animation frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setRotation((r) => r + 0.01)
      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
      <Application
        width={800}
        height={400}
        backgroundColor={0x1d2230}
        antialias={true}
      >
        {/* Simple green rectangle */}
        <pixiGraphics x={100} y={100} draw={drawRect} />

        {/* Rotating bunny */}
        {bunnyTexture && (
          <pixiSprite
            texture={bunnyTexture}
            x={400}
            y={200}
            anchor={0.5}
            rotation={rotation}
            scale={2}
          />
        )}

        {/* Text */}
        <pixiText
          text='Hello Pixi React!'
          x={400}
          y={100}
          anchor={0.5}
          style={
            new TextStyle({
              align: 'center',
              fontFamily: 'Arial',
              fontSize: 24,
              fontWeight: 'bold',
              fill: '#ffffff',
            })
          }
        />
      </Application>
    </div>
  )
}

export default PixiTest
