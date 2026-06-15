import{l as e,n as t,o as n,t as r}from"./styled-components.browser.esm-Ck8nA2i9.js";import{t as i}from"./index-sCGuv_6W.js";import{D as a,b as o,gn as s,n as c,u as l,vt as u,wt as d}from"./extends-DH0y4ePN.js";import{i as f,n as p,r as m,t as h}from"./autoFit-qUbRd7jG.js";import{a as g,o as _}from"./tslib.es6-BCuB9ZI1.js";import{a as v,i as y,n as b,r as x,t as S}from"./leva.esm-HOV7_8lP.js";import{t as C}from"./Center-DNXI7W8O.js";var w=e(n(),1),T=t(),E=()=>(0,T.jsx)(`ambientLight`,{intensity:x({intensity:{label:`Ambient light`,value:2.8,min:0,max:10}}).intensity}),D=()=>(0,T.jsx)(`pointLight`,{intensity:x({intensity1:{label:`Point light`,value:950,min:0,max:2e3}}).intensity1,position:[-5,20,0],distance:50}),O=_()(m(e=>({newStyle:!1,pureMode:!1,toggleMapStyle:()=>e(e=>({newStyle:!e.newStyle})),togglePureMode:()=>e(e=>({pureMode:!e.pureMode}))}))),k=r.button`
  position: relative;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: ${({$color:e})=>`conic-gradient(from 0deg, ${e?.join(`, `)??`#aca891, #6e918c`})`};
    z-index: -2;
    filter: blur(10px);
    transform: rotate(0deg);
    transition: transform 1.5s ease-in-out;
  }

  &:hover::before {
    transform: rotate(180deg);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: rgba(255, 245, 232, 0.94);
    border-radius: 47px;
    z-index: -1;
    filter: blur(5px);
  }

  &:active {
    transform: scale(0.99);
  }
`,A=r.div`
  color: transparent;
  background: ${({$color:e})=>`conic-gradient(from 0deg, ${e?.join(`, `)??`#aca891, #6e918c`})`};
  background-clip: text;
`;function j(e){let{children:t,$color:n,...r}=e??{};return(0,T.jsx)(k,{$color:n,...r,children:(0,T.jsx)(A,{$color:n,children:t})})}var M=r.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(transparent 58%, rgba(255, 255, 255, 0.82));
  transition: opacity 0.8s;
`,N=r.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 20px;
  padding: 20px;
`,P=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: #4b3f39;
  pointer-events: auto;
  background: rgba(255, 245, 232, 0.72);
  border: 1px solid rgba(255, 145, 0, 0.3);
  border-radius: 4px;
  padding: 14px;
  backdrop-filter: blur(4px);
  box-shadow: 0 14px 36px rgba(135, 84, 20, 0.12);
  z-index: 2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  &::before {
    top: -1px;
    left: -1px;
    border-top: 2px solid #ea580c;
    border-left: 2px solid #ea580c;
  }

  &::after {
    right: -1px;
    bottom: -1px;
    border-right: 2px solid #ea580c;
    border-bottom: 2px solid #ea580c;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`,F=r.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #3d312b;
  padding: 0 20px;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;

  span {
    margin-top: 6px;
    color: rgba(61, 49, 43, 0.58);
    font-size: 13px;
    font-weight: 500;
  }
`,I=r(P)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,L=r.div`
  margin-bottom: 10px;
  padding-left: 12px;
  border-left: 5px solid #fdb961;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5a4a42;
  font-size: 23px;
  font-weight: 700;

  span {
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    font-weight: 500;
  }
`,R=r.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  color: #4b3f39;
  font-size: 19px;
  line-height: 1.48;
`,z=r.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 14px;
  align-items: start;
  padding: 11px 14px;
  border: 1px solid rgba(234, 88, 12, 0.12);
  background: rgba(255, 255, 255, 0.32);
  border-radius: 4px;

  strong {
    display: block;
    margin-bottom: 4px;
    color: #3d312b;
    font-size: 20px;
  }

  span:last-child {
    color: rgba(61, 49, 43, 0.68);
    font-size: 16px;
  }
`,B=r.span`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(180deg, #fdb961, #ea580c);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 800;
`,V=r.div`
  position: absolute;
  pointer-events: auto;
  bottom: 20px;
  left: 50%;
  display: flex;
  gap: 20px;
`;function H({items:e}){return(0,T.jsx)(R,{children:e.map(e=>(0,T.jsxs)(z,{children:[(0,T.jsx)(B,{children:e.badge}),(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`strong`,{children:e.title}),(0,T.jsx)(`span`,{children:e.text})]})]},e.title))})}function U(){let e=(0,w.useRef)(null),t=p(`toBottom`,.6,1),n=p(`toRight`,.8,1.5),r=p(`toRight`,.8,1.5),i=p(`toLeft`,.8,1.5),a=p(`toLeft`,.8,1.5),o=p(`toTop`,.8,1.5,`translateX(-50%)`),s=O(e=>e.togglePureMode),c=O(e=>e.toggleMapStyle);return(0,w.useEffect)(()=>{let s=!0;o.restart(s);let c=O.subscribe(e=>e.pureMode,o=>{o?(t.reverse(),n.reverse(),r.reverse(),i.reverse(),a.reverse(),e.current.style.setProperty(`opacity`,`0`)):(t.restart(s),n.restart(s),r.restart(s),i.restart(s),a.restart(s),e.current.style.setProperty(`opacity`,`1`))},{fireImmediately:!0});return s=!1,()=>{s=!0,c()}},[]),(0,T.jsxs)(h,{children:[(0,T.jsx)(M,{ref:e}),(0,T.jsx)(I,{ref:t.ref,children:(0,T.jsxs)(F,{children:[`Contactor 3 Phase`,(0,T.jsx)(`span`,{children:`INTERACTIVE 3D DATA VISUALIZATION`})]})}),(0,T.jsxs)(N,{children:[(0,T.jsxs)(P,{ref:n.ref,style:{gridArea:`1 / 1 / 3 / 2`},children:[(0,T.jsxs)(L,{children:[`Main Power Contacts`,(0,T.jsx)(`span`,{children:`L1 L2 L3 / T1 T2 T3`})]}),(0,T.jsx)(H,{items:[{badge:`3P`,title:`Three-phase switching`,text:`The main contacts connect and disconnect the motor supply lines.`},{badge:`IN`,title:`Line terminals`,text:`L1, L2, L3 receive the incoming three-phase power source.`},{badge:`OUT`,title:`Load terminals`,text:`T1, T2, T3 send power to the motor or three-phase load.`}]})]}),(0,T.jsxs)(P,{ref:r.ref,style:{gridArea:`3 / 1 / 5 / 2`},children:[(0,T.jsxs)(L,{children:[`Auxiliary Contacts`,(0,T.jsx)(`span`,{children:`13-14 / 21-22`})]}),(0,T.jsx)(H,{items:[{badge:`NO`,title:`Normally open contact`,text:`13-14 closes when the contactor coil is energized.`},{badge:`NC`,title:`Normally closed contact`,text:`21-22 opens when the contactor changes state.`},{badge:`FB`,title:`Control feedback`,text:`Used for self-holding, indicator lamps, PLC input, and interlocks.`}]})]}),(0,T.jsxs)(P,{ref:i.ref,style:{gridArea:`1 / 4 / 3 / 5`},children:[(0,T.jsxs)(L,{children:[`Coil Supply Terminals`,(0,T.jsx)(`span`,{children:`A1 / A2`})]}),(0,T.jsx)(H,{items:[{badge:`A1`,title:`Coil input`,text:`A1 receives the control voltage from the start circuit.`},{badge:`A2`,title:`Coil return`,text:`A2 returns to neutral or the second control line.`},{badge:`MAG`,title:`Magnetic action`,text:`When energized, the coil pulls the armature and closes the main contacts.`}]})]}),(0,T.jsxs)(P,{ref:a.ref,style:{gridArea:`3 / 4 / 5 / 5`},children:[(0,T.jsxs)(L,{children:[`Functions and Uses`,(0,T.jsx)(`span`,{children:`MOTOR CONTROL`})]}),(0,T.jsx)(H,{items:[{badge:`RUN`,title:`Remote motor control`,text:`Starts and stops a three-phase motor from push buttons or a PLC.`},{badge:`SAFE`,title:`Protection coordination`,text:`Works with overload relays, fuses, and breakers for safer operation.`},{badge:`REV`,title:`Reversing and interlock`,text:`Two contactors can reverse motor direction with electrical interlocking.`}]})]}),(0,T.jsxs)(V,{ref:o.ref,children:[(0,T.jsx)(j,{onClick:c,children:`Switch Style`}),(0,T.jsx)(j,{onClick:s,children:`Focus Mode`})]})]})]})}var W=`/models/magnetic-contactor.glb`;function G(){let e=(0,w.useRef)(null),t=v(W);return(0,T.jsx)(C,{children:(0,T.jsx)(`object3D`,{ref:e,children:(0,T.jsx)(`primitive`,{object:(0,w.useMemo)(()=>{let e=t.scene.clone(!0),n=new o().setFromObject(e),r=new s,i=new s;n.getSize(r),n.getCenter(i),e.position.sub(i);let a=Math.max(r.x,r.y,r.z),c=a>0?8/a:1;return e.scale.setScalar(c),e.traverse(e=>{if(e instanceof u){e.castShadow=!0,e.receiveShadow=!0;let t=e.material;t instanceof d&&(t.roughness=Math.min(t.roughness+.12,1),t.metalness=Math.max(t.metalness,.05))}}),e},[t.scene])})})})}function K(){return(0,T.jsx)(f,{center:!0,children:(0,T.jsx)(`div`,{style:{color:`#5a4a42`,fontWeight:700,padding:`10px 14px`,border:`1px solid rgba(234, 88, 12, 0.28)`,borderRadius:4,background:`rgba(255, 245, 232, 0.86)`,whiteSpace:`nowrap`},children:`Loading 3D model...`})})}function q(){let e=l(e=>e.camera),t=l(e=>e.scene);return(0,w.useLayoutEffect)(()=>{t.background=new a(`#f6efe7`);let n=i.fromTo(e.position,{x:-8,y:6,z:12},{x:6,y:4,z:10,duration:1.2,ease:`sine.inOut`});return()=>{n.kill()}},[e,t]),(0,T.jsxs)(`group`,{position:[0,-.3,0],children:[(0,T.jsx)(G,{}),(0,T.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-3.1,0],receiveShadow:!0,children:[(0,T.jsx)(`circleGeometry`,{args:[5.6,96]}),(0,T.jsx)(`meshStandardMaterial`,{color:`#f8dec1`,roughness:.85})]})]})}v.preload(W);var J=r.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #f6efe7;
`,Y=r.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`,X=r.div`
  .leva-c-kWgxhW-bCBHqk-fill-false {
    right: 80px;
  }
`;function Z(){let e=x({Grid:b({infiniteGrid:{label:`Show grid`,value:!0},cellColor:{label:`Cell color`,value:`#e7c98e`},sectionColor:{label:`Section color`,value:`#ea580c`}}),GBackground:{label:`Background color`,value:`#f6efe7`}});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(X,{children:(0,T.jsx)(S,{collapsed:!0})}),(0,T.jsxs)(J,{children:[(0,T.jsx)(Y,{children:(0,T.jsxs)(c,{camera:{fov:62},dpr:[1,2],shadows:!0,children:[(0,T.jsx)(`color`,{attach:`background`,args:[e.GBackground]}),(0,T.jsx)(y,{infiniteGrid:e.infiniteGrid,scale:2,cellSize:.3,cellThickness:.6,sectionSize:1.5,sectionThickness:1.5,sectionColor:e.sectionColor,cellColor:e.cellColor,fadeDistance:30}),(0,T.jsx)(E,{}),(0,T.jsx)(D,{}),(0,T.jsx)(`directionalLight`,{castShadow:!0,intensity:2.2,position:[5,8,6],"shadow-mapSize":[1024,1024]}),(0,T.jsx)(w.Suspense,{fallback:(0,T.jsx)(K,{}),children:(0,T.jsx)(q,{})}),(0,T.jsx)(g,{enablePan:!0,enableZoom:!0,enableRotate:!0,zoomSpeed:.3,minDistance:5,maxDistance:18,maxPolarAngle:1.65})]})}),(0,T.jsx)(U,{})]})]})}export{Z as default};