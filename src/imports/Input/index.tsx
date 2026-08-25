import svgPaths from "./svg-bcxmju4dei";
type InputProps = {
  className?: string;
  empty?: boolean;
  placeholder?: string;
  state?: "Default" | "Focus" | "Hover";
  value?: string;
  workMode?: boolean;
};

export default function Input({ className, empty = true, placeholder = "Placeholder", state = "Default", value = "Value", workMode = false }: InputProps) {
  const isEmpty = empty;
  const isNotEmptyAndNotWorkMode = !empty && !workMode;
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] w-[696px]"}>
      <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${state === "Hover" && (!workMode || (empty && workMode)) ? "border-[#6161ff]" : empty && workMode && ["Default", "Focus"].includes(state) ? "border-[#bec0cb]" : "border-[#67687f]"}`} />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Actions">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
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
        </div>
        {isEmpty && (
          <>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#67687f] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
              {placeholder}
            </p>
            <div className={`content-stretch flex items-center relative shrink-0 ${empty && state === "Focus" && workMode ? "gap-[10px] w-[90px]" : empty && workMode && ["Default", "Hover"].includes(state) ? "gap-[10px]" : ""}`} data-name="Right">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
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
              </div>
              {empty && workMode && (
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
                  <div className="bg-[#6161ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="♣️ Icon">
                      <div className="absolute inset-[16.67%]" data-name="Vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path clipRule="evenodd" d={svgPaths.p2f501100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        {isNotEmptyAndNotWorkMode && (
          <>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#1f1e2f] text-[16px]" style={{ fontFeatureSettings: '"ss01", "ss03"' }}>
              {value}
            </p>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Right">
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
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
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Icon Button">
                <div className="bg-[#6161ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Button">
                  <div className="relative shrink-0 size-[24px]" data-name="♣️ Icon">
                    <div className="absolute inset-[15.3%_15.35%_15.62%_15.34%]" data-name="Vector">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6349 16.5799">
                        <g id="Vector">
                          <path clipRule="evenodd" d={svgPaths.p2b87bb40} fill="var(--fill-0, white)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p2e234b0} fill="var(--fill-0, white)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p4a8e100} fill="var(--fill-0, white)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {state === "Focus" && (!workMode || (empty && workMode)) && (
        <div className="absolute inset-[-1px] rounded-[9px]" data-name="👓 Focus outline">
          <div aria-hidden className="absolute border-2 border-[#001a73] border-solid inset-[-2px] pointer-events-none rounded-[11px]" />
        </div>
      )}
    </div>
  );
}