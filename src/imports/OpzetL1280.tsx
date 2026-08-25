import svgPaths from "./svg-ht2zqckev9";

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link 1">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[14px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Link 1
      </p>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Chevron">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p36018800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31861b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[4px]" data-name="Wrapper">
      <Chevron />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link 2">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[14px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Link 2
      </p>
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Chevron">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p36018800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31861b00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[4px]" data-name="Wrapper">
      <Chevron1 />
    </div>
  );
}

function BreadcrumbsL() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0" data-name="Breadcrumbs (L)">
      <Link />
      <Wrapper />
      <Link1 />
      <Wrapper1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[14px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Page title
      </p>
    </div>
  );
}

function BreadcrumbWrapper() {
  return (
    <div className="max-w-[1104px] relative shrink-0 w-full" data-name="Breadcrumb wrapper">
      <div className="content-stretch flex items-start max-w-[inherit] pl-[112px] py-[12px] relative w-full">
        <BreadcrumbsL />
      </div>
    </div>
  );
}

function HeaderGeneric() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header Generic">
      <BreadcrumbWrapper />
    </div>
  );
}

function HeaderAutosize() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header (Autosize)">
      <HeaderGeneric />
    </div>
  );
}

function TitlePage() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[914px] relative shrink-0 w-full whitespace-pre-wrap" data-name="Title page">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.9] max-w-[532px] not-italic relative shrink-0 text-[#001a73] text-[32px] tracking-[-1px] w-full">Titel valt op maximaal 3 regels (55 tekens)</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[1.25] max-w-[532px] relative shrink-0 text-[#1f1e2f] text-[18px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Minimaal 100 tekens incl spaties, maximaal 140 tekens incl spaties.
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Top">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] max-w-[722px] not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-full">Vraag valt op maximaal 3 regels (75 tekens)</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] max-w-[532px] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Toelichting maximaal 35 tekens
      </p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Wrapper">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Label
      </p>
    </div>
  );
}

function FormLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Form Label">
      <Wrapper2 />
    </div>
  );
}

function XRadio() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
          <circle cx="10" cy="10" fill="var(--fill-0, #E75204)" id="Checked" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Object() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object />
    </div>
  );
}

function BlendMode() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Title</p>
      </div>
    </div>
  );
}

function IllustrationText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode />
      <Text />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <div className="absolute inset-[-2px] rounded-[6px]" data-name="✅ Selected outline">
            <div aria-hidden="true" className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
          </div>
          <XRadio />
          <IllustrationText />
        </div>
      </div>
    </div>
  );
}

function XRadio1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object1() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4285" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4285)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p3ae04480} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3fa42200} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p33d1c000} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p37289b00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p22e27d00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3b20d40} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p12bfba80} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p250c0600} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pccc1b30} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p26d97300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2a01db00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3e990970} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3ae04480} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3fa42200} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p33d1c000} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p37289b00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p22e27d00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3b20d40} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p12bfba80} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p250c0600} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pccc1b30} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p26d97300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2a01db00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3e990970} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object1 />
    </div>
  );
}

function BlendMode1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.2] whitespace-pre-wrap">Title</p>
      </div>
    </div>
  );
}

function IllustrationText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode1 />
      <Text1 />
    </div>
  );
}

function Option() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[16px] relative w-full">
          <XRadio1 />
          <IllustrationText1 />
        </div>
      </div>
    </div>
  );
}

function XRadio2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object2() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4285" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4285)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p3ae04480} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3fa42200} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p33d1c000} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p37289b00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p22e27d00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3b20d40} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p12bfba80} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p250c0600} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pccc1b30} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p26d97300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2a01db00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3e990970} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3ae04480} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3fa42200} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p33d1c000} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p37289b00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p22e27d00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3b20d40} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p12bfba80} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p250c0600} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pccc1b30} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p26d97300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2a01db00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3e990970} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object2 />
    </div>
  );
}

function BlendMode2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.2] whitespace-pre-wrap">Title</p>
      </div>
    </div>
  );
}

function IllustrationText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode2 />
      <Text2 />
    </div>
  );
}

function Option1() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Option 3">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[12px] py-[16px] relative w-full">
          <XRadio2 />
          <IllustrationText2 />
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Options">
      <RadioButton />
      <Option />
      <Option1 />
    </div>
  );
}

function Fieldset() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Fieldset">
      <FormLabel />
      <Options />
    </div>
  );
}

function RadioButtonGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Radio Button Group">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[180px] relative w-full">
        <Top />
        <Fieldset />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]" data-name="Container">
      <RadioButtonGroup />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] min-w-full not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-[min-content] whitespace-pre-wrap">Vraag 2</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Toelichting
      </p>
    </div>
  );
}

function XRadio3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
          <circle cx="10" cy="10" fill="var(--fill-0, #E75204)" id="Checked" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Object3() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration3() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object3 />
    </div>
  );
}

function BlendMode3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode3 />
      <Text3 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <div className="absolute inset-[-2px] rounded-[6px]" data-name="✅ Selected outline">
            <div aria-hidden="true" className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
          </div>
          <XRadio3 />
          <IllustrationText3 />
        </div>
      </div>
    </div>
  );
}

function XRadio4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object4() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration4() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object4 />
    </div>
  );
}

function BlendMode4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode4 />
      <Text4 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio4 />
          <IllustrationText4 />
        </div>
      </div>
    </div>
  );
}

function XRadio5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object5() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration5() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object5 />
    </div>
  );
}

function BlendMode5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode5 />
      <Text5 />
    </div>
  );
}

function RadioButton3() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio5 />
          <IllustrationText5 />
        </div>
      </div>
    </div>
  );
}

function RadioButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Radio Button Group">
      <RadioButton1 />
      <RadioButton2 />
      <RadioButton3 />
    </div>
  );
}

function XRadio6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object6() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration6() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object6 />
    </div>
  );
}

function BlendMode6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode6 />
      <Text6 />
    </div>
  );
}

function RadioButton4() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <XRadio6 />
          <IllustrationText6 />
        </div>
      </div>
    </div>
  );
}

function XRadio7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object7() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration7() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object7 />
    </div>
  );
}

function BlendMode7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode7 />
      <Text7 />
    </div>
  );
}

function RadioButton5() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio7 />
          <IllustrationText7 />
        </div>
      </div>
    </div>
  );
}

function XRadio8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object8() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration8() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object8 />
    </div>
  );
}

function BlendMode8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration8 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode8 />
      <Text8 />
    </div>
  );
}

function RadioButton6() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio8 />
          <IllustrationText8 />
        </div>
      </div>
    </div>
  );
}

function RadioButtonGroup2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Radio Button Group">
      <RadioButton4 />
      <RadioButton5 />
      <RadioButton6 />
    </div>
  );
}

function Options1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Options">
      <RadioButtonGroup1 />
      <RadioButtonGroup2 />
    </div>
  );
}

function RadioChoiceCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[914px] relative shrink-0 w-full" data-name="Radio Choice Card">
      <Question />
      <Options1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]" data-name="Container">
      <RadioChoiceCard />
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Question">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] min-w-full not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-[min-content] whitespace-pre-wrap">Vraag 3</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Toelichting
      </p>
    </div>
  );
}

function XRadio9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
          <circle cx="10" cy="10" fill="var(--fill-0, #E75204)" id="Checked" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Object9() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration9() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object9 />
    </div>
  );
}

function BlendMode9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration9 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode9 />
      <Text9 />
    </div>
  );
}

function RadioButton7() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <div className="absolute inset-[-2px] rounded-[6px]" data-name="✅ Selected outline">
            <div aria-hidden="true" className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
          </div>
          <XRadio9 />
          <IllustrationText9 />
        </div>
      </div>
    </div>
  );
}

function XRadio10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object10() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration10() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object10 />
    </div>
  );
}

function BlendMode10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration10 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode10 />
      <Text10 />
    </div>
  );
}

function RadioButton8() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio10 />
          <IllustrationText10 />
        </div>
      </div>
    </div>
  );
}

function XRadio11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object11() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration11() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object11 />
    </div>
  );
}

function BlendMode11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration11 />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode11 />
      <Text11 />
    </div>
  );
}

function RadioButton9() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio11 />
          <IllustrationText11 />
        </div>
      </div>
    </div>
  );
}

function RadioButtonGroup3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Radio Button Group">
      <RadioButton7 />
      <RadioButton8 />
      <RadioButton9 />
    </div>
  );
}

function XRadio12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object12() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration12() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object12 />
    </div>
  );
}

function BlendMode12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration12 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode12 />
      <Text12 />
    </div>
  );
}

function RadioButton10() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <XRadio12 />
          <IllustrationText12 />
        </div>
      </div>
    </div>
  );
}

function XRadio13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object13() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration13() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object13 />
    </div>
  );
}

function BlendMode13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration13 />
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode13 />
      <Text13 />
    </div>
  );
}

function RadioButton11() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio13 />
          <IllustrationText13 />
        </div>
      </div>
    </div>
  );
}

function XRadio14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".x / Radio">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".x / Radio">
          <path d={svgPaths.p1d1aa640} fill="var(--fill-0, white)" />
          <path d={svgPaths.p1d1aa640} stroke="var(--stroke-0, #67687F)" />
        </g>
      </svg>
    </div>
  );
}

function Object14() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.0267 50.0267">
        <g id="Object">
          <mask height="51" id="mask0_2001_4276" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="51" x="0" y="0">
            <path d={svgPaths.p3f9e3a00} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="0.373333" />
          </mask>
          <g mask="url(#mask0_2001_4276)">
            <rect fill="var(--fill-0, white)" height="50.0267" id="Rectangle_2" width="50.0267" />
            <path clipRule="evenodd" d={svgPaths.pc2c1980} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p23c88a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pab99900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p30799a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2dd99700} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1760ac00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p175d5a00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p229f0300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p4264900} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p391f0080} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1304e500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p23c88a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pab99900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p30799a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2dd99700} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1760ac00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p175d5a00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p229f0300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p4264900} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p391f0080} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1304e500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1eaa9500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p2ade9f0} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Illustration14() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="🖼 Illustration">
      <Object14 />
    </div>
  );
}

function BlendMode14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <Illustration14 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <p className="leading-[1.25] whitespace-pre-wrap">Titel</p>
      </div>
    </div>
  );
}

function IllustrationText14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Illustration + Text">
      <BlendMode14 />
      <Text14 />
    </div>
  );
}

function RadioButton12() {
  return (
    <div className="bg-[#f1f1f2] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Radio Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative size-full">
          <XRadio14 />
          <IllustrationText14 />
        </div>
      </div>
    </div>
  );
}

function RadioButtonGroup4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Radio Button Group">
      <RadioButton10 />
      <RadioButton11 />
      <RadioButton12 />
    </div>
  );
}

function Options2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Options">
      <RadioButtonGroup3 />
      <RadioButtonGroup4 />
    </div>
  );
}

function RadioChoiceCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[914px] relative shrink-0 w-full" data-name="Radio Choice Card">
      <Question1 />
      <Options2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]" data-name="Container">
      <RadioChoiceCard1 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Section">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] max-w-[532px] not-italic relative shrink-0 text-[#1f1e2f] text-[25px] tracking-[-0.5px] w-full">Titel valt op maximaal 3 regels (85 tekens)</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] max-w-[532px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Toelichting één alinea, maximaal 200 tekens.
      </p>
    </div>
  );
}

function SectionSubsection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Section + subsection">
      <Section />
    </div>
  );
}

function RefreshM() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="refresh (M)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh (M)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p83e3480} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p204fe080} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.p35f17100} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p3ca38600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5776e00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d5ad700} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5db7100} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.pe04e700} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p1058cf00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2be9e600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SlotComponent() {
  return (
    <div className="bg-[rgba(237,112,0,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Slot component">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <RefreshM />
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#d83d00] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Swap me
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e75204] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentPlaceholder() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start max-w-[532px] relative shrink-0 w-full" data-name="🔄 Content placeholder">
      <SlotComponent />
    </div>
  );
}

function PlaceholderWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Placeholder wrapper">
      <ContentPlaceholder />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[532px] relative shrink-0 w-[532px]" data-name="Section">
      <PlaceholderWrapper />
    </div>
  );
}

function RefreshM1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="refresh (M)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh (M)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p83e3480} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p204fe080} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.p35f17100} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p3ca38600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5776e00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d5ad700} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5db7100} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.pe04e700} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p1058cf00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2be9e600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SlotComponent1() {
  return (
    <div className="bg-[rgba(237,112,0,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Slot component">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <RefreshM1 />
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#d83d00] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Swap me
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e75204] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentPlaceholder1() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start max-w-[532px] relative shrink-0 w-full" data-name="🔄 Content placeholder">
      <SlotComponent1 />
    </div>
  );
}

function PlaceholderWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Placeholder wrapper">
      <ContentPlaceholder1 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[532px] relative shrink-0 w-[532px]" data-name="Section">
      <PlaceholderWrapper1 />
    </div>
  );
}

function RefreshM2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="refresh (M)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh (M)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p83e3480} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p204fe080} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.p35f17100} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p3ca38600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5776e00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d5ad700} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p5db7100} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path d={svgPaths.pe04e700} fill="var(--fill-0, #E75204)" />
            <path clipRule="evenodd" d={svgPaths.p1058cf00} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2be9e600} fill="var(--fill-0, #E75204)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SlotComponent2() {
  return (
    <div className="bg-[rgba(237,112,0,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Slot component">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <RefreshM2 />
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#d83d00] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Swap me
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e75204] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentPlaceholder2() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start max-w-[532px] relative shrink-0 w-full" data-name="🔄 Content placeholder">
      <SlotComponent2 />
    </div>
  );
}

function PlaceholderWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Placeholder wrapper">
      <ContentPlaceholder2 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[532px] relative shrink-0 w-[532px]" data-name="Section">
      <PlaceholderWrapper2 />
    </div>
  );
}

function Textanswer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[914px] py-[40px] relative shrink-0 w-[914px]" data-name="Textanswer">
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid border-t inset-0 pointer-events-none" />
      <SectionSubsection />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function LikeS() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="like (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="like (S)">
          <path clipRule="evenodd" d={svgPaths.p29ea3980} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#6161ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <LikeS />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px] text-center" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Ja, opgelost
      </p>
    </div>
  );
}

function DislikeS() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="dislike (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="dislike (S)">
          <path clipRule="evenodd" d={svgPaths.p23a06180} fill="var(--fill-0, #6161FF)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#6161ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <DislikeS />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px] text-center" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Nee, ik heb nog een vraag
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
    </div>
  );
}

function ChatbotNaGeholpen() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[914px] relative shrink-0 w-full" data-name="Chatbot na geholpen">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[1.05] not-italic relative shrink-0 text-[#1f1e2f] text-[21px]">{`Heb je gevonden wat je zocht? `}</p>
      <Frame />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-center pb-[88px] px-[40px] relative w-full">
          <TitlePage />
          <Container />
          <Container1 />
          <Container2 />
          <Textanswer />
          <ChatbotNaGeholpen />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <HeaderAutosize />
      <Content />
    </div>
  );
}

export default function OpzetL() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative size-full" data-name="Opzet (L) - 1280">
      <Frame1 />
    </div>
  );
}