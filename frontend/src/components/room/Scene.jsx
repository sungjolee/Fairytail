import React from 'react';
import {useNavigate} from 'react-router-dom';
import useSpline from '@splinetool/r3f-spline';
import {OrthographicCamera} from '@react-three/drei';

//route
import {
  globe,
  vr,
  messageList,
  messageCreate,
  settings,
} from '../../apis/router.ts';

export default function Scene({...props}) {
  const {nodes, materials} = useSpline(
    'https://prod.spline.design/vJDvQPYhf1hBmzxY/scene.splinecode',
  );

  const navigate = useNavigate();
  const moveGlobe = () => navigate(globe());
  const moveVR = () => navigate(vr());
  const moveMessage = () => navigate(messageList());
  const moveCreate = () => navigate(messageCreate());
  const moveSettings = () => navigate(settings());

  return (
    <>
      <color attach="background" args={['#d9d7f3']} />
      <group {...props} dispose={null}>
        <group
          name="lowpoly_fox"
          position={[-152.44, -236.63, -174.04]}
          rotation={[0, -0.17, 0]}
          scale={0.31}>
          <group name="black" position={[7.66, 54.04, 197.16]}>
            <mesh
              name="Subdiv 7"
              geometry={nodes['Subdiv 7'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[28.75, -23.33, 33.73]}
              rotation={[0.19, 0.98, 0.17]}
              scale={[1.33, 1.44, 1.33]}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[-49.08, -34.52, -9.47]}
              rotation={[0.71, -0.58, 0.49]}
              scale={[1.33, 1.43, 1.34]}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[1.71, 12, 17.6]}
              rotation={[0, 0, 0.27]}
              scale={[1, 0.91, 1]}
            />
          </group>
          <group name="brown" position={[8.83, -17.62, 105.48]}>
            <mesh
              name="Subdiv 8"
              geometry={nodes['Subdiv 8'].geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[-63.03, -232.25, -166.95]}
              rotation={[-1.01, -0.9, -0.2]}
              scale={1.03}
            />
            <mesh
              name="Subdiv 71"
              geometry={nodes['Subdiv 71'].geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[94.25, -232.12, -181.59]}
              rotation={[-0.56, 0, 0.7]}
              scale={1.04}
            />
            <mesh
              name="Subdiv 5"
              geometry={nodes['Subdiv 5'].geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[99.79, -138.1, 9.27]}
              rotation={[-1.57, 0, 0.7]}
              scale={1.02}
            />
            <mesh
              name="Subdiv 4"
              geometry={nodes['Subdiv 4'].geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[-24.21, -192.4, 19.74]}
              rotation={[-0.5, 0, 0]}
              scale={1.04}
            />
            <mesh
              name="Subdiv"
              geometry={nodes.Subdiv.geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[-140.83, 186.23, -105.12]}
              rotation={[0, 0, 0.27]}
              scale={1}
            />
            <mesh
              name="Subdiv1"
              geometry={nodes.Subdiv1.geometry}
              material={materials.brown}
              castShadow
              receiveShadow
              position={[68.79, 244.16, -110.56]}
              rotation={[0, 0, 0.27]}
              scale={[-1, 1, 1]}
            />
          </group>
          <group name="orange" position={[6.74, 14.58, -7.45]}>
            <mesh
              name="Subdiv 81"
              geometry={nodes['Subdiv 81'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[-62.09, -264.82, -52.44]}
              rotation={[-1.01, -0.9, -0.2]}
              scale={1}
            />
            <mesh
              name="Subdiv 72"
              geometry={nodes['Subdiv 72'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[97.69, -264.82, -66.42]}
              rotation={[-0.56, 0, 0.7]}
              scale={1}
            />
            <mesh
              name="Subdiv2"
              geometry={nodes.Subdiv2.geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[102.65, -169.36, 123.12]}
              rotation={[-1.57, 0, 0.7]}
              scale={1}
            />
            <mesh
              name="Cube 4"
              geometry={nodes['Cube 4'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[-22.12, -226.84, 133.88]}
              rotation={[-0.5, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[-138.74, 154.03, -1.02]}
              rotation={[0, 0, 0.27]}
              scale={1}
            />
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[70.88, 211.95, -1.02]}
              rotation={[0, 0, 0.27]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[-8.68, 91.41, 47.48]}
              rotation={[0, 0, 0.27]}
              scale={1}
            />
            <mesh
              name="Subdiv 3"
              geometry={nodes['Subdiv 3'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[-77.83, -231.63, -141.3]}
            />
            <mesh
              name="Cube 22"
              geometry={nodes['Cube 22'].geometry}
              material={materials.orange}
              castShadow
              receiveShadow
              position={[15.25, -145.2, 36.48]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1.69}
            />
          </group>
          <group name="grey" position={[-13.01, 131.86, 151.06]}>
            <mesh
              name="Subdiv 2"
              geometry={nodes['Subdiv 2'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[-56.74, -28.76, 11.92]}
              rotation={[2.75, 0.15, 2.83]}
              scale={[1, 1.02, 1.09]}
            />
            <mesh
              name="Sphere 2"
              geometry={nodes['Sphere 2'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[65.04, 9.2, 2.84]}
              rotation={[-0.41, 0.08, 0.26]}
              scale={[1, 1.02, 1.09]}
            />
          </group>
          <group name="white" position={[0, -67.41, 53.28]}>
            <mesh
              name="Subdiv 6"
              geometry={nodes['Subdiv 6'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[22, -63.21, -24.25]}
              rotation={[0, Math.PI / 2, 0]}
              scale={1.69}
            />
            <mesh
              name="Subdiv3"
              geometry={nodes.Subdiv3.geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-2.21, 174.39, -13.34]}
              rotation={[0, 0, 0.27]}
              scale={1.01}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials.white}
              castShadow
              receiveShadow
              position={[-71.09, -149.64, -202.03]}
            />
          </group>
        </group>
        <group
          name="object_telescope"
          position={[365, -180, 68]}
          rotation={[-Math.PI, 0.93, -Math.PI]}
          scale={[0.36, 0.37, 0.36]}>
          <mesh
            name="topfrontpiece"
            geometry={nodes.topfrontpiece.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[-305.35, 280.31, 3.01]}
            rotation={[0, 0, 1.15]}
            scale={1.27}
          />
          <group name="baselegs" position={[85.67, -387.49, 0]}>
            <mesh
              name="Cylinder 15"
              geometry={nodes['Cylinder 15'].geometry}
              material={materials.blackparts}
              castShadow
              receiveShadow
              position={[-5.46, 0, -227.53]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            />
            <mesh
              name="Cylinder 13"
              geometry={nodes['Cylinder 13'].geometry}
              material={materials.blackparts}
              castShadow
              receiveShadow
              position={[-5.46, 0, 227.53]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            />
            <mesh
              name="Cylinder 14"
              geometry={nodes['Cylinder 14'].geometry}
              material={materials.blackparts}
              castShadow
              receiveShadow
              position={[204.74, 0, 2.89]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            />
            <mesh
              name="Cylinder 12"
              geometry={nodes['Cylinder 12'].geometry}
              material={materials.blackparts}
              castShadow
              receiveShadow
              position={[-204.74, 0, 2.89]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.29}
            />
          </group>
          <mesh
            name="backleg"
            geometry={nodes.backleg.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[191.18, -238.26, 5.6]}
            rotation={[0.01, 0, 0.63]}
            scale={[0.34, 0.07, 0.34]}
          />
          <mesh
            name="frontleg"
            geometry={nodes.frontleg.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[-27.39, -237.91, 1.82]}
            rotation={[-0.02, -0.02, -0.59]}
            scale={[0.34, 0.07, 0.34]}
          />
          <mesh
            name="leg_r"
            geometry={nodes.leg_r.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[78.98, -240.42, -121.86]}
            rotation={[0.66, 0.01, 0.01]}
            scale={[0.34, 0.07, 0.34]}
          />
          <mesh
            name="leg_l"
            geometry={nodes.leg_l.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[79, -242.09, 126.12]}
            rotation={[-0.65, -0.01, 0.01]}
            scale={[0.34, 0.07, 0.34]}
          />
          <mesh
            name="centerleg"
            geometry={nodes.centerleg.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[77.03, -129.01, 2.64]}
            rotation={[0, 0, 0.02]}
            scale={[0.34, 0.07, 0.34]}
          />
          <mesh
            name="legjoint"
            geometry={nodes.legjoint.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[75.66, -90.99, 2.64]}
            rotation={[0, 0, 0.02]}
            scale={[1, 0.62, 1]}
          />
          <mesh
            name="highpieceadjustment"
            geometry={nodes.highpieceadjustment.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[72.4, 22.63, 2.37]}
            rotation={[0, 0, 0.02]}
            scale={0.38}
          />
          <mesh
            name="screw2"
            geometry={nodes.screw2.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[86.38, 71.72, -54.36]}
            rotation={[-0.35, 0.15, 1.18]}
            scale={[0.21, 0.21, 0.06]}
          />
          <mesh
            name="screw1"
            geometry={nodes.screw1.geometry}
            material={materials.whiteparts}
            castShadow
            receiveShadow
            position={[86.67, 72.38, 57.11]}
            rotation={[0.36, -0.16, 1.18]}
            scale={[0.21, 0.21, 0.06]}
          />
          <mesh
            name="sphericsupport"
            geometry={nodes.sphericsupport.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[72.82, 25.77, 2.28]}
            rotation={[0, 0, 1.15]}
            scale={0.48}
          />
          <mesh
            name="supportpiece"
            geometry={nodes.supportpiece.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[73.87, 44.46, 1.5]}
            rotation={[0, 0, 1.15]}
            scale={[0.13, 0.4, 1]}
          />
          <mesh
            name="littleglass"
            geometry={nodes.littleglass.geometry}
            material={materials.glass}
            castShadow
            receiveShadow
            position={[420.77, -34.51, 1.91]}
            rotation={[0.23, -0.1, 1.17]}
            scale={[0.19, 0.03, 0.19]}
          />
          <mesh
            name="glass"
            geometry={nodes.glass.geometry}
            material={materials.glass}
            castShadow
            receiveShadow
            position={[-354.7, 305.88, 1.23]}
            rotation={[0.23, -0.1, 1.17]}
            scale={[1.06, 0.17, 1.06]}
          />
          <mesh
            name="centerpiece"
            geometry={nodes.centerpiece.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[224.86, 49.33, 1.98]}
            rotation={[0, 0, 1.15]}
            scale={[0.84, 0.5, 0.84]}
          />
          <mesh
            name="peephole"
            geometry={nodes.peephole.geometry}
            material={materials.blackparts}
            castShadow
            receiveShadow
            position={[414.77, -33.12, 1.47]}
            rotation={[0, 0, 1.15]}
            scale={0.35}
          />
          <mesh
            name="basetelescope"
            geometry={nodes.basetelescope.geometry}
            material={materials.redparts}
            castShadow
            receiveShadow
            position={[143.23, 84.87, 1.69]}
            rotation={[0, 0, 1.16]}
            scale={0.54}
          />
          <mesh
            name="body"
            geometry={nodes.body.geometry}
            material={materials.redparts}
            castShadow
            receiveShadow
            position={[-280.33, 270.97, 1.69]}
            rotation={[0, 0, 1.16]}
            scale={1.02}
            onClick={() => moveVR()}
          />
        </group>
        <group
          name="book"
          position={[306, 309.28, -28.13]}
          rotation={[0.09, 0.36, -0.26]}
          scale={0.34}>
          <mesh
            name="paper"
            geometry={nodes.paper.geometry}
            material={materials.paper}
            castShadow
            receiveShadow
            position={[39.79, 38.2, -9.98]}
            rotation={[0, 0, -Math.PI]}
            scale={[2.81, 2.91, 1.67]}
          />
          <mesh
            name="coverback"
            geometry={nodes.coverback.geometry}
            material={materials.Cover}
            castShadow
            receiveShadow
            position={[2.4, 0, -36.42]}
            rotation={[0, 0, -Math.PI]}
            scale={[2.76, 2.91, 2.79]}
          />
          <mesh
            name="darkpart"
            geometry={nodes.darkpart.geometry}
            material={materials.Cover}
            castShadow
            receiveShadow
            position={[-141.29, 0, -1.26]}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={[3.66, 2.91, 5.27]}
          />
          <mesh
            name="coverfront"
            geometry={nodes.coverfront.geometry}
            material={materials.Cover}
            castShadow
            receiveShadow
            position={[1.72, 0, 36.01]}
            rotation={[0, 0, -Math.PI]}
            scale={[2.76, 2.91, 3.2]}
            onClick={() => moveMessage()}
          />
        </group>
        <group
          name="object_saturno"
          position={[-250.53, 267, 80]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.38}>
          <mesh
            name="ring2"
            geometry={nodes.ring2.geometry}
            material={materials.rings}
            castShadow
            receiveShadow
            position={[0, 1.89, 0]}
            rotation={[1.88, -0.37, 3.1]}
            scale={[4.89, 4.89, 0.79]}
          />
          <mesh
            name="ring1"
            geometry={nodes.ring1.geometry}
            material={materials.rings}
            castShadow
            receiveShadow
            position={[0, 1.89, 0]}
            rotation={[1.88, -0.37, 3.1]}
            scale={[3.77, 3.77, 0.61]}
          />
          <mesh
            name="saturno"
            geometry={nodes.saturno.geometry}
            material={materials.planet}
            castShadow
            receiveShadow
            position={[2.5, 0, -3.31]}
            rotation={[0.22, 0.04, -0.37]}
            scale={2.26}
            onClick={() => moveGlobe()}
          />
        </group>
        <group name="bell" position={[-197.66, 3, 63.91]} scale={0.19}>
          <mesh
            name="handle"
            geometry={nodes.handle.geometry}
            material={materials.pendul}
            castShadow
            receiveShadow
            position={[31.38, 149.49, -35.35]}
            rotation={[-0.23, 0, -2.37]}
            scale={0.92}
          />
          <mesh
            name="bell1"
            geometry={nodes.bell1.geometry}
            material={materials.bell}
            castShadow
            receiveShadow
            position={[3.27, 16.87, -3.88]}
            rotation={[-0.23, 0, -0.19]}
            scale={2.62}
            onClick={() => moveSettings()}
          />
          <mesh
            name="pendul"
            geometry={nodes.pendul.geometry}
            material={materials.pendul}
            castShadow
            receiveShadow
            position={[-25.43, -108.32, 24.93]}
            rotation={[-0.23, 0, -0.19]}
            scale={0.92}
          />
        </group>
        <group name="object_balloon" position={[-59.18, 405, -48]}>
          <mesh
            name="cord"
            geometry={nodes.cord.geometry}
            material={materials.Untitled}
            castShadow
            receiveShadow
            position={[-0.09, -106.61, 2.08]}
            rotation={[0, 0, -0.04]}
            scale={[0.04, 2.76, 0.04]}
          />
          <mesh
            name="baseballoon"
            geometry={nodes.baseballoon.geometry}
            material={materials.ballon}
            castShadow
            receiveShadow
            position={[4.15, -20.25, 2.36]}
            scale={0.31}
          />
          <mesh
            name="balloon"
            geometry={nodes.balloon.geometry}
            material={materials.ballon}
            castShadow
            receiveShadow
            position={[-17.4, 114.61, -6.75]}
            rotation={[0, 0, 0.14]}
            scale={1.28}
            onClick={() => moveCreate()}
          />
        </group>
        <mesh
          name="Floor"
          geometry={nodes.Floor.geometry}
          material={materials['Floor Material']}
          castShadow
          receiveShadow
          position={[88.52, -329.82, -405.75]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.9}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-3389.844}
          shadow-camera-right={3389.844}
          shadow-camera-top={3389.844}
          shadow-camera-bottom={-3389.844}
          color="#fee5dd"
          position={[-533.7, 668.43, 796.96]}
        />
        <group name="Objects" position={[175.03, 5.04, -190.02]}>
          <group
            name="Chair"
            position={[-78.38, -181.1, 122.81]}
            rotation={[0, -Math.PI / 6, 0]}
            scale={1}>
            <mesh
              name="Cube 31"
              geometry={nodes['Cube 31'].geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[-42.8, -31.85, -48.45]}
              rotation={[0.17, -0.03, -0.17]}
              scale={1}
            />
            <mesh
              name="Cube 32"
              geometry={nodes['Cube 32'].geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[41.57, -32.53, -48.75]}
              rotation={[0.19, -0.09, 0.17]}
              scale={1}
            />
            <mesh
              name="Cube 23"
              geometry={nodes['Cube 23'].geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[-43.1, -34.67, 48.83]}
              rotation={[-0.18, -0.03, -0.17]}
              scale={1}
            />
            <mesh
              name="Cube1"
              geometry={nodes.Cube1.geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[41.74, -34.51, 48.55]}
              rotation={[-0.16, -0.09, 0.17]}
              scale={1}
            />
            <mesh
              name="Cylinder 3"
              geometry={nodes['Cylinder 3'].geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[-0.14, -68.35, 0.22]}
              scale={0.85}
            />
            <mesh
              name="Cylinder 2"
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['Cylinder 2 Material']}
              castShadow
              receiveShadow
              position={[-1.79, 84.88, 0.22]}
              scale={0.85}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.Stool}
              castShadow
              receiveShadow
              position={[-1.79, 93.36, 0.22]}
              scale={0.85}
            />
          </group>
        </group>
        <group
          name="Character"
          position={[65.57, -56.59, 12.79]}
          rotation={[0, -Math.PI / 6, 0]}
          scale={1}>
          <group
            name="head"
            position={[0.3, 274.13, -46.65]}
            rotation={[0.12, -0.01, -0.09]}
            scale={1}>
            <mesh
              name="Cube 15"
              geometry={nodes['Cube 15'].geometry}
              material={materials['Cube 15 Material']}
              castShadow
              receiveShadow
              position={[11.41, -1.05, 29.62]}
              rotation={[0, Math.PI / 9, 0]}
              scale={1}
            />
            <mesh
              name="Cube 14"
              geometry={nodes['Cube 14'].geometry}
              material={materials['Cube 14 Material']}
              castShadow
              receiveShadow
              position={[-21.35, -1.05, 28.72]}
              rotation={[0, -Math.PI / 9, 0]}
              scale={1}
            />
            <mesh
              name="Cube 13"
              geometry={nodes['Cube 13'].geometry}
              material={materials.Eyebrows}
              castShadow
              receiveShadow
              position={[-21.98, 8.29, 29.17]}
              rotation={[-0.04, -0.41, -0.2]}
              scale={1}
            />
            <mesh
              name="Cube 12"
              geometry={nodes['Cube 12'].geometry}
              material={materials.Eyebrows}
              castShadow
              receiveShadow
              position={[12.6, 4.37, 31.35]}
              rotation={[-0.1, 0.28, 0.2]}
              scale={1}
            />
            <mesh
              name="Ellipse 2"
              geometry={nodes['Ellipse 2'].geometry}
              material={materials['Ellipse 2 Material']}
              castShadow
              receiveShadow
              position={[-24.64, -21.51, 23.43]}
              rotation={[0.26, -0.58, 0]}
              scale={1}
            />
            <mesh
              name="Ellipse"
              geometry={nodes.Ellipse.geometry}
              material={materials['Ellipse Material']}
              castShadow
              receiveShadow
              position={[16.55, -20.69, 24.79]}
              rotation={[0.26, 0.56, 0]}
              scale={1}
            />
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials['Cube 9 Material']}
              castShadow
              receiveShadow
              position={[1.3, -27.6, 26.37]}
              rotation={[0.14, -0.46, -2.93]}
              scale={[0.93, 1, 0.67]}
            />
            <mesh
              name="Cube 24"
              geometry={nodes['Cube 24'].geometry}
              material={materials['Cube 24 Material']}
              castShadow
              receiveShadow
              position={[38.89, -9, -6.07]}
              scale={[-1, 1, 1]}
            />
            <mesh
              name="Cube2"
              geometry={nodes.Cube2.geometry}
              material={materials['Cube2 Material']}
              castShadow
              receiveShadow
              position={[-46.02, -12.67, -6.07]}
            />
            <mesh
              name="hair"
              geometry={nodes.hair.geometry}
              material={materials['hair Material']}
              castShadow
              receiveShadow
              position={[-3.26, 39.95, -32.33]}
              rotation={[-Math.PI / 6, 0, 0]}
              scale={[1.04, 1, 1]}
            />
            <mesh
              name="Sphere 21"
              geometry={nodes['Sphere 21'].geometry}
              material={materials['Sphere 21 Material']}
              castShadow
              receiveShadow
              position={[-2.88, -8.51, -8.67]}
            />
          </group>
          <group
            name="Glasses"
            position={[-1.71, 274.53, -50.15]}
            rotation={[0.22, -0.02, -0.05]}
            scale={1.22}>
            <mesh
              name="Cylinder1"
              geometry={nodes.Cylinder1.geometry}
              material={materials['Cylinder1 Material']}
              castShadow
              receiveShadow
              position={[0.06, 5.4, 33.96]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              name="Cube 33"
              geometry={nodes['Cube 33'].geometry}
              material={materials['Cube 33 Material']}
              castShadow
              receiveShadow
              position={[33.6, 1.21, 30.85]}
              rotation={[0, 1.4, 0]}
              scale={1}
            />
            <mesh
              name="Cube 25"
              geometry={nodes['Cube 25'].geometry}
              material={materials['Cube 25 Material']}
              castShadow
              receiveShadow
              position={[-33, 0.81, 30.81]}
              rotation={[-Math.PI, 1.4, -Math.PI]}
              scale={1}
            />
            <mesh
              name="Torus 2"
              geometry={nodes['Torus 2'].geometry}
              material={materials['Torus 2 Material']}
              castShadow
              receiveShadow
              position={[18.4, 0.83, 33.98]}
              rotation={[0, 0, -0.02]}
              scale={1}
            />
            <mesh
              name="Torus"
              geometry={nodes.Torus.geometry}
              material={materials['Torus Material']}
              castShadow
              receiveShadow
              position={[-17.94, 1.59, 33.98]}
              rotation={[0, 0, -0.02]}
              scale={1}
            />
          </group>
          <group
            name="computer"
            position={[20.2, 130.01, 34.64]}
            rotation={[-2.95, -0.21, -3.09]}
            scale={[0.56, 0.61, 0.61]}>
            <mesh
              name="computerScreen"
              geometry={nodes.computerScreen.geometry}
              material={materials['computerScreen Material']}
              castShadow
              receiveShadow
              position={[0, 4.2, -71.3]}
              rotation={[-0.17, 0, 0]}
              scale={1}
            />
            <mesh
              name="computerTrackpad"
              geometry={nodes.computerTrackpad.geometry}
              material={materials['computerTrackpad Material']}
              castShadow
              receiveShadow
              position={[0, -66.01, 62.64]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.83}
            />
            <mesh
              name="computerKeyboard"
              geometry={nodes.computerKeyboard.geometry}
              material={materials['computerKeyboard Material']}
              castShadow
              receiveShadow
              position={[0, -62.82, -3.88]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.83}
            />
            <mesh
              name="computerBodyBottom"
              geometry={nodes.computerBodyBottom.geometry}
              material={materials['computerBodyBottom Material']}
              castShadow
              receiveShadow
              position={[0, -66.85, 15.84]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="computerBodyTop"
              geometry={nodes.computerBodyTop.geometry}
              material={materials['computerBodyTop Material']}
              castShadow
              receiveShadow
              position={[0, -0.24, -76.29]}
              rotation={[-0.17, 0, 0]}
              scale={1}
            />
          </group>
          <group
            name="Group 5"
            position={[-29.31, -168.52, 15.44]}
            rotation={[0.87, 0, 0.26]}
            scale={[1.8, 1.76, 1.71]}>
            <mesh
              name="Torus 21"
              geometry={nodes['Torus 21'].geometry}
              material={materials['Torus 21 Material']}
              castShadow
              receiveShadow
              position={[0.03, -7.05, 7.24]}
              rotation={[0, 0, -0.61]}
              scale={1}
            />
            <mesh
              name="Torus1"
              geometry={nodes.Torus1.geometry}
              material={materials['Torus1 Material']}
              castShadow
              receiveShadow
              position={[0, -5.6, 2.14]}
              rotation={[0, 0, -Math.PI / 4]}
              scale={1}
            />
            <mesh
              name="Cube 41"
              geometry={nodes['Cube 41'].geometry}
              material={materials['Cube 41 Material']}
              castShadow
              receiveShadow
              position={[0.03, -5.56, -27.01]}
              rotation={[Math.PI, 0, 0]}
              scale={0.9}
            />
            <mesh
              name="Cube 34"
              geometry={nodes['Cube 34'].geometry}
              material={materials['Sneakers white']}
              castShadow
              receiveShadow
              position={[-0.5, -10.06, 16.62]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube 26"
              geometry={nodes['Cube 26'].geometry}
              material={materials['Sneakers blue']}
              castShadow
              receiveShadow
              position={[-0.4, -9.73, 0.39]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes['Rectangle 2'].geometry}
              material={materials['Sneakers white']}
              castShadow
              receiveShadow
              position={[-0.45, -20.06, -0.01]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group
            name="Group 4"
            position={[28.78, -238.18, 130.7]}
            rotation={[-0.09, 0, 0]}
            scale={[1.8, 1.66, 1.8]}>
            <mesh
              name="Torus 22"
              geometry={nodes['Torus 22'].geometry}
              material={materials['Torus 22 Material']}
              castShadow
              receiveShadow
              position={[0.03, -7.05, 7.24]}
              rotation={[0, 0, -0.61]}
              scale={1}
            />
            <mesh
              name="Torus2"
              geometry={nodes.Torus2.geometry}
              material={materials['Torus2 Material']}
              castShadow
              receiveShadow
              position={[0, -5.6, 2.14]}
              rotation={[0, 0, -Math.PI / 4]}
              scale={1}
            />
            <mesh
              name="Cube 42"
              geometry={nodes['Cube 42'].geometry}
              material={materials['Cube 42 Material']}
              castShadow
              receiveShadow
              position={[0.03, -5.56, -27.01]}
              rotation={[Math.PI, 0, 0]}
              scale={0.9}
            />
            <mesh
              name="Cube 35"
              geometry={nodes['Cube 35'].geometry}
              material={materials['Sneakers white']}
              castShadow
              receiveShadow
              position={[-0.5, -10.06, 16.62]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Cube 27"
              geometry={nodes['Cube 27'].geometry}
              material={materials['Sneakers blue']}
              castShadow
              receiveShadow
              position={[-0.4, -9.73, 0.39]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes['Rectangle 21'].geometry}
              material={materials['Sneakers white']}
              castShadow
              receiveShadow
              position={[-0.45, -20.06, -0.01]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <mesh
            name="Cube 11"
            geometry={nodes['Cube 11'].geometry}
            material={materials['Cube 11 Material']}
            castShadow
            receiveShadow
            position={[24.35, 169.23, -43.04]}
            rotation={[-0.72, 0.22, 0.03]}
            scale={[1.48, 0.51, 0.46]}
          />
          <mesh
            name="pen"
            geometry={nodes.pen.geometry}
            material={materials['Plastic blue']}
            castShadow
            receiveShadow
            position={[-51.59, 235.05, -45.23]}
            rotation={[0.48, -0.23, -0.21]}
            scale={1}
          />
          <mesh
            name="裤子"
            geometry={nodes.裤子.geometry}
            material={materials['裤子 Material']}
            castShadow
            receiveShadow
            position={[-3.67, 20.63, -73.2]}
          />
          <mesh
            name="Cube 17"
            geometry={nodes['Cube 17'].geometry}
            material={materials['Cube 17 Material']}
            castShadow
            receiveShadow
            position={[-2.19, 116.88, -71.94]}
            scale={[1, 1, 0.95]}
          />
          <mesh
            name="body1"
            geometry={nodes.body1.geometry}
            material={materials['body1 Material']}
            castShadow
            receiveShadow
            position={[-5.07, 112.17, -71.74]}
          />
        </group>
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.48}
          far={100000}
          near={-100000}
          position={[-63.16, 284.08, 997.19]}
          rotation={[-0.29, -0.14, -0.04]}
          scale={1}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  );
}
