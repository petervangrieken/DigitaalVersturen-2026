import svgPaths from "./svg-50g8rn8e6d";

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

function Right() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Right">
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
        <Button1 />
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
        Beschrijf wat je wilt versturen in 1 of 2 zinnen...
      </p>
      <Right />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Kleding & textiel`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Boeken, papier & media`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Elektronica & tech`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Wonen & interieur`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Cadeaus & feestartikelen`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Onderdelen & gereedschap`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Gezondheid & persoonlijke verzorging`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f2] flex-[1_0_0] min-w-px relative rounded-[6px] self-stretch" data-name=".x / Link - Emphasis">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.4] min-w-px relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>{`Voedsel & dranken`}</p>
            <div className="relative shrink-0 size-[16px]" data-name="▶️ Chevron">
              <div className="absolute inset-[10.16%_25.78%_10.16%_28.91%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.25 12.7499">
                  <g id="Vector">
                    <path clipRule="evenodd" d={svgPaths.p36993b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                    <path clipRule="evenodd" d={svgPaths.p6d60c40} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Wrapper">
      <p className="[word-break:break-word] font-['ABC_ROM:Bold',sans-serif] leading-[1.05] not-italic relative shrink-0 text-[#1f1e2f] text-[21px] whitespace-nowrap">Of kies direct een categorie</p>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Link List - Emphasis (L)">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start max-w-[722px] min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['ABC_ROM:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[#001a73] text-[40px] tracking-[-1.5px] w-full">Goedemorgen, wat wil je versturen?</p>
      <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
        <div aria-hidden className="absolute border border-[#67687f] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Actions />
        </div>
      </div>
      <Wrapper />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[40px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Copyright">
      <div className="relative shrink-0 size-[40px]" data-name="Logo">
        <div className="absolute inset-[1.39%_0.72%_1.16%_0.69%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.4333 38.9819">
            <path d={svgPaths.p1e362100} fill="var(--fill-0, #E75204)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[14px] whitespace-nowrap" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        © Koninklijke PostNL
      </p>
    </div>
  );
}

function Links() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[24px] items-center justify-end leading-[1.5] min-w-px relative text-[#1f1e2f] text-[14px] whitespace-nowrap" data-name="Links">
      <p className="relative shrink-0" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Privacy
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Cookies
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Gebruiksvoorwaarden
      </p>
      <p className="relative shrink-0" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Algemene voorwaarden
      </p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1104px] relative shrink-0 w-full" data-name="Wrapper">
      <Copyright />
      <Links />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[72px] items-center relative size-full" data-name="Landing">
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
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]" data-name="Footer Minimal (Autosize)">
        <div className="bg-[#f1f1f2] relative shrink-0 w-full" data-name="Footer Generic - Minimal">
          <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center px-[40px] py-[24px] relative size-full">
              <Wrapper1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}