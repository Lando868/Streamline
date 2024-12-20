import Navigation from "@/components/Navigation";
import Landing from "@/components/Landing";
import Link from "next/link";
import Presentation from "@components/Presentation";
import '@styles/presentation.css';



export default function Home() {
  const isPresentation = 2; //1 for Presentation, 2 for Landing
  console.log('isPresentation:', isPresentation);
  return (
    <div className="presentation-landing">
        {isPresentation === 1 ? <Presentation /> : <Landing />}
    </div>
  )
}

