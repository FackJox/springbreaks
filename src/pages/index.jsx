import dynamic from 'next/dynamic'
import { useState, useRef } from 'react'
// import Instructions from '@/components/dom/SpringBreakIns'
// import Gumball from '@/components/dom/GumballIns'
// import Caverave from '@/components/dom/CaveraveIns'
import { useFrame } from '@react-three/fiber'
import { Center, Float, PerspectiveCamera } from '@react-three/drei'
import { useStore } from '@/helpers/Store'
import { lerp } from 'three/src/math/MathUtils'


// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const Speaker = dynamic(() => import('@/components/canvas/Speaker'), { ssr: false })
const SpringBreakText = dynamic(() => import('@/components/canvas/SpringBreakText'), { ssr: false })
const GumballText = dynamic(() => import('@/components/canvas/GumballText'), { ssr: false })
const CaveraveText = dynamic(() => import('@/components/canvas/CaveraveText'), { ssr: false })
const CaveraveIns = dynamic(() => import('@/components/dom/CaveraveIns'), { ssr: true })
const GumballIns = dynamic(() => import('@/components/dom/GumballIns'), { ssr: true })
const SpringbreakIns = dynamic(() => import('@/components/dom/SpringbreakIns'), { ssr: true })
const ToneComponent = dynamic(() => import('@/components/canvas/Tone'), { ssr: true })

// const [textVisibility, setTextVisibility] = useState({
//   instructionsText: false,
//   caveraveText: false,
//   gumballText: false
// })

// console.log("instructionsVisibility", textVisibility.instructionsText)
// console.log("caveraveVisibility", caveraveVisibility)
// console.log("gumballVisibility", gumballVisibility)

// Dom components go here



const Cam = () => {
  const camRef = useRef()
  const {  setCaveraveText, setGumballText  } = useStore();
  useFrame((state, delta) => {
    camRef.current.position.y = lerp(camRef.current.position.y, state.mouse.y *1.2 , Math.min(delta, 0.1))
    // console.log("🚀 ~ file: index.jsx:42 ~ useFrame ~ state.mouse.y:", state.mouse.y)
    camRef.current.position.x = lerp(camRef.current.position.x, state.mouse.x * 0.5 + 0.5, Math.min(delta, 0.1))
    // console.log("🚀 ~ file: index.jsx:43 ~ useFrame ~ state.mouse.x:", state.mouse.x)
    camRef.current.lookAt(0, 0, 0)


    const mousePosTop = state.mouse.y > 0.65
    // console.log("🚀 ~ file: index.jsx:39 ~ Movement ~ mousePosTop:", mousePosTop)
    const mousePosBot = state.mouse.y < -0.65
    // console.log("🚀 ~ file: index.jsx:41 ~ Movement ~ mousePosBot:", mousePosBot)
 
    setCaveraveText(mousePosBot)
    setGumballText(mousePosTop)
    setCaveraveText(mousePosTop)
    setGumballText(mousePosBot)

    window.addEventListener("deviceorientation", (e) => {
      let beta = e.beta; // beta: front back motion x-axis
      // console.log("🚀 ~ file: index.jsx:61 ~ window.addEventListener ~ beta:", beta)
      let gamma = e.gamma; // gamma: left to right y-axis
      // console.log("🚀 ~ file: index.jsx:62 ~ window.addEventListener ~ gamma:", gamma)
      let alpha = e.alpha; // alpha: rotation around z-axis
      // console.log("🚀 ~ file: index.jsx:65 ~ window.addEventListener ~ alpha:", alpha)
 


      }
     )
  })

  return <PerspectiveCamera ref={camRef} makeDefault position={[0, 0.5, 5]} fov={75} />
}


export default function Page(props) {
  
  const { springbreakText, caveraveText, gumballText } = useStore()



  
  return (
    <>
    { false ?   <SpringbreakIns >
      OKAY PARTY PEEPS{' '}
      <span className='text-cyan-200'>SPRING IS JUST </span> AROUND THE CORNER SO {' '}
      <span className='text-green-200'>GET READY TO CELEBRATE </span>WITH A GOOD  {' '}
      <span className='text-green-200'>OLD FASHIONED </span> GUMBALL RALLY AND {' '}
      <span className='text-green-200'>MULTIROOM  </span> CAVERAVE{' '}
    </SpringbreakIns> : null }

    { gumballText ?     <GumballIns >
      Gumball Rally{' '}
    </GumballIns> : null }

    { caveraveText ?     <CaveraveIns >
      Cave Rave II{' '}
    </CaveraveIns> : null }

    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => 
<>
{/* <Logo scale={0.5} route='/blob' position-y={-1} />  */}
<Center>
  <Cam />
<Float >
<Speaker  scale={0.75} position-y={-1.7} position-x={-4} position-z={1} rotation-y={0.1 * Math.PI }/>
<SpringBreakText position-z={1} position-y={-1}  />
<GumballText position-z={1} position-y={-1}  />
<CaveraveText position-z={1} position-y={-1}  />
</Float>
</Center>
<ToneComponent />
</>
export async function getStaticProps() {
  return { props: { title: 'Spring Breaks' } }
}
