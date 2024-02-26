<template>
  <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter
        id="pink"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
1 0 0 0 0
1 0 0 0 0
0 0 0 1 0"
          in="SourceGraphic"
          result="colormatrix"
        />
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          <feFuncR type="table" tableValues="0 0 1 1 1" />
          <feFuncG type="table" tableValues="0 0 0.38 0.38 1" />
          <feFuncB type="table" tableValues="0 0 0.89 0.89 1" />
          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
        <feBlend
          mode="normal"
          in="componentTransfer"
          in2="SourceGraphic"
          result="blend"
        />
      </filter>
    </defs>
  </svg>
</template>
