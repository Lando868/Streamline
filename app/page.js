import Navigation from "@/components/Navigation";
import Landing from "@/components/Landing";
import Link from "next/link";
import Presentation from "@components/Presentation";
import '@styles/presentation.css';



export default function Home() {
  return (
    <div className="presentation-landing">
      <div>
        <Presentation />
      </div>

      {/* <div>
        <Landing />
      </div> */}
    </div>
  )
}

