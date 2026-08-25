import svgPaths from "./svg-exii9zecga";

function MainItems() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Main items">
      <div className="content-stretch flex gap-[4px] items-center pr-[16px] relative shrink-0" data-name="Language">
        <div aria-hidden className="absolute border-[#bec0cb] border-r border-solid inset-0 pointer-events-none" />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          NL
        </p>
        <div className="relative shrink-0 size-[16px]" data-name="♣️ End Icon">
          <div className="absolute inset-[28.91%_10.16%_25.78%_10.16%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7499 7.25">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.pe435900} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p344b9a00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Login">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          Inloggen
        </p>
        <div className="relative shrink-0 size-[16px]" data-name="♣️ End Icon">
          <div className="absolute inset-[28.91%_10.16%_25.78%_10.16%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7499 7.25">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.pe435900} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p344b9a00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionalItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93px]" data-name="Optional item">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Annuleren">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          Annuleren
        </p>
        <div className="relative shrink-0 size-[16px]" data-name="♣️ End Icon">
          <div className="absolute inset-[19.53%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 9.75">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p18b8dc80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p1273df00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex gap-[56px] items-center justify-end py-[16px] relative shrink-0" data-name="Menu items">
      <MainItems />
      <OptionalItem />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1104px] overflow-clip py-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 size-[56px]" data-name="Logo">
        <div className="absolute inset-[1.39%_0.72%_1.16%_0.69%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.2067 54.5746">
            <path d={svgPaths.p2b3b5700} fill="var(--fill-0, #E75204)" id="Vector" />
          </svg>
        </div>
      </div>
      <MenuItems />
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Slot">
      <div className="bg-[#f1f1f2] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] shrink-0" data-name="Chat bubble">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] max-h-[240px] max-w-[640px] relative shrink-0 text-[#1f1e2f] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Ik wil sportkleding, zo'n 5 stuks`}</p>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Chat">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start py-[24px] relative size-full">
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Chat Turn">
            <Slot />
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[640px]" data-name="Loader">
            <div className="relative shrink-0 size-[32px]" data-name="loader-android">
              <div className="absolute inset-[17.5%_17.51%_17.5%_17.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7969 20.7998">
                  <path d={svgPaths.p3a955100} fill="var(--fill-0, #E75204)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#67687f] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
              Loading state...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f1f1f2] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
        <div className="absolute inset-[20.23%_13.17%_15.26%_15.25%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1784 15.4817">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2bc71100} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p67f5400} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35575b80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1530f100} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p362a2e80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
        <div className="absolute inset-[6.25%_18.75%_8.14%_18.75%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20.5469">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3ff87780} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p134f1800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1a084d80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p5ce0b80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1a87bb80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.pd7ed600} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d713980} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p15cdfc00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2097800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p61afe40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p27e380} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#6161ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="♣️ Icon">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p2f501100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Right">
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
        <Button1 />
      </div>
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
        <Button2 />
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Actions">
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
        <Button />
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#67687f] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Type je bericht...
      </p>
      <Right />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pb-[8px] relative shrink-0 w-full" data-name="Bottom">
      <div className="bg-white drop-shadow-[0px_2px_4px_rgba(31,30,47,0.15)] relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div aria-hidden className="absolute border border-[#bec0cb] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Actions />
        </div>
      </div>
      <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#67687f] text-[0px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <span className="leading-[1.5] text-[14px]">{`We use AI, check important info. `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[1.5] text-[14px] underline" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          More info
        </span>
      </p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative w-full" data-name="Wrapper">
      <Chat />
      <Bottom />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start max-w-[722px] min-w-px relative" data-name="Content">
      <Wrapper />
    </div>
  );
}

function Overflow() {
  return <div className="absolute bg-gradient-to-b from-white h-[24px] left-0 to-[rgba(255,255,255,0)] top-0 w-[1280px]" data-name="Overflow" />;
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center px-[40px] relative size-full">
          <Content />
          <Overflow />
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Loading">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header Minimal (Autosize)">
        <div className="bg-[#f1f1f2] relative shrink-0 w-full" data-name="Header Generic - Minimal">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center px-[40px] relative size-full">
              <Container />
            </div>
          </div>
        </div>
      </div>
      <Container1 />
    </div>
  );
}