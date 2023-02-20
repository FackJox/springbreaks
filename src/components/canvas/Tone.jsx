import { useLayoutEffect } from "react";
import * as Tone from "tone";

export default function ToneComponent() {

const player = new Tone.Player("/back2motherlandedit.mp3", () => {
  player.loop = true;
  player.autostart = true;
}).toDestination(); // connect our audio to output

const meter = new Tone.Meter(0.8);

player.connect(meter);

console.log(meter)

useLayoutEffect(()=>{
  Tone.start();
})


return (
    <></>
    )
}