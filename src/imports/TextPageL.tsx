import svgPaths from "./svg-dx5b74hdqv";

function HeaderTab() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center pb-[8px] pt-[4px] px-[16px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Header Tab 1">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative text-[#e75204] text-[16px] text-center whitespace-nowrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            <p className="leading-[1.5]">Consument</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderTab1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8px] pt-[4px] px-[16px] relative rounded-tl-[4px] rounded-tr-[4px]" data-name="Header Tab 2">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Zakelijk
          </p>
        </div>
      </div>
    </div>
  );
}

function HeaderTabs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header Tabs">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <HeaderTab />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <HeaderTab1 />
        </div>
      </div>
    </div>
  );
}

function EndIconS() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="♣️ End Icon (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="â£ï¸ End Icon (S)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d940800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14cff000} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMenuItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pr-[16px] relative shrink-0" data-name="Link Menu item">
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-r border-solid inset-0 pointer-events-none" />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        NL
      </p>
      <EndIconS />
    </div>
  );
}

function ShoppingCartM() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-cart (M)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart (M)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p80a1800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf7fbb00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p12bfdc00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pd12ea00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14813f00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pef8ee00} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p22284900} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p215ca2f0} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p37d20100} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderTopRightContentPlaceholder() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header Top Right / Content Placeholder">
      <LinkMenuItem />
      <ShoppingCartM />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Right">
      <HeaderTopRightContentPlaceholder />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[44px] max-w-[1104px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between max-w-[inherit] pl-[96px] pt-[8px] relative size-full">
        <HeaderTabs />
        <Right />
      </div>
    </div>
  );
}

function HeaderTop() {
  return (
    <div className="bg-[#f1f1f2] relative shrink-0 w-full" data-name=".Header Top">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[40px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
        <g id="Logo">
          <path d={svgPaths.p24a9cfb0} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function ChevronDownS() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="â£ï¸ End Icon (S)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d940800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14cff000} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMenuItem1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Menu item">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Versturen
      </p>
      <ChevronDownS />
    </div>
  );
}

function ChevronDownS1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="â£ï¸ End Icon (S)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d940800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14cff000} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMenuItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Menu item">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Ontvangen
      </p>
      <ChevronDownS1 />
    </div>
  );
}

function ChevronDownS2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="â£ï¸ End Icon (S)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d940800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14cff000} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMenuItem3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Menu item">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Webshop
      </p>
      <ChevronDownS2 />
    </div>
  );
}

function LinkMenuItem4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Menu item">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>{`Service & contact`}</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Nav">
      <LinkMenuItem1 />
      <LinkMenuItem2 />
      <LinkMenuItem3 />
      <LinkMenuItem4 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Left">
      <Nav />
    </div>
  );
}

function ChevronDownS3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down (S)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="â£ï¸ End Icon (S)">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2d940800} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14cff000} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LinkMenuItem5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link Menu item">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4e4ee2] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Inloggen
      </p>
      <ChevronDownS3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pe826b80} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2fb6f9c0} fill="var(--fill-0, #4E4EE2)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Control() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Control">
      <div aria-hidden="true" className="absolute border border-[#67687f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[16px] pr-[8px] py-[8px] relative w-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#67687f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>{` `}</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input field">
      <Control />
    </div>
  );
}

function HeaderRightLinkAndSearch() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Header Right / Link and Search">
      <LinkMenuItem5 />
      <InputField />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Right">
      <HeaderRightLinkAndSearch />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center max-w-[1104px] relative shrink-0 w-full" data-name="Container">
      <Logo />
      <Left />
      <Right1 />
    </div>
  );
}

function HeaderBottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header Bottom">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[8px] pt-[12px] px-[40px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

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
      <HeaderTop />
      <HeaderBottom />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[#001a73] text-[40px] tracking-[-1.5px] w-full">Title</p>
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[18px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Subtitle
      </p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Top">
      <Frame8 />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-full">Heading L</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1f1e2f] w-full" data-name="Subsection">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[1.05] max-w-[722px] not-italic relative shrink-0 text-[21px] w-full">Heading M</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] max-w-[532px] relative shrink-0 text-[0px] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <span className="leading-[1.5]">{`Maecenas sed diam eget risus varius blandit sit amet non magna. `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[1.5] text-[#4e4ee2] underline" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
          Vivamus sagittis lacus
        </span>
        <span className="leading-[1.5]">{` vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`}</span>
      </p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Section">
      <Frame1 />
      <Subsection />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[0.95] not-italic relative shrink-0 text-[#e75204] text-[25px] tracking-[-0.5px] w-full">Heading L</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon1 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon4 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon3 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon5 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function ListBasic() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List - Basic">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame4 />
      <ListBasic />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#1f1e2f] w-full whitespace-pre-wrap">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[1.05] not-italic relative shrink-0 text-[21px] w-full">Heading M</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Column 1
      </p>
    </div>
  );
}

function XCellHeader() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="x / Cell / Header">
      <div className="content-stretch flex items-start px-[12px] py-[16px] relative w-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Column 2
      </p>
    </div>
  );
}

function XCellHeader1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="x / Cell / Header">
      <div className="content-stretch flex items-start px-[12px] py-[16px] relative w-full">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.25] relative shrink-0 text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Column 3
      </p>
    </div>
  );
}

function XCellHeader2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="x / Cell / Header">
      <div className="content-stretch flex items-start px-[12px] py-[16px] relative w-full">
        <Text2 />
      </div>
    </div>
  );
}

function XRowHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".x / Row / Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <XCellHeader />
          <XCellHeader1 />
          <XCellHeader2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function XCellData() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Consectetur elit
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Porta porus
          </p>
        </div>
      </div>
    </div>
  );
}

function XRowData() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".x / Row / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <XCellData />
          <XCellData1 />
          <XCellData2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function XCellData3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Consectetur elit
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Porta porus
          </p>
        </div>
      </div>
    </div>
  );
}

function XRowData1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".x / Row / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <XCellData3 />
          <XCellData4 />
          <XCellData5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function XCellData6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Consectetur elit
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Porta porus
          </p>
        </div>
      </div>
    </div>
  );
}

function XRowData2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".x / Row / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <XCellData6 />
          <XCellData7 />
          <XCellData8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function XCellData9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Consectetur elit
          </p>
        </div>
      </div>
    </div>
  );
}

function XCellData11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name=".x / Cell / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[15px] relative w-full">
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1f1e2f] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
            Porta porus
          </p>
        </div>
      </div>
    </div>
  );
}

function XRowData3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".x / Row / Data">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative w-full">
          <XCellData9 />
          <XCellData10 />
          <XCellData11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#bec0cb] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Table">
      <XRowHeader />
      <XRowData />
      <XRowData1 />
      <XRowData2 />
      <XRowData3 />
    </div>
  );
}

function TableLDeprecated() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Table (L) - Deprecated">
      <Table />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame6 />
      <TableLDeprecated />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon8 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon7 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon10 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon9 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="â£ï¸ Icon">
          <path d={svgPaths.pcf44f00} fill="var(--fill-0, #E75204)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[15px]" data-name="Icon">
      <Icon12 />
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="List item">
      <Icon11 />
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#1f1e2f] text-[16px] whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Curabitur blandit tempus
      </p>
    </div>
  );
}

function ListBasic1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List - Basic">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1f1e2f] text-[0px] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <span className="leading-[1.5]">{`Maecenas sed diam eget risus varius blandit sit amet non magna. `}</span>
        <span className="leading-[1.5]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
          Vivamus sagittis lacus
        </span>
        <span className="leading-[1.5]">{` vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`}</span>
      </p>
      <ListBasic1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#1f1e2f] text-[0px] text-[16px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        <span className="leading-[1.5]">{`Maecenas sed diam eget risus varius blandit sit amet non magna. `}</span>
        <span className="leading-[1.5]" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
          Vivamus sagittis lacus
        </span>
        <span className="leading-[1.5]">{` vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.`}</span>
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['ABC_ROM:Bold',sans-serif] leading-[1.05] not-italic relative shrink-0 text-[#1f1e2f] text-[19px] w-full whitespace-pre-wrap">Heading S</p>
      <Frame5 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#6161ff] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-center text-white" style={{ fontFeatureSettings: "\'ss01\', \'ss03\'" }}>
        Button
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <Button />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Subsection">
      <Frame7 />
      <Buttons />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame2 />
      <Frame3 />
      <Subsection1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[88px] items-start relative shrink-0 w-full">
      <Section />
      <Section1 />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[532px] relative shrink-0 w-[532px]" data-name="Content Section">
      <Top />
      <Frame />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[40px] relative w-full">
          <ContentSection />
        </div>
      </div>
    </div>
  );
}

export default function TextPageL() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[72px] items-center relative size-full" data-name="Text page (L)">
      <HeaderAutosize />
      <ContentContainer />
    </div>
  );
}