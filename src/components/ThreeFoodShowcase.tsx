/** 
 * @license 
 * SPDX-License-Identifier: Apache-2.0 
 */ 
 
import { useEffect, useRef, useState } from "react"; 
import * as THREE from "three"; 
import { Camera, Layers, RotateCcw, Sparkles } from "lucide-react"; 
 
export default function ThreeFoodShowcase() { 
  const containerRef = useRef<HTMLDivElement>(null); 
  const [activeDish, setActiveDish] = useState(0); 
 
  const dishes = [ 
    { 
      name: "The Golden Saffron Ramen", 
      nativeName: "極上サフラン和牛ラーメン", 
      ingredients: ["Miyazaki A5 Wagyu", "Saffron Dashi", "24K Gold Leaf", "Organic Shoyu Egg", "Plucked Cozy Petals"], 
      color: 0xc3073f, // Gold 
      description: "Our signature Michelin-calibre creation representing absolute luxury culinary cross-over.", 
      spec: "Served in royal black gold-rimmed ceramic crafted in Kyoto" 
    }, 
    { 
      name: "Golden Matcha Soufflé", 
      nativeName: "金粉宇治抹茶スフレ", 
      ingredients: ["Ceremonial Uji Matcha", "Vanilla Bean Emulsion", "White Chocolate Branches", "Raspberry Caviar"], 
      color: 0x950740, // Matcha Green 
      description: "Feather-light matcha masterpiece rising with golden alignment of heat and technique.", 
      spec: "Baked freshly to order; rises precisely 4cm above the rim" 
    }, 
    { 
      name: "Cozy Royal Shimmering Elixir", 
      nativeName: "桜ロワイヤル・カクテル", 
      ingredients: ["Cozy Botanical Essence", "Elderflower Liqueur", "Champagne Bubbles", "Liquid 24K Gold Sparkles"], 
      color: 0x6f2232, // Cherry Blossom Pink 
      description: "Shimmering, aromatic, and effervescent. It cascades dry ice mist with slow lunar weight.", 
      spec: "Hand-poured at the table inside a certified crystal coupe glass" 
    } 
  ]; 
 
  useEffect(() => { 
    if (!containerRef.current) return; 
 
    const width = containerRef.current.clientWidth; 
    const height = 450; 
 
    // 1. Scene setup 
    const scene = new THREE.Scene(); 
    scene.background = null; // Transparent to blend seamlessly with our CSS backdrop 
 
    // 2. Camera setup 
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000); 
    camera.position.set(0, 2, 8); 
 
    // 3. Renderer setup 
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    renderer.setSize(width, height); 
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    renderer.shadowMap.enabled = true; 
 
    // Clear old canvases 
    containerRef.current.innerHTML = ""; 
    containerRef.current.appendChild(renderer.domElement); 
 
    // 4. Create Luxurious Lighting 
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); 
    scene.add(ambientLight); 
 
    // Dynamic color light that changes according to the active dish 
    const pointLightGold = new THREE.PointLight(dishes[activeDish].color, 5, 20); 
    pointLightGold.position.set(2, 4, 3); 
    scene.add(pointLightGold); 
 
    const pointLightAmbient = new THREE.PointLight(0xc3073f, 2, 15); 
    pointLightAmbient.position.set(-3, -2, 2); 
    scene.add(pointLightAmbient); 
 
    // Front soft light 
    const dirLight = new THREE.DirectionalLight(0xf9f5ee, 1.5); 
    dirLight.position.set(0, 5, 5); 
    scene.add(dirLight); 
 
    // 5. Creating 3D Objects: The Luxury Rotating Base & Dish Geometries 
    const group = new THREE.Group(); 
    scene.add(group); 
 
    // A. Elegant Base Platform (Golden cylinder with layers) 
    const baseGeo = new THREE.CylinderGeometry(2, 2.2, 0.3, 32); 
    const baseMat = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1d, 
      roughness: 0.1, 
      metalness: 0.9, 
      bumpScale: 1 
    }); 
    const baseMesh = new THREE.Mesh(baseGeo, baseMat); 
    baseMesh.position.y = -1.2; 
    group.add(baseMesh); 
 
    // Golden rim for luxury look 
    const rimGeo = new THREE.TorusGeometry(2, 0.05, 16, 100); 
    const rimMat = new THREE.MeshStandardMaterial({ 
      color: 0xc3073f, 
      metalness: 1, 
      roughness: 0.1 
    }); 
    const rimMesh = new THREE.Mesh(rimGeo, rimMat); 
    rimMesh.rotation.x = Math.PI / 2; 
    rimMesh.position.y = -1.05; 
    group.add(rimMesh); 
 
    // B. Floating Ingredient Particles (Wagyu blocks, cozy petals, and pearls) 
    const floatersGroup = new THREE.Group(); 
    group.add(floatersGroup); 
 
    // Constructing multiple floating 3D shapes representing abstract gourmet geometry 
    const particleCount = 28; 
    const floaterGeometries = [ 
      new THREE.SphereGeometry(0.12, 16, 16), // Golden caviar pearls 
      new THREE.TorusGeometry(0.15, 0.05, 8, 24), // Modern decorative glass rings 
      new THREE.ConeGeometry(0.1, 0.25, 4), // Angular geometric spice shards 
      new THREE.BoxGeometry(0.15, 0.15, 0.15), // Elegant gold blocks 
    ]; 
 
    const floaterMaterial = new THREE.MeshStandardMaterial({ 
      color: dishes[activeDish].color, 
      roughness: 0.2, 
      metalness: 0.8, 
    }); 
 
    const floaters: { mesh: THREE.Mesh; speedY: number; amplitude: number; phase: number }[] = []; 
 
    for (let i = 0; i < particleCount; i++) { 
      const geo = floaterGeometries[Math.floor(Math.random() * floaterGeometries.length)]; 
      const customMat = new THREE.MeshStandardMaterial({ 
        color: i % 2 === 0 ? 0xc3073f : dishes[activeDish].color, 
        roughness: 0.3, 
        metalness: 0.9 
      }); 
      const mesh = new THREE.Mesh(geo, customMat); 
 
      // Distribute in a ring around the center 
      const angle = (i / particleCount) * Math.PI * 2; 
      const radius = 1.3 + Math.random() * 0.9; 
      mesh.position.set( 
        Math.cos(angle) * radius, 
        -0.8 + Math.random() * 1.8, 
        Math.sin(angle) * radius 
      ); 
 
      // Random scale 
      const s = 0.5 + Math.random() * 0.8; 
      mesh.scale.set(s, s, s); 
 
      floatersGroup.add(mesh); 
      floaters.push({ 
        mesh, 
        speedY: 0.01 + Math.random() * 0.02, 
        amplitude: 0.1 + Math.random() * 0.2, 
        phase: Math.random() * Math.PI * 2 
      }); 
    } 
 
    // C. Elegant Center Masterpiece (A stylized glowing geometric dish dome) 
    const domeGeo = new THREE.IcosahedronGeometry(0.9, 1); 
    const domeMat = new THREE.MeshStandardMaterial({ 
      color: dishes[activeDish].color, 
      roughness: 0.1, 
      metalness: 0.9, 
      wireframe: true 
    }); 
    const domeMesh = new THREE.Mesh(domeGeo, domeMat); 
    domeMesh.position.y = -0.1; 
    group.add(domeMesh); 
 
    // Inside decorative solid gem 
    const gemGeo = new THREE.OctahedronGeometry(0.4, 0); 
    const gemMat = new THREE.MeshStandardMaterial({ 
      color: 0xf9f5ee, 
      roughness: 0.2, 
      metalness: 0.9 
    }); 
    const gemMesh = new THREE.Mesh(gemGeo, gemMat); 
    gemMesh.position.y = -0.1; 
    group.add(gemMesh); 
 
    // 6. Interactive Mouse Tracking 
    const mouse = { x: 0, y: 0 }; 
    const target = { x: 0, y: 0 }; 
 
    const handleMouseMove = (event: MouseEvent) => { 
      const rect = renderer.domElement.getBoundingClientRect(); 
      mouse.x = ((event.clientX - rect.left) / width) * 2 - 1; 
      mouse.y = -((event.clientY - rect.top) / height) * 2 + 1; 
    }; 
 
    window.addEventListener("mousemove", handleMouseMove); 
 
    // 7. Animation Loop 
    let animationFrameId: number; 
    let clock = new THREE.Clock(); 
 
    const animate = () => { 
      animationFrameId = requestAnimationFrame(animate); 
 
      const elapsedTime = clock.getElapsedTime(); 
 
      // Slow base rotation representing a gourmet stage (food showcase) 
      group.rotation.y = elapsedTime * 0.25; 
 
      // Animate dome elements 
      domeMesh.rotation.y = elapsedTime * -0.5; 
      domeMesh.rotation.x = Math.sin(elapsedTime * 0.2) * 0.3; 
      gemMesh.rotation.y = elapsedTime * 0.8; 
      gemMesh.rotation.z = Math.cos(elapsedTime * 0.4) * 0.2; 
 
      // Vertical floating motion for ingredients 
      floaters.forEach((floater, i) => { 
        floater.mesh.position.y += Math.sin(elapsedTime * 2 + floater.phase) * 0.003; 
        floater.mesh.rotation.x += 0.01; 
        floater.mesh.rotation.y += 0.008; 
      }); 
 
      // Camera follow mouse softly 
      target.x += (mouse.x * 1.5 - target.x) * 0.05; 
      target.y += (mouse.y * 0.8 - target.y) * 0.05; 
 
      camera.position.x = target.x; 
      camera.position.y = 2 + target.y; 
      camera.lookAt(new THREE.Vector3(0, 0, 0)); 
 
      renderer.render(scene, camera); 
    }; 
 
    animate(); 
 
    // 8. Responsive Resize 
    const handleResize = () => { 
      if (!containerRef.current) return; 
      const w = containerRef.current.clientWidth; 
      const h = 450; 
      camera.aspect = w / h; 
      camera.updateProjectionMatrix(); 
      renderer.setSize(w, h); 
    }; 
 
    window.addEventListener("resize", handleResize); 
 
    // Cleanup function 
    return () => { 
      cancelAnimationFrame(animationFrameId); 
      window.removeEventListener("mousemove", handleMouseMove); 
      window.removeEventListener("resize", handleResize); 
      renderer.dispose(); 
    }; 
  }, [activeDish]); 
 
  return ( 
    <section id="specials-cube" className="relative py-24 bg-[#1A1A1D] border-t border-b border-[#F9F5EE]/10 overflow-hidden"> 
      {/* Background radial glow */} 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C3073F]/5 blur-[120px] pointer-events-none" /> 
 
      <div className="max-w-7xl mx-auto px-6"> 
        <div className="text-center mb-16"> 
          <span className="text-[#C3073F] font-serif tracking-[0.3em] text-[10px] uppercase block mb-3 italic">Interactive 3D Art</span> 
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase leading-[1.1]"> 
            Rotating Luxury <span className="text-[#C3073F] font-serif italic normal-case tracking-normal">3D Showcases</span> 
          </h2> 
          <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-xs leading-relaxed opacity-80"> 
            Interact with our virtual three-dimensional showcases. Hover to tilt the orbit, rotate the light sources, and explore our fusion geometry. 
          </p> 
        </div> 
 
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"> 
          {/* Dish list picker - 5 columns */} 
          <div className="lg:col-span-5 space-y-4 z-10"> 
            {dishes.map((dish, idx) => ( 
              <button 
                key={idx} 
                id={`dish-trigger-${idx}`} 
                onClick={() => setActiveDish(idx)} 
                className={`w-full text-left p-6 rounded-none transition-all duration-500 border relative group cursor-pointer ${ 
                  activeDish === idx 
                    ? "bg-[#1A1A1D]/80 border-[#C3073F]/50 shadow-[0_0_20px_rgba(195,7,63,0.05)]" 
                    : "bg-[#4E4E50]/10 border-[#F9F5EE]/10 hover:border-[#4E4E50]" 
                }`} 
              > 
                {/* Active glow pointer */} 
                {activeDish === idx && ( 
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C3073F]" /> 
                )} 
 
                <div className="flex justify-between items-start"> 
                  <div> 
                    <span className="text-[8px] font-mono uppercase border border-[#C3073F]/30 text-[#C3073F] px-2.5 py-0.5 rounded-none tracking-widest"> 
                      0{idx + 1} / FEATURED 
                    </span> 
                    <h3 className="text-lg font-serif text-white mt-3 group-hover:text-[#C3073F] transition-colors duration-300 uppercase tracking-tight"> 
                      {dish.name} 
                    </h3> 
                    <p className="text-[10px] text-neutral-500 font-mono tracking-wider mt-0.5">{dish.nativeName}</p> 
                  </div> 
                  {activeDish === idx && ( 
                    <Sparkles className="w-4 h-4 text-[#C3073F] animate-pulse mt-1" /> 
                  )} 
                </div> 
 
                <p className="text-xs text-neutral-400 mt-3 line-clamp-2 leading-relaxed opacity-80"> 
                  {dish.description} 
                </p> 
 
                {activeDish === idx && ( 
                  <div className="mt-4 pt-4 border-t border-[#F9F5EE]/10 flex justify-between items-center text-[10px] text-[#C3073F] font-mono tracking-wide"> 
                    <span>{dish.spec}</span> 
                    <div className="flex items-center gap-1 opacity-80"> 
                      <RotateCcw className="w-3 h-3 animate-spin" /> 
                      <span>Interactive 3D Stage</span> 
                    </div> 
                  </div> 
                )} 
              </button> 
            ))} 
          </div> 
 
          {/* 3D Canvas Showcase - 7 columns */} 
          <div className="lg:col-span-7 relative bg-[#4E4E50]/40 border border-[#F9F5EE]/10 rounded-none p-6 min-h-[480px] flex flex-col justify-between overflow-hidden shadow-2xl"> 
            {/* Top decorative specs */} 
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 tracking-widest"> 
              <span className="flex items-center gap-1.5 uppercase"> 
                <span className="w-1.5 h-1.5 bg-[#C3073F] inline-block" /> 
                Live 3D Geometry Server 
              </span> 
              <span className="uppercase text-[#C3073F]">Miyazaki Alignment [OK]</span> 
            </div> 
 
            {/* Canvas Container */} 
            <div ref={containerRef} className="w-full h-[350px] relative cursor-grab active:cursor-grabbing flex justify-center items-center"> 
              <span className="text-[#4E4E50] font-mono text-xs uppercase tracking-widest">Aligning WebGL Matrix...</span> 
            </div> 
 
            {/* Footer specifications showing active ingredients */} 
            <div className="border-t border-[#F9F5EE]/10 pt-4 mt-auto"> 
              <div className="flex flex-wrap gap-2 items-center"> 
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mr-2">Key ingredients:</span> 
                {dishes[activeDish].ingredients.map((ing, i) => ( 
                  <span 
                    key={i} 
                    className="text-[9px] font-mono text-neutral-300 bg-[#4E4E50]/30 border border-[#F9F5EE]/10 px-3 py-1 rounded-none uppercase tracking-wider group hover:border-[#C3073F]/20" 
                  > 
                    ✦ {ing} 
                  </span> 
                ))} 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}