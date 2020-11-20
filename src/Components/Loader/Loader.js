import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Loader = () => {
  const loading = useSelector(state => state.loaderReducer.loading)
  
  return (
    <AnimatePresence exitBeforeEnter>
      {
        loading &&
        <Container>
          <Left 
            exit={{ x: '-100%' }}
            transition={{duration: 0.7, delay: 0.6}}
          />
          <Right
            exit={{ x: '100%' }}
            transition={{duration: 0.7, delay: 0.6}}
          />

          <Svg initial={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5}} xmlns="http://www.w3.org/2000/svg" width="79.943" height="79.943" viewBox="0 0 79.943 79.943">
            <g id="loader" transform="translate(-347.029 -355.029)">
              <motion.g
                animate={{rotate: 720}}
                transition={{yoyo: Infinity, duration: 1.5, delay: 0.3}}
              >
                <path id="Path_6" data-name="Path 6" d="M39.971,0A39.961,39.961,0,0,1,75.215,58.816c-1.659,3.135,6.64,14.947,4.014,17.688-2.34,2.442-15.549-4.142-18.673-2.243A39.981,39.981,0,1,1,39.971,0Z" transform="translate(347.029 355.029)" fill="#42bbb3"/>
              </motion.g>
              <motion.g
                animate={{rotate: -720}}
                transition={{yoyo: Infinity, duration: 1.5, delay: 0.3}}
              >
              <path id="Path_7" data-name="Path 7" d="M27.729,0A27.722,27.722,0,0,1,52.178,40.8c-1.151,2.175,4.607,10.369,2.785,12.27C53.34,54.766,44.176,50.2,42.009,51.516A27.735,27.735,0,1,1,27.729,0Z" transform="translate(414.729 367.271) rotate(90)" fill="#befffb"/>

              </motion.g>
            </g>
          </Svg>
        </Container>
      }
    </AnimatePresence>
  )
}

export default Loader

const Container = styled(motion.div)`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
const Left = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${({theme}) => theme.darkTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)'};
`
const Right = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background: ${({theme}) => theme.darkTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)'};
`
const Svg = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`