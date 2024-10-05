"use client";
//import { LandingNavbar } from "@/ui/LandingNavbar";
import "./LandingPage.css";
import Image from "next/image";
//import { TextCarousel } from "@/ui/TextCarousel";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Home() {
  {
    /*Added Image Array to allow for easy image changes*/
  }
  const ImageData = [
    {
      // Section 1 Logo Image
      imageSrc: "/LandingPage-images/rat_1.png",
      imageAlt: "SqueakPeek Logo",
      imageWidth: 300,
      imageHeight: 300,
    },
    {
      // Section 2 Threads Feature
      imageSrc: "/LandingPage-images/rat_2.png",
      imageAlt: "Two rats speaking",
      imageWidth: 600,
      imageHeight: 300,
    },
    {
      // Section 3 Tracking Feature
      imageSrc: "/LandingPage-images/rat_1.png",
      imageAlt: "Rat looking up",
      imageWidth: 400,
      imageHeight: 400,
    },
    {
      // Section 4 Explore Feature
      imageSrc: "/LandingPage-images/rat_3.png",
      imageAlt: "Rat looking at star",
      imageWidth: 400,
      imageHeight: 400,
    },
  ];

  return (
    <div>
      {/* <LandingNavbar /> Cant be referrenced yet*/}

      {/*Section 1 Block*/}
      <div className="sec1-container">
        <div className="sec1-box">
            
          {/* <TextCarousel className="sec1-text-wheel" /> Cant be referenced yet */}

          <div className="sec1-logo-box">
            <Image
              className="sec1-main-logo"
              src={ImageData[0].imageSrc}
              width={ImageData[0].imageWidth}
              height={ImageData[0].imageHeight}
              alt={ImageData[0].imageAlt}
            />
            <Typography variant="h2">SqueakPeek</Typography>
            <Typography variant="h4">
              Job hunting is hard, we’re here to help.
            </Typography>
          </div>

            <Link href="/signup" className="sec1-Link">
              <Typography variant="h5" sx={{ color: "#496FFF" }}>
                Get Started
              </Typography>
            </Link>

        </div>
      </div>
    </div>
  );
}
