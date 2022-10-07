import { useState, useEffect, useRef, useCallback } from 'react'
import {Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const JaimieCharacter = () => {
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const refRenderer = useRef()
    const [renderer] = useState()
    const [_camera] = useState()


    const handleWindowResize = useCallback(() => {
        const { current: renderer } = refRenderer
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })

            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            refRenderer.current = renderer
            const scene = new THREE.Scene()

            const target = new THREE.Vector3(0, 2.5, 1.5)
            const initialCameraPosition = new THREE.Vector3(
                20 * Math.sin(0.2 * Math.PI),
                10,
                20 * Math.cos(0.2 * Math.PI)
            )

            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.008 + 2.2
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )

            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
            scene.add(ambientLight)

            const spotlight = new THREE.SpotLight(0xcccccc, 0.8, 100, Math.PI*2, 0.1, 0.1)
            spotlight.position.set(0, 2.5, 4.5)
            spotlight.castShadow = true
            scene.add(spotlight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target

            loadGLTFModel(scene, '/jaimie_character.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 10

                    camera.position.y = 10
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                controls.update()
                }

                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.domElement.remove()
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return() => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])
    
    return ( <Box 
            ref={refContainer}
            className='jaimie-character'
            m='auto'
            w={[300, 400, 300]}
            h={[300, 400, 300]}
            position="relative"
            display="flex"
            >
                {loading && (
                    <Spinner 
                        size="sm"
                        position="absolute"
                        top="50%"
                        mt="calc(0px - var(--spinner-size))" />
                )}
        </Box>
    )
            
}

export default JaimieCharacter