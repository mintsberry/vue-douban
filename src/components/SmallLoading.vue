<template>
  <div class="small-loading">
    <svg width="100" height="100">
      <circle class="mouth" cx="50" cy="50" r="14" />
      <circle class="eye" cx="50" cy="50" r="14" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.small-loading {
  text-align: center;
  margin-top: 100px;
}
.mouth {
  fill: none;
  stroke: #aaa;
  stroke-width: 4;
  stroke-dasharray: 44, 44;
  transform-origin: center;
  stroke-linecap: round;
  animation: mounthAni 2.3s ease-out infinite;
}

.eye {
  fill: none;
  stroke: #aaa;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 0, 66;
  transform-origin: center;
  transform: rotate(-45deg);
  animation: eyeAni 2.3s ease-in-out infinite;
}

@keyframes mounthAni {
  40% {
    stroke-dasharray: 44, 22;
  }

  80%,
  100% {
    stroke-dasharray: 44, 44;
    transform: rotate(720deg);
  }
}

@keyframes eyeAni {
  40% {
    stroke-dasharray: 0, 77;
  }

  80%,
  100% {
    transform: rotate(675deg);
    stroke-dasharray: 0, 66;
  }
}
</style>
