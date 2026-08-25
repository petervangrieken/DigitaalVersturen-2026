import svgPaths from "./svg-nr6khi40gg";

function Object() {
  return (
    <div className="absolute inset-[5.33%]" data-name="Object">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.88 42.8801">
        <g id="Object">
          <mask height="43" id="mask0_6012_409" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="43" x="0" y="0">
            <path d={svgPaths.p2f039400} fill="var(--fill-0, white)" id="Rectangle" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </mask>
          <g mask="url(#mask0_6012_409)">
            <rect fill="var(--fill-0, white)" height="42.88" id="Rectangle_2" width="42.88" x="2.86102e-06" />
            <path clipRule="evenodd" d={svgPaths.p39018070} fill="var(--fill-0, #E75204)" fillRule="evenodd" id="Rectangle (Stroke)" />
            <g id="illustration">
              <path d={svgPaths.p25f41300} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p24696600} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pa051d00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p166e7100} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p105a8500} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p3163cb00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p196e3f00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.pcbafd00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p1fe7600} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p98f9a80} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p11d45c00} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p12313b80} fill="var(--fill-0, #E75204)" />
              <path d={svgPaths.p25f41300} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p24696600} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pa051d00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p166e7100} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p105a8500} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p3163cb00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p196e3f00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.pcbafd00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p1fe7600} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p98f9a80} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p11d45c00} stroke="var(--stroke-0, #E75204)" />
              <path d={svgPaths.p12313b80} stroke="var(--stroke-0, #E75204)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function BlendMode() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Blend mode">
      <div className="relative shrink-0 size-[48px]" data-name="🖼 Illustration">
        <Object />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative text-[#1f1e2f] text-[16px]" data-name="Text">
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 w-full" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        <p className="leading-[1.25]">Title</p>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 w-full" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
        Message
      </p>
    </div>
  );
}

function IllustrationText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Illustration + Text">
      <BlendMode />
      <Text />
    </div>
  );
}

export default function RadioButton() {
  return (
    <div className="bg-[#f1f1f2] content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative rounded-[4px] size-full" data-name="Radio Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[24px] shrink-0 size-[20px]" data-name=".x / Radio">
        <div aria-hidden className="absolute border border-[#67687f] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Checked">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #E75204)" id="Checked" r="6" />
          </svg>
        </div>
        <div className="absolute inset-[-2px]" data-name="👓 Focus outline">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" id="ð Focus outline" r="13" stroke="var(--stroke-0, #001A73)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <IllustrationText />
      <div className="absolute inset-[-5px] rounded-[9px]" data-name="👓 Focus outline">
        <div aria-hidden className="absolute border-2 border-[#001a73] border-solid inset-[-2px] pointer-events-none rounded-[11px]" />
      </div>
      <div className="absolute inset-[-2px] rounded-[6px]" data-name="✅ Selected outline">
        <div aria-hidden className="absolute border-2 border-[#e75204] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}