{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
import \{ Button \} from "@/components/ui/button";\
import \{ Card, CardContent \} from "@/components/ui/card";\
import \{ Trash2, Plus \} from "lucide-react";\
import \{ motion \} from "framer-motion";\
\
export default function AudioRouting() \{\
  const [devices, setDevices] = useState([\
    \{ id: 1, name: "Microphone", type: "XLR Output" \},\
    \{ id: 2, name: "Headphones", type: "1/4" Input" \},\
    \{ id: 3, name: "Audio Interface", type: "Multiple" \},\
    \{ id: 4, name: "PC", type: "USB Input" \},\
  ]);\
\
  const addDevice = () => \{\
    const newDevice = \{ id: Date.now(), name: "New Device", type: "Custom" \};\
    setDevices([...devices, newDevice]);\
  \};\
\
  const removeDevice = (id) => \{\
    setDevices(devices.filter((device) => device.id !== id));\
  \};\
\
  return (\
    <div className="p-6 space-y-4">\
      <h1 className="text-xl font-bold">Audio Routing Tool</h1>\
      <Button onClick=\{addDevice\} className="flex items-center gap-2">\
        <Plus size=\{16\} /> Add Device\
      </Button>\
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">\
        \{devices.map((device) => (\
          <Card key=\{device.id\} className="relative">\
            <CardContent className="p-4">\
              <p className="font-semibold">\{device.name\}</p>\
              <p className="text-sm text-gray-500">\{device.type\}</p>\
              <Button\
                variant="destructive"\
                size="icon"\
                className="absolute top-2 right-2"\
                onClick=\{() => removeDevice(device.id)\}\
              >\
                <Trash2 size=\{16\} />\
              </Button>\
            </CardContent>\
          </Card>\
        ))\}\
      </div>\
      <div className="mt-6">\
        <p className="text-gray-600">Want to deploy this? Click below:</p>\
        <a\
          href="https://vercel.com/new/import?s=https://github.com/your-username/audio-routing-tool"\
          target="_blank"\
          rel="noopener noreferrer"\
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-2"\
        >\
          Deploy to Vercel\
        </a>\
      </div>\
    </div>\
  );\
\}\
}
