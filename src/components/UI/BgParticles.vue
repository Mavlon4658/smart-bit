<script setup>
import { loadSlim } from "tsparticles-slim";
import circle_1 from '../../assets/images/icons/circle_1.png';
import circle_2 from '../../assets/images/icons/circle_2.png';

const props = defineProps(['idName']);

const particlesInit = async engine => {
    await loadSlim(engine);
};

const particlesLoaded = async container => {
    // console.log("Particles container loaded", container);
};
</script>

<template>
    <Particles class="absolute w-full h-full top-0 left-0" :id="`tsparticles_${idName}`" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
        background: {
            color: {
                value: 'transparent'
            }
        },
        fullScreen: {
            enable: false
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                resize: true
            },
            modes: {
                bubble: {
                    distance: 150,
                    duration: 2,
                    opacity: 0.3,
                    size: {
                        value: 100,
                    }
                },
                repulse: {
                    enable: false,
                }
            }
        },
        particles: {
            color: {
                value: '#ffffff'
            },
            links: {
                color: '#ffffff',
                distance: 400,
                enable: true,
                opacity: 0.3,
                width: 2
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 3.5,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 25
            },
            opacity: {
                value: 0.3
            },
            shape: {
                type: 'image',
                image: [
                    { src: circle_2 },
                    { src: circle_1 },
                    { src: circle_1 },
                    { src: circle_1 },
                    { src: circle_1 },
                    { src: circle_1 },
                    { src: circle_1 },
                    { src: circle_1 },
                ]
            },
            size: {
                random: true,
                value: {
                    min: 20,
                    max: 50
                }
            }
        },
        detectRetina: true
    }" />
</template>