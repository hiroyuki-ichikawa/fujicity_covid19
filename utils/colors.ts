export const single: string = '#006400'
export const double: string[] = ['#006400', '#1B75BC']
export const triple: string[] = ['#00441B', '#006400', '#1B75BC']
export const quadruple: string[] = ['#00441B', '#006400', '#1B75BC', '#505B00']
export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#1b4d30'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#00a040'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#c5e2c6'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
