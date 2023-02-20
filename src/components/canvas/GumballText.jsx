import { useState, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Center, Text3D, meshBounds } from '@react-three/drei'
// import localFont from '@next/font/local'
import interfacefont from  "../../assets/interface.json"
import atomicfont from  "../../assets/atomicrev.json"
// const fnt =  "/interface.json"
// const fnt =  "/fonts/interface.json"
// const fnt =  "./interface.json"
// const fnt = localFont({ src: "../../assets/fonts/interface.json" })
import { useStore } from '@/helpers/Store'

console.log("interfacefont", interfacefont)
console.log("atomicfont", atomicfont)

// function ViewPort() {

//   }  


export default function GumballText({ route, ...props }) {
  const gumballRef = useRef();
    const { width, height  } = useThree((state) => state.viewport)
    const margin = 0.5 
    // const showGumballIns = useStore((state) => state.increasePopulation)
    // const hideText = useStore((state) => state.hideText)


    // const { setSpringbreakText,  setCaveraveText, setGumballText  } = useStore();

    // const onHover = (event) => {
    //   setSpringbreakText(false)
    //   setCaveraveText(false)
    //   setGumballText(true)
    // }
  
    // const onOut = (event) => {
    //   setSpringbreakText(false)
    //   setCaveraveText(false)
    //   setGumballText(false)
    // }

  return (
    <>
    <Center top left position={[width / 2 - margin, -height / 2 + margin, 0]} 
     raycast={ meshBounds }
      // onPointerOver={(event) => onHover(event)}
      // onPointerOut={(event) => onOut(event)}
      >
      <Text3D letterSpacing={-0.06} size={0.8} font={atomicfont}>
        {/* ref={gumballRef} */}
        GUMBALL RALLY
        <meshNormalMaterial />
      </Text3D>
    </Center>
  </>
  )
}
