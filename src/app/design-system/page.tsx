"use client";

import { PageWrapper } from "../component/layouts/PageWrapper";
import ColorSample from "./components/ColorSample";

import { HeadlineXL, Subheading1, Subheading2, Headline, Body1, Body2, Caption, Label } from "../component/typography";

export default function DesignSystemPage() {
  const colors = [
    { name: "Main", color: "#D5F7BC" },
    { name: "Border", color: "#54360F" },
    { name: "Background", color: "#FFFFFF" },
    { name: "Text", color: "#000000" },
  ];

  return (
    <PageWrapper>
      <main className="ds-container">
      <div className=" bg-gray-50 p-10">
       
        <Headline className="mb-6">Design Palette</Headline>
      <section>
        <Subheading2 className="mb-3 pb-3 border-b-2 border-neutral-400">
          These are the core brand colors used in Chinguverse for layout, borders, and text.
        </Subheading2>

        {/* Color Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((c) => (
            <div
              key={c.name}
              className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div
                className="w-16 h-16 rounded-md mb-4 border"
                style={{ backgroundColor: c.color }}
              />
              <Subheading1>{c.name}</Subheading1>
              <p className="text-sm text-gray-600 mb-2">{c.color}</p>

             <ColorSample color={`bg-[${c.color}]`} value={c.color} />


            </div>
          ))}
        </div>
         </section>
      </div>
       <section>
          <Subheading2 className="mb-3 pb-3 border-b-2 border-neutral-400">
            Typography
          </Subheading2>
          <div className="max-w-3xl flex flex-col gap-4">
            <HeadlineXL>Headline XL</HeadlineXL>
            <Headline>Headline</Headline>
            <Subheading1>Subheading 1</Subheading1>
            <Subheading2>Subheading 2</Subheading2>
            <Body1>
              Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Body1>
            <Body2>
              Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Body2>
            <Caption>Caption - Lorem ipsum dolor sit amet.</Caption>
            <Label>Label - Lorem ipsum dolor sit amet.</Label>
          </div>
        </section>
     
      </main>
    </PageWrapper>
  );
}