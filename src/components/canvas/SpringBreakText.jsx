import { useState, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { Center, Text3D, useCursor, MeshDistortMaterial, meshBounds } from '@react-three/drei'
import { useStore } from '@/helpers/Store'

import { useRouter } from 'next/router'
// import localFont from '@next/font/local'
import interfacefont from  "../../assets/interface.json"
import atomicfont from  "../../assets/atomicrev.json"
// const fnt =  "/interface.json"
// const fnt =  "/fonts/interface.json"
// const fnt =  "./interface.json"
// const fnt = localFont({ src: "../../assets/fonts/interface.json" })

// console.log("interfacefont", interfacefont)
// console.log("atomicfont", atomicfont)

// function ViewPort() {

//   }  

export default function SpringBreakText({ route, ...props }) {
  const springbreakRef = useRef()
  // const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  // const { setSpringbreakText,  setCaveraveText, setGumballText, springbreakText  } = useStore();


  // const onHover = () => {
  //   setSpringbreakText(true)
  //   setCaveraveText(false)
  //   setGumballText(false)
  //   console.log("test123")
  // }

  // const onOut = () => {
  //   setSpringbreakText(false)
  //   setCaveraveText(false)
  //   setGumballText(false)
  // }

  return (
    <>

    <Center position-x={2}>
      <Text3D
        curveSegments={32}
        // ref={springbreakRef}
        // bevelEnabled
        // bevelSize={0.04}
        // bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font={interfacefont}
        // raycast={ meshBounds }
        // onClick={(event) => onHover(event)}
        // onPointerOut={(event) => onOut(event)}
        >
        {`Spring\nBreaks`}
        <meshStandardMaterial roughness={0} color="white" />
      </Text3D>
    </Center>
  </>
  )
}
