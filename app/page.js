'use client'

import Image from "next/image";
import Link from "next/link";

// Importing pages
import _Home from '@/app/(components)/_Home'
import _AboutMe from '@/app/(components)/_AboutMe'
import _Projects from '@/app/(components)/_Projects'
import _Playground from '@/app/(components)/_Playground'
import _Contact from '@/app/(components)/_Contact'


export default function Page() {
  return (
      <div className="main container">
          <_Home />
          <_AboutMe />
          <_Projects />
          <_Playground />
          <_Contact />

          <div className={"showScroll"}>
              <div>
                  <button onClick={() => {
                      window.scrollBy(0, 500)
                  }}>scroll down...
                  </button>
              </div>
              <div>
                  <button>scroll down...</button>
              </div>
          </div>
      </div>
  );
}
