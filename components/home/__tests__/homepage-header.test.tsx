import React from "react";

import { render, screen } from "@testing-library/react";
import { HomepageHeader } from "../homepage-header";

describe("HomepageHeader", () => {
  it("renders the header image", () => {
    render(<HomepageHeader />);

    const headerImage = screen.getByAltText("WargaBantuWarga background");

    expect(headerImage).toBeInTheDocument();
    expect(headerImage).toMatchInlineSnapshot(`
<img
  alt="WargaBantuWarga background"
  decoding="async"
  sizes="100vw"
  src="https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_3840,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c"
  srcset="https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_640,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 640w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_750,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 750w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_828,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 828w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1080,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 1080w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1200,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 1200w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_1920,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 1920w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_2048,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 2048w, https://res.cloudinary.com/wargabantuwarga/image/upload/c_scale,w_3840,q_90,cs_tinysrgb,f_auto/v1627049958/hero_banner_desktop_zat71c 3840w"
  style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; filter: blur(20px); background-size: cover; background-image: url(data:image/png;base64,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);"
/>
`);
  });

  it("renders the title and description text correctly", () => {
    render(<HomepageHeader />);

    const [titleText, descriptionText] = screen.getAllByText(/warga/i);

    expect(titleText).toHaveTextContent("WargaBantuWarga");
    expect(descriptionText).toHaveTextContent(
      "Inisiatif warga untuk berbagi informasi dan membantu warga yang terdampak Covid-19.",
    );
  });
});
