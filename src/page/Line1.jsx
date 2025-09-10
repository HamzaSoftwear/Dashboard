import { Box } from '@mui/material'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import Header from '../components/Header'









const data=[
  {
    "id": "japan",
    "color": "hsl(302, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 174
      },
      {
        "x": "helicopter",
        "y": 92
      },
      {
        "x": "boat",
        "y": 287
      },
      {
        "x": "train",
        "y": 68
      },
      {
        "x": "subway",
        "y": 38
      },
      {
        "x": "bus",
        "y": 204
      },
      {
        "x": "car",
        "y": 247
      },
      {
        "x": "moto",
        "y": 212
      },
      {
        "x": "bicycle",
        "y": 297
      },
      {
        "x": "horse",
        "y": 69
      },
      {
        "x": "skateboard",
        "y": 269
      },
      {
        "x": "others",
        "y": 263
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(338, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 118
      },
      {
        "x": "helicopter",
        "y": 235
      },
      {
        "x": "boat",
        "y": 72
      },
      {
        "x": "train",
        "y": 15
      },
      {
        "x": "subway",
        "y": 13
      },
      {
        "x": "bus",
        "y": 168
      },
      {
        "x": "car",
        "y": 219
      },
      {
        "x": "moto",
        "y": 50
      },
      {
        "x": "bicycle",
        "y": 79
      },
      {
        "x": "horse",
        "y": 245
      },
      {
        "x": "skateboard",
        "y": 16
      },
      {
        "x": "others",
        "y": 177
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(320, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 67
      },
      {
        "x": "helicopter",
        "y": 165
      },
      {
        "x": "boat",
        "y": 153
      },
      {
        "x": "train",
        "y": 139
      },
      {
        "x": "subway",
        "y": 64
      },
      {
        "x": "bus",
        "y": 220
      },
      {
        "x": "car",
        "y": 109
      },
      {
        "x": "moto",
        "y": 11
      },
      {
        "x": "bicycle",
        "y": 298
      },
      {
        "x": "horse",
        "y": 155
      },
      {
        "x": "skateboard",
        "y": 221
      },
      {
        "x": "others",
        "y": 243
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(89, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 159
      },
      {
        "x": "helicopter",
        "y": 68
      },
      {
        "x": "boat",
        "y": 219
      },
      {
        "x": "train",
        "y": 127
      },
      {
        "x": "subway",
        "y": 75
      },
      {
        "x": "bus",
        "y": 185
      },
      {
        "x": "car",
        "y": 284
      },
      {
        "x": "moto",
        "y": 86
      },
      {
        "x": "bicycle",
        "y": 289
      },
      {
        "x": "horse",
        "y": 282
      },
      {
        "x": "skateboard",
        "y": 206
      },
      {
        "x": "others",
        "y": 265
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(253, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 146
      },
      {
        "x": "helicopter",
        "y": 38
      },
      {
        "x": "boat",
        "y": 288
      },
      {
        "x": "train",
        "y": 279
      },
      {
        "x": "subway",
        "y": 125
      },
      {
        "x": "bus",
        "y": 255
      },
      {
        "x": "car",
        "y": 150
      },
      {
        "x": "moto",
        "y": 148
      },
      {
        "x": "bicycle",
        "y": 61
      },
      {
        "x": "horse",
        "y": 67
      },
      {
        "x": "skateboard",
        "y": 150
      },
      {
        "x": "others",
        "y": 251
      }
    ]
  }
]
  

export const Line1 = (isDash=false) => {
  return (
    <Box sx={{height:isDash ? "400px":"75vh"}}>
          <Header title={"Line"} subtitle={"welcome in Line"}/>

<ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:isDash?null: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend:isDash?null: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
   </Box>
  )
}
