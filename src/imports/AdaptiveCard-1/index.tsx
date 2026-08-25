import svgPaths from "./svg-uiq0gk9opn";

function Amount() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold items-end justify-end relative shrink-0 text-[#1f1e2f] w-full whitespace-nowrap" data-name="Amount">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[25px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.05]">+ € 5,</p>
      </div>
      <p className="leading-[1.05] relative shrink-0 text-[16.125px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        00
      </p>
    </div>
  );
}

function CountrySelection() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="van-speed (L)">
            <div className="absolute bottom-1/4 left-[5.05%] right-[7.04%] top-[27.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.1651 19.002">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p1c28cc40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  <path d={svgPaths.p372af100} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p274b9a00} fill="var(--fill-0, #4E4EE2)" />
                </g>
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            Snelle bezorging
          </p>
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1e2f] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            <p className="leading-[1.5] mb-0">{`Levertijd binnen `}</p>
            <p className="leading-[1.5]">24 uur</p>
          </div>
          <Amount />
        </div>
      </div>
    </div>
  );
}

function Amount1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold items-end justify-end relative shrink-0 text-[#1f1e2f] w-full whitespace-nowrap" data-name="Amount">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[25px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.05]">€ 0,</p>
      </div>
      <p className="leading-[1.05] relative shrink-0 text-[16.125px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        00
      </p>
    </div>
  );
}

function CountrySelection1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="van (L)">
            <div className="absolute bottom-1/4 left-[12.5%] right-[9.54%] top-[27.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.1853 19.002">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p41d0e40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  <path d={svgPaths.p1d92e900} fill="var(--fill-0, #4E4EE2)" />
                </g>
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            Standaard
          </p>
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1e2f] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            <p className="leading-[1.5] mb-0">{`Levertijd van maximaal `}</p>
            <p className="leading-[1.5]">2 werkdagen</p>
          </div>
          <Amount1 />
          <div className="absolute inset-[-2px_-2.67px_-2px_-1.67px] rounded-[8px]" data-name="Selection line">
            <div aria-hidden className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Amount2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Hanken_Grotesk:ExtraBold',sans-serif] font-extrabold items-end justify-end relative shrink-0 text-[#1f1e2f] w-full whitespace-nowrap" data-name="Amount">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[25px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.05]">- € 2,</p>
      </div>
      <p className="leading-[1.05] relative shrink-0 text-[16.125px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        00
      </p>
    </div>
  );
}

function CountrySelection2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Country-selection">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[40px]" data-name="sustainable_outline (L)">
            <div className="absolute inset-[7.5%_9.22%_10.13%_9.82%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3849 32.9474">
                <g id="Vector">
                  <path d={svgPaths.p3f7bf100} fill="var(--fill-0, #4E4EE2)" />
                  <path d={svgPaths.p37137c80} fill="var(--fill-0, #4E4EE2)" />
                </g>
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            Maakt me niet uit
          </p>
          <div className="[word-break:break-word] flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#1f1e2f] text-[16px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
            <p className="leading-[1.5] mb-0">{`Levertijd van maximaal `}</p>
            <p className="leading-[1.5]">5 werkdagen</p>
          </div>
          <Amount2 />
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

export default function AdaptiveCard() {
  return (
    <div className="bg-[#f1f1f2] content-stretch flex flex-col gap-[16px] items-end p-[24px] relative rounded-[8px] size-full" data-name="Adaptive card">
      <p className="[word-break:break-word] font-['ABC_ROM:Bold',sans-serif] leading-[0.95] min-w-full not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-[min-content]">Bezorgtijd</p>
      <Wrapper />
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