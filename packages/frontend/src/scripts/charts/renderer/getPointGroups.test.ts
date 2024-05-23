import { expect } from 'earl'
import { Point } from './ChartRenderer'
import { getPointGroups } from './getPointGroups'

describe(getPointGroups.name, () => {
  it('should return point groups', () => {
    const points = [
      point(),
      point(),
      point({ dashed: true }),
      point({ dashed: true }),
    ]

    const result = getPointGroups(points)

    expect(result).toEqual([points.slice(0, 2), points.slice(2, 4)])
  })

  it('should handle multiple switches', () => {
    const points = [
      point(),
      point(),
      point({ dashed: true }),
      point({ dashed: true }),
      point(),
      point(),
      point(),
      point(),
      point({ dashed: true }),
      point({ dashed: true }),
      point({ dashed: true }),
      point(),
      point({ dashed: true }),
    ]

    const result = getPointGroups(points)

    expect(result).toEqual([
      points.slice(0, 2),
      points.slice(2, 4),
      points.slice(4, 8),
      points.slice(8, 11),
      points.slice(11, 12),
      points.slice(12, 13),
    ])
  })
})

function point(params?: Partial<Point<unknown>>): Point<unknown> {
  return {
    dashed: false,
    series: [1],
    data: {},
    milestone: undefined,
    ...params,
  }
}
