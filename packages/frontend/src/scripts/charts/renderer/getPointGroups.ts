import { Point } from './ChartRenderer'

export function getPointGroups(points: Point<unknown>[]) {
  return points.reduce<Point<unknown>[][]>((acc, point) => {
    const lastGroup = acc.at(-1)
    const lastGroupPoint = lastGroup?.at(-1)

    if (lastGroupPoint?.dashed === point.dashed) {
      lastGroup?.push(point)
    } else {
      acc.push([point])
    }

    return acc
  }, [])
}
