import svgPaths from "./svg-lgd69v7rcq";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[16px] w-[167px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Gamma `}</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[1.05] relative shrink-0 text-[14px] w-[185px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Waldorpstraat 54, Den Haag
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1f1e2f] w-full">
      <Frame1 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.5]">Handig als de ontvanger vaak van huis is</p>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-right w-[min-content]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.5]">Gratis</p>
      </div>
    </div>
  );
}

function CountrySelection() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="location-postnl (L)">
            <div className="absolute inset-[15%_5.73%_15%_7.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.7087 28">
                <g id="Vector">
                  <path d={svgPaths.p15e34600} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p245eed00} fill="var(--fill-0, #4E4EE2)" />
                  <path clipRule="evenodd" d={svgPaths.p1c067900} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p29c02b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <Frame />
          <div className="absolute inset-[-2px_-3.33px_-3px_-1px] rounded-[8px]" data-name="Selection line">
            <div aria-hidden className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
          </div>
          <p className="[word-break:break-word] absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] left-[168px] text-[#67687f] text-[14px] top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            200m
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Op adres ontvanger
      </p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] w-[185px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <span className="leading-[1.05] text-[14px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Waldorpstraat `}</span>
        <span className="leading-[1.05] text-[14px]">3</span>
        <span className="leading-[1.05] text-[14px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          , Den Haag
        </span>
      </p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold items-end justify-end relative shrink-0 w-full whitespace-nowrap" data-name="Amount">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[25px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.05]">+ € 0,</p>
      </div>
      <p className="leading-[1.05] relative shrink-0 text-[16.125px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        50
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#1f1e2f] w-full">
      <Frame3 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] w-full" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.5]">Handig als je een groot of zwaar pakket verstuurt</p>
      </div>
      <Amount />
    </div>
  );
}

function CountrySelection1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="home (L)">
            <div className="absolute inset-[10.43%_15%_15%_15%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 29.8298">
                <path d={svgPaths.p1f20f200} fill="var(--fill-0, #4E4EE2)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1f1e2f] w-full">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Pakketautomaat
      </p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] w-[185px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <span className="leading-[1.05] text-[14px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Waldorpstraat `}</span>
        <span className="leading-[1.05] text-[14px]">65</span>
        <span className="leading-[1.05] text-[14px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          , Den Haag
        </span>
      </p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1f1e2f] text-[16px] text-right" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.5]">Gratis</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame5 />
      <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: '"ss01"' }}>
        <p className="leading-[1.6]">Pakket ophalen wanneer het de ontvanger uitkomt</p>
      </div>
      <Amount1 />
    </div>
  );
}

function CountrySelection2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="lockers (L)">
            <div className="absolute inset-[12.5%_10%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 30">
                <g id="Vector">
                  <path d={svgPaths.p2cab9240} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.pb872600} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p188c8b00} fill="var(--fill-0, #4E4EE2)" />
                  <path clipRule="evenodd" d={svgPaths.p21d7380} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  <path d={svgPaths.p11dd1e00} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p3ed4b500} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p25e88c0} fill="var(--fill-0, #4E4EE2)" />
                </g>
              </svg>
            </div>
          </div>
          <Frame4 />
          <p className="[word-break:break-word] absolute font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] left-[168.67px] text-[#67687f] text-[14px] top-[12px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            250m
          </p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Wrapper">
      <CountrySelection />
      <CountrySelection1 />
      <CountrySelection2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0">
      <div className="bg-[#6161ff] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
          Bevestigen
        </p>
        <div className="relative shrink-0 size-[16px]" data-name="♣️ End icon">
          <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, white)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdaptiveCard() {
  return (
    <div className="bg-[#f1f1f2] relative rounded-[8px] shrink-0 w-full" data-name="Adaptive card">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-end p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['ABC_ROM:Bold',sans-serif] leading-[0.95] min-w-full not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-[min-content]">Bezorglocatie</p>
          <Wrapper />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Slot() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Slot">
      <AdaptiveCard />
    </div>
  );
}

export default function ChatTurn() {
  return (
    <div className="content-stretch flex flex-col items-end relative size-full" data-name="Chat Turn">
      <Slot />
    </div>
  );
}