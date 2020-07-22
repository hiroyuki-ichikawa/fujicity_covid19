export const single: string = '#006400'
export const double: string[] = ['#006400', '#1B75BC']
export const triple: string[] = ['#00441B', '#006400', '#1B75BC']
export const quadruple: string[] = ['#00441B', '#006400', '#1B75BC', '#505B00']
export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#FFFFFF',
  fillColor: '#006400'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#FFFFFF',
  fillColor: '#1B75BC'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#00441B',
  fillColor: '#00441B'
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
