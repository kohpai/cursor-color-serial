import { getMousePos, getPixelColor } from "robotjs"
import SerialPort from "serialport"

const port = new SerialPort("/dev/ttyACM0", { baudRate: 9600 }, (err) => {
  if (err) {
    console.error("openError:", err)
  }
}).setEncoding("utf-8")

async function main() {
  const mousePos = getMousePos()
  const hex = getPixelColor(mousePos.x, mousePos.y)

  port.write(`${hex}\n`)
  const confirm = port.read(6)
  console.log(confirm)
}

setInterval(main, 1000)
// main()
