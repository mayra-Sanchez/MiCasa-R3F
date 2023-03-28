import { OrbitControls, Html, Text, Float } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Women from './Women'
import Sofa from './Sofa'
import Comedor from './Comedor'
import Piano from './Piano'
import Escritorio from './Escritorio'
import Silla from './Silla'

export default function Experience()
{
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Html position={ [ 1, 15, 0 ] } wrapperClass="label"
        >Bienvenidos a mi hogar</Html>
        <Women/>
        <mesh position-y={ 0} position-x={-17} position-z={-5}>
            <Sofa/>
        </mesh>

        <mesh position-y={ 0} position-x={15}>
            <Comedor/>
        </mesh>
        
        <mesh position-y={ 0} position-z={30} position-x={15} rotation-y={10}> 
            <Piano/>
        </mesh>

        <mesh position-y={ 2} position-z={26} position-x={-15} rotation-y={11}> 
            <Escritorio/>
        </mesh>
        <mesh position-y={ 5} position-z={23} position-x={-15} rotation-y={20}> 
            <Silla/>
        </mesh>
        <Float
            speed={5} 
            rotationIntensity={4}
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={2}
                color="black"
                position-y={13}
                position-x={-13}
                maxWidth={8}
                textAlign="center"
            >
                Sala de estar
            </Text>
        </Float>
        

        <mesh position-y={ 0} rotation-x={ - Math.PI * 0.5} scale={ 60 } position-z={13}> 
            <planeGeometry />
            <meshStandardMaterial color="grey" />
        </mesh>
    </>
}