'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

function DockItem({ children, className = '', onClick, mouseX, mouseY, spring, distance, magnification, baseItemSize, orientation = 'horizontal' }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(
    orientation === 'horizontal' ? mouseX : mouseY, 
    val => {
      const rect = ref.current?.getBoundingClientRect() ?? {
        x: 0,
        y: 0,
        width: baseItemSize,
        height: baseItemSize
      };
      return orientation === 'horizontal' 
        ? val - rect.x - baseItemSize / 2 
        : val - rect.y - baseItemSize / 2;
    }
  );

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`cursor-target relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

function DockLabel({ children, className = '', orientation = 'horizontal', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  const isVertical = orientation === 'vertical';
  const labelClasses = ` absolute w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white ${className}`;
  const labelStyle = {
    ...(isVertical 
      ? { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '6px' }
      : { left: '50%', top: 0, transform: 'translateX(-50%)', marginTop: '-24px' })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, ...(isVertical ? { x: 10 } : { y: 10 }) }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, ...(isVertical ? { x: 10 } : { y: 10 }) }}
          transition={{ duration: 0.2 }}
          className={labelClasses}
          role="tooltip"
          style={labelStyle}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }) {
  return <div className={`flex items-center justify-center ${className}`}>{children}</div>;
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
  orientation = 'horizontal' // 'horizontal' or 'vertical'
}) {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const isVertical = orientation === 'vertical';

  const maxSize = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  
  const size = useSpring(
    useTransform(isHovered, [0, 1], [isVertical ? panelHeight : 0, isVertical ? maxSize : 0]),
    spring
  );
  
  const containerClasses = `
    fixed ${isVertical ? 'right-0 top-1/2 -translate-y-1/2 h-auto w-12' : 'bottom-0 left-1/2 -translate-x-1/2'}
    flex ${isVertical ? 'flex-col' : 'flex-row'} items-center justify-center
    px-7 py-3 gap-3  rounded-2xl border-2 border-neutral-700 bg-[#060010]/90 backdrop-blur-md
    shadow-lg z-50 ${className}
  `;

  return (
    <motion.div 
      className={containerClasses}
    //   style={{
    //     [isVertical ? 'height' : 'width']: 'auto',
    //     [isVertical ? 'width' : 'height']: size,
    //   }}
      onMouseMove={({ clientX, clientY }) => {
        isHovered.set(1);
        mouseX.set(clientX);
        mouseY.set(clientY);
      }}
      onMouseLeave={() => {
        isHovered.set(0);
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
      role="toolbar"
      aria-label="Application dock"
      // className="cursor-target"
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          onClick={item.onClick}
          className={item.className}
          mouseX={mouseX}
          mouseY={mouseY}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          orientation={orientation}
        >
          <DockIcon>{item.icon}</DockIcon>
          <DockLabel orientation={orientation}>{item.label}</DockLabel>
        </DockItem>
      ))}
    </motion.div>
  );
}
